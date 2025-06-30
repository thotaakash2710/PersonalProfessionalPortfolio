# Portfolio Website - Architecture Overview

## Overview

This is a modern portfolio website built with a full-stack TypeScript architecture. The application showcases a professional portfolio with sections for about, projects, experience, and contact functionality. It features a React frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Data Storage
- **Primary Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migration Strategy**: Drizzle migrations with push-based deployment
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores form submissions (id, firstName, lastName, email, subject, message, createdAt)
- **Schema Validation**: Zod schemas generated from Drizzle table definitions

### API Endpoints
- `POST /api/contact` - Contact form submission with validation
- `GET /api/contact` - Retrieve contact messages (admin functionality)

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Personal information and skills showcase
- **Projects Section**: Portfolio projects with filtering capabilities
- **Experience Section**: Professional timeline
- **Contact Section**: Form with real-time validation and submission

### UI System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theming**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure ARIA compliance

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express routes handle requests with Zod validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Type-safe responses with error handling
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database toolkit
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production bundling for server code

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist`
3. **Database Setup**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- **Development**: Local development with hot reload via Vite
- **Production**: Node.js server serving static files and API
- **Database**: Environment-based PostgreSQL connection via `DATABASE_URL`

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema deployment

## Recent Changes

Recent Changes:
- June 30, 2025: Added comprehensive personalization system
  - Created centralized configuration file (`client/src/config/portfolio-config.ts`)
  - Updated all components to use configuration data
  - Added detailed personalization guide (`PERSONALIZATION_GUIDE.md`)
  - Implemented easy customization for content, images, and colors
- June 30, 2025: Initial setup

## Personalization System

### Configuration Architecture
- **Central Config File**: `client/src/config/portfolio-config.ts` - Single source of truth for all portfolio content
- **Component Integration**: All components now dynamically pull data from the configuration
- **Type Safety**: Full TypeScript support with proper type definitions
- **Hot Reload**: Changes to configuration automatically update the live site

### Customizable Elements
1. **Personal Information**: Name, title, bio, contact details, profile image
2. **Social Media**: LinkedIn, GitHub, Dribbble, Behance links
3. **About Section**: Title, description paragraphs, skills, workspace image, resume link
4. **Projects**: Title, descriptions, categories, technologies, images, demo links
5. **Experience**: Job titles, companies, periods, descriptions, skills
6. **Contact**: Section content, contact image
7. **Footer**: Services list, copyright, description
8. **Theme**: Primary colors and styling variables

### User Benefits
- **Easy Updates**: Change content without touching component code
- **Consistent Branding**: Centralized color and styling management
- **Professional Appearance**: Ready-to-use professional portfolio structure
- **Responsive Design**: All customizations work across mobile and desktop
- **Real Functionality**: Working contact form with backend integration

## User Preferences

Preferred communication style: Simple, everyday language.
User requested comprehensive personalization capabilities for the portfolio website.