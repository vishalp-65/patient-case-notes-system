# NHS Patient Case Notes System

A scalable electronic health record module that enables NHS doctors across the UK to create, manage, and retrieve patient case notes. The system supports both manual text entry and automated transcription of scanned handwritten or typed notes using OCR/AI technology.

## 🏗️ Architecture Overview

- **Frontend**: Next.js 14 with App Router, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js with TypeScript, Express.js, Prisma ORM
- **Database**: PostgreSQL with Redis caching
- **Message Queue**: Apache Kafka for async processing
- **AI/ML**: Google Gemini AI (primary) and AWS Textract (fallback) for OCR
- **Storage**: AWS S3 for file storage
- **Authentication**: NextAuth.js with JWT

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose
- Git

### 1. Clone and Install

```bash
git clone <repository-url>
cd patient-case-notes-system
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your configuration
# At minimum, update these for development:
# - Database credentials (if different from defaults)
# - JWT secrets
# - AWS credentials (for file storage)
# - Google AI API key (for OCR)
```

### 3. Start Infrastructure Services

```bash
# Start all services (PostgreSQL, Redis, Kafka)
npm run docker:up

# Wait for services to be ready (about 15 seconds)
# Check service health
npm run services:health
```

### 4. Initialize Database

```bash
# Set up database schema and run migrations
npm run db:setup

# Optional: Seed with sample data
npm run db:seed
```

### 5. Create Kafka Topics

```bash
# Create required Kafka topics for OCR processing
npm run kafka:create-topics
```

### 6. Start Development Server

```bash
# Start Next.js development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Development Scripts

### Infrastructure Management

```bash
# Start all Docker services
npm run docker:up

# Stop all Docker services
npm run docker:down

# View service logs
npm run docker:logs

# Clean up all containers and volumes
npm run docker:clean

# Rebuild containers from scratch
npm run docker:rebuild
```

### Database Operations

```bash
# Run database migrations
npm run db:migrate

# Generate Prisma client
npm run db:generate

# Open Prisma Studio (database GUI)
npm run db:studio

# Seed database with sample data
npm run db:seed

# Reset database (WARNING: destroys all data)
npm run db:reset
```

### Kafka Operations

```bash
# List all Kafka topics
npm run kafka:topics

# Create OCR processing topics
npm run kafka:create-topics

# Check Kafka health
npm run services:check-kafka
```

### Development Workflow

```bash
# Complete setup (install + infrastructure + database)
npm run setup

# Start development with all services
npm run dev:full

# Code quality checks
npm run lint
npm run format:check
npm run type-check
```

## 🐳 Docker Services

The development environment includes these containerized services:

### PostgreSQL Database

- **Port**: 5432
- **Database**: patient_notes_db
- **Username**: postgres
- **Password**: postgres_password
- **Health Check**: Available at startup

### Redis Cache

- **Port**: 6379
- **Persistence**: Enabled with AOF
- **Health Check**: Redis ping

### Apache Kafka

- **Port**: 9092 (external), 29092 (internal)
- **Zookeeper**: 2181
- **Auto-create topics**: Enabled
- **Health Check**: Broker API versions

### Kafka UI (Development)

- **Port**: 8080
- **URL**: http://localhost:8080
- **Purpose**: Monitor Kafka topics and messages

## 📁 Project Structure

```
patient-case-notes-system/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── lib/                 # Utility libraries
│   ├── types/               # TypeScript type definitions
│   └── styles/              # Global styles
├── prisma/
│   ├── schema.prisma        # Database schema
│   ├── migrations/          # Database migrations
│   └── seed.ts              # Database seeding
├── docker/
│   └── postgres/            # PostgreSQL initialization
├── docker-compose.yml       # Development services
├── .env.example             # Environment template
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables

Key environment variables (see `.env.example` for complete list):

```bash
# Database
DATABASE_URL=postgresql://postgres:postgres_password@localhost:5432/patient_notes_db

# Redis
REDIS_URL=redis://localhost:6379

# Kafka
KAFKA_BROKERS=localhost:9092

# Authentication
NEXTAUTH_SECRET=your-secret-key
JWT_SECRET=your-jwt-secret

# AWS (for file storage)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET_NAME=your-bucket-name

# Google AI (for OCR)
GOOGLE_AI_API_KEY=your-google-ai-key
```

### Database Schema

The system uses PostgreSQL with these main tables:

- `users` - NHS doctors and system users
- `patients` - Patient records with NHS numbers
- `case_notes` - Manual and transcribed case notes
- `file_uploads` - Uploaded files for OCR processing
- `ocr_jobs` - OCR processing job status

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e
```

## 📊 Monitoring & Debugging

### Service Health Checks

```bash
# Check all services
npm run services:health

# Individual service checks
npm run services:check-postgres
npm run services:check-redis
npm run services:check-kafka
```

### Logs and Debugging

```bash
# View all service logs
npm run docker:logs

# View specific service logs
docker-compose logs -f postgres
docker-compose logs -f kafka
docker-compose logs -f redis
```

### Database Management

- **Prisma Studio**: `npm run db:studio` - Web-based database browser
- **Direct PostgreSQL**: Connect to `postgresql://postgres:postgres_password@localhost:5432/patient_notes_db`

### Kafka Management

- **Kafka UI**: http://localhost:8080 - Web-based Kafka management
- **Topic Management**: Use `npm run kafka:topics` to list topics

## 🚨 Troubleshooting

### Common Issues

1. **Services won't start**

   ```bash
   # Clean up and restart
   npm run docker:clean
   npm run docker:up
   ```

2. **Database connection errors**

   ```bash
   # Check PostgreSQL health
   npm run services:check-postgres

   # Reset database if needed
   npm run db:reset
   ```

3. **Kafka connection issues**

   ```bash
   # Check Kafka health
   npm run services:check-kafka

   # Recreate topics
   npm run kafka:create-topics
   ```

4. **Port conflicts**
   - PostgreSQL: 5432
   - Redis: 6379
   - Kafka: 9092
   - Kafka UI: 8080
   - Next.js: 3000

### Performance Tips

- Use `npm run dev:full` to start all services together
- Keep Docker containers running between development sessions
- Use Redis caching for frequently accessed data
- Monitor Kafka UI for message processing status

## 🔒 Security Considerations

- Never commit `.env` files to version control
- Use strong secrets for JWT and NextAuth
- Configure proper AWS IAM policies for S3 access
- Enable HTTPS in production environments
- Regularly update dependencies for security patches

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Docker Compose Documentation](https://docs.docker.com/compose)
- [Apache Kafka Documentation](https://kafka.apache.org/documentation)
- [NHS Digital Standards](https://digital.nhs.uk/developer)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
