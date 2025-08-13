# NHS Patient Case Notes System

A scalable electronic health record module that enables NHS doctors across the UK to create, manage, and retrieve patient case notes. The system supports both manual text entry and automated transcription of scanned handwritten or typed notes using OCR/AI technology.

## Features

- **Manual Case Notes**: Create and manage patient case notes with manual text entry
- **Scanned Notes**: Upload and transcribe handwritten or typed case notes using AI
- **Patient Search**: Search and view patient case notes by NHS number
- **Dashboard**: View recent notes and system notifications
- **Security**: GDPR compliant and designed for NHS-scale operations

## Technology Stack

- **Frontend**: Next.js 14 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, Prettier
- **Type Safety**: TypeScript with strict mode

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   └── ui/             # UI component library
├── lib/                # Utility functions and configurations
└── types/              # TypeScript type definitions
```

## Development Guidelines

- Follow TypeScript strict mode
- Use Prettier for code formatting
- Follow ESLint rules for code quality
- Use path aliases (@/) for imports
- Write type-safe code with proper interfaces

## Security & Compliance

This system is designed to be:

- GDPR compliant
- Secure by design
- Scalable for NHS operations
- Accessible and user-friendly

## License

This project is intended for NHS use and follows NHS digital standards.
