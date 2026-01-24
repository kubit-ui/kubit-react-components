# Kubit React Components

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node Version](https://img.shields.io/badge/node-22.x-brightgreen.svg)](https://nodejs.org)
[![pnpm Version](https://img.shields.io/badge/pnpm-10.28.1-orange.svg)](https://pnpm.io)

A professional, production-ready monorepo containing a comprehensive library of customizable and accessible React components, built with TypeScript and modern web standards.

## Overview

Kubit React Components is an enterprise-grade design system and component library designed to accelerate UI development while maintaining consistency, accessibility, and performance. This monorepo leverages Turborepo for efficient build orchestration and pnpm workspaces for optimal dependency management.

## Architecture

This monorepo is structured as a collection of interconnected packages, each serving a specific purpose:

```
kubit-react-components/
├── packages/
│   ├── components/          # React component library
│   ├── design-system/       # CSS-in-JS styles and themes
│   └── storybook/          # Interactive documentation
├── public/                  # Shared assets and utilities
└── scripts/                # Build and automation scripts
```

### Packages

#### `@kubit-ui-web/react-components`

The core component library containing 50+ production-ready React components:

**Layout & Structure**
- Accordion, Card, Modal, Popover, Portal, Tabs

**Navigation**
- Breadcrumbs, Link, Pagination, PageControl

**Data Display**
- Avatar, Badge, Chip, Dot, Icon, Image, Tag, Skeleton
- Table, TableBody, TableHead, TableRow, TableCell, TableFoot, TableCaption, TableDivider
- DataTable, Calendar, Carousel, ProgressBar

**Forms & Input**
- Button, Input, TextArea, Checkbox, RadioButton, Toggle
- Select, Slider, StepperNumber
- InputBase, InputDecoration, InputSignature, CheckboxBase
- Label, Option, ListOptions, SelectorBoxFile, VirtualKeyboard

**Feedback**
- Alert, Snackbar, Tooltip

**Typography**
- Text

**Key Features:**
- Fully accessible (WCAG 2.1 compliant)
- TypeScript support with comprehensive type definitions
- Customizable through design tokens
- Tree-shakeable for optimal bundle size
- Extensive test coverage

#### `@kubit-ui-web/design-system`

A powerful CSS-in-JS design system powered by Bernova, providing:

- Design tokens for consistent theming
- Pre-built theme configurations
- Component-specific style variants
- CSS utilities and mixins
- Responsive design patterns
- Dark mode support

#### `@kubit-ui-web/storybook`

Interactive documentation and development environment featuring:

- Live component playground
- Code examples and usage patterns
- Accessibility testing tools
- Visual regression testing
- Component API documentation
- Design guidelines

## Getting Started

### Prerequisites

- **Node.js**: v22.x or higher
- **pnpm**: v10.28.1 (automatically managed via packageManager field)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kubit-ui/kubit-react-components.git
cd kubit-react-components
pnpm install
```

### Development

Start the development environment:

```bash
# Start Storybook (recommended for development)
pnpm dev

# Start specific package in development mode
pnpm dev:components
pnpm dev:design-system
```

### Building

Build all packages:

```bash
# Build all publishable packages
pnpm build

# Build specific packages
pnpm build:components
pnpm build:design-system
pnpm build:storybook
```

### Testing

Run the comprehensive test suite:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Code Quality

Maintain code quality with built-in linting and formatting:

```bash
# Lint all packages
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Type checking
pnpm typecheck

# Run all validations
pnpm validate
```

## Using in Your Project

### Installing Components

```bash
npm install @kubit-ui-web/react-components @kubit-ui-web/design-system
# or
yarn add @kubit-ui-web/react-components @kubit-ui-web/design-system
# or
pnpm add @kubit-ui-web/react-components @kubit-ui-web/design-system
```

### Basic Usage

```tsx
import { Button, Input, Modal } from '@kubit-ui-web/react-components';
import { ThemeProvider } from '@kubit-ui-web/design-system';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Input placeholder="Enter text..." />
    </ThemeProvider>
  );
}
```

## Monorepo Structure

### Workspace Configuration

This monorepo uses:

- **Turborepo**: For intelligent build caching and task orchestration
- **pnpm Workspaces**: For efficient dependency management and package linking
- **TypeScript**: For type safety across all packages
- **Vitest**: For fast unit testing
- **ESLint & Prettier**: For code quality and consistency

### Task Pipeline

The build pipeline is optimized with dependency awareness:

```
design-system (build) → components (build) → storybook (build)
```

Turborepo ensures tasks run in the correct order and caches results for faster subsequent builds.

## Scripts Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Storybook development server |
| `pnpm build` | Build all packages for production |
| `pnpm test` | Run unit tests |
| `pnpm test:coverage` | Generate test coverage report |
| `pnpm lint` | Lint all packages |
| `pnpm lint:fix` | Auto-fix linting issues |
| `pnpm format` | Format code with Prettier |
| `pnpm typecheck` | Type check all packages |
| `pnpm validate` | Run all quality checks |
| `pnpm clean` | Remove all node_modules and build artifacts |

## Contributing

We welcome contributions from the community! This project follows a fork-based contribution model to maintain code quality and security.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guide](./CONTRIBUTING.md) for detailed guidelines.

### Development Guidelines

- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Keep commits atomic and well-described

## Documentation

- **Website**: [https://www.kubit-ui.com](https://www.kubit-ui.com)
- **Storybook**: Interactive component documentation
- **API Reference**: TypeScript definitions and JSDoc comments
- **Contributing**: See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Code of Conduct**: See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- **Security**: See [SECURITY.md](./SECURITY.md)

## Technology Stack

- **React**: UI component framework
- **TypeScript**: Type-safe development
- **Bernova**: CSS-in-JS styling engine
- **Turborepo**: Monorepo build system
- **pnpm**: Fast, efficient package manager
- **Vitest**: Lightning-fast unit testing
- **Storybook**: Component documentation and development
- **ESLint**: Code linting
- **Prettier**: Code formatting

## Browser Support

Kubit React Components supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

All components are built with accessibility as a core principle:

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader optimized
- Focus management
- ARIA attributes
- Color contrast compliance

## Performance

Optimized for production:

- Tree-shakeable exports
- Code splitting ready
- Minimal bundle size
- Lazy loading support
- Optimized re-renders
- CSS-in-JS with zero runtime overhead

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/kubit-ui/kubit-react-components/issues)
- **Email**: kubit.lab.dev@gmail.com
- **Funding**: [Open Collective](https://opencollective.com/kubit-ui)

## Acknowledgments

Built and maintained by the Kubit team and our amazing community contributors.

Special thanks to all [contributors](https://github.com/kubit-ui/kubit-react-components/graphs/contributors) who have helped shape this project.

---

**Made with dedication by the Kubit team**
