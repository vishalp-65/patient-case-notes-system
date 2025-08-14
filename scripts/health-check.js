#!/usr/bin/env node

/**
 * Health Check Script for Patient Case Notes System
 * Verifies that all required services are running and accessible
 */

const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

const services = [
  {
    name: 'PostgreSQL',
    command: 'docker exec patient-notes-postgres pg_isready -U postgres',
    port: 5432,
    description: 'Database service',
  },
  {
    name: 'Redis',
    command: 'docker exec patient-notes-redis redis-cli ping',
    port: 6379,
    description: 'Cache service',
  },
  {
    name: 'Kafka',
    command:
      'docker exec patient-notes-kafka kafka-broker-api-versions --bootstrap-server localhost:9092',
    port: 9092,
    description: 'Message queue service',
  },
];

async function checkService(service) {
  try {
    console.log(`🔍 Checking ${service.name}...`);

    const { stdout, stderr } = await execAsync(service.command);

    if (
      service.name === 'PostgreSQL' &&
      stdout.includes('accepting connections')
    ) {
      console.log(`✅ ${service.name} is healthy (${service.description})`);
      return true;
    } else if (service.name === 'Redis' && stdout.trim() === 'PONG') {
      console.log(`✅ ${service.name} is healthy (${service.description})`);
      return true;
    } else if (service.name === 'Kafka' && !stderr) {
      console.log(`✅ ${service.name} is healthy (${service.description})`);
      return true;
    } else {
      console.log(`❌ ${service.name} health check failed`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${service.name} is not accessible: ${error.message}`);
    return false;
  }
}

async function checkAllServices() {
  console.log('🏥 NHS Patient Case Notes System - Health Check\n');

  const results = await Promise.all(services.map(checkService));
  const allHealthy = results.every(result => result);

  console.log('\n📊 Health Check Summary:');
  console.log('========================');

  if (allHealthy) {
    console.log('✅ All services are healthy and ready!');
    console.log(
      '\n🚀 You can now start the development server with: npm run dev'
    );
    process.exit(0);
  } else {
    console.log('❌ Some services are not healthy');
    console.log('\n🔧 Try running: npm run docker:up');
    console.log('   Then wait 15 seconds and run this health check again');
    process.exit(1);
  }
}

// Check if Docker is running
async function checkDocker() {
  try {
    await execAsync('docker --version');
    console.log('🐳 Docker is available');
  } catch (error) {
    console.log('❌ Docker is not available or not running');
    console.log('   Please install Docker and ensure it is running');
    process.exit(1);
  }
}

async function main() {
  await checkDocker();
  await checkAllServices();
}

main().catch(console.error);
