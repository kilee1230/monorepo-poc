# Monorepo POC

A sample TypeScript monorepo using Nx with test coverage support.

## 📁 Project Structure

```
monorepo-poc/
├── apps/
│   ├── frontend/          # React app with TypeScript
│   └── backend/           # Node.js app with TypeScript
├── libs/
│   └── shared-utils/      # Shared TypeScript utilities
└── coverage/              # Test coverage reports
    ├── apps/
    │   ├── frontend/      # Frontend coverage
    │   └── backend/       # Backend coverage
    └── libs/
        └── shared-utils/  # Shared library coverage
```

## 🚀 Available Commands

### Development

```bash
pnpm run dev              # Start frontend
pnpm run dev:frontend     # Start frontend
pnpm run dev:backend      # Start backend
pnpm run dev:all          # Start all apps
```

### Building

```bash
pnpm run build            # Build all projects
pnpm run build:frontend   # Build frontend only
pnpm run build:backend    # Build backend only
```

### Testing

```bash
npm test                 # Run all tests
pnpm run test:shared      # Test shared library
pnpm run test:frontend    # Test frontend
pnpm run test:backend     # Test backend
```

### Test Coverage

```bash
pnpm run test:coverage:shared    # Coverage for shared library
pnpm run test:coverage:frontend  # Coverage for frontend
pnpm run test:coverage:backend   # Coverage for backend

# View HTML coverage reports (macOS)
pnpm run coverage:view:shared    # Open shared library coverage
pnpm run coverage:view:frontend  # Open frontend coverage
pnpm run coverage:view:backend   # Open backend coverage
```

### Code Quality

```bash
pnpm run lint             # Lint all projects
pnpm run lint:fix         # Fix lint issues
pnpm run typecheck        # TypeScript type checking
```

### Nx Utilities

```bash
pnpm run graph            # Show project dependency graph
pnpm run clean            # Reset Nx cache
pnpm run affected:build   # Build only affected projects
pnpm run affected:test    # Test only affected projects
pnpm run affected:lint    # Lint only affected projects
```

## 📊 Current Coverage

🎉 **All projects have achieved 100% test coverage!**

- **Shared Utils**: 100% (10/10 statements, 0/0 branches, 7/7 functions, 9/9 lines)
- **Frontend**: 100% (37/37 statements, 2/2 branches, 1/1 functions, 37/37 lines)
- **Backend**: 100% (23/23 statements, 0/0 branches, 6/6 functions, 23/23 lines)

## 🛠️ Technology Stack

- **Nx**: Monorepo tooling and build system
- **TypeScript**: Type-safe JavaScript across all projects
- **React**: Frontend framework (with Vite)
- **Node.js**: Backend runtime
- **Jest**: Testing framework (backend + shared library)
- **Vitest**: Testing framework (frontend)
- **ESLint**: Code linting
- **Prettier**: Code formatting

## 📈 Coverage Reports

Coverage reports are generated in HTML format and stored in the `coverage/` directory:

- Open `coverage/libs/shared-utils/index.html` for shared library coverage
- Open `coverage/apps/frontend/index.html` for frontend coverage
- Open `coverage/apps/backend/index.html` for backend coverage

Each report includes:

- Line-by-line coverage highlighting
- Function and branch coverage metrics
- Interactive file navigation
- Coverage threshold status
