# Kubit React Components

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node Version](https://img.shields.io/badge/node-22.x-brightgreen.svg)](https://nodejs.org)
[![Yarn Version](https://img.shields.io/badge/yarn-4.9.1-2C8EBB.svg)](https://yarnpkg.com)
[![Vite](https://img.shields.io/badge/Vite-8.0.0--beta.10-646CFF.svg?logo=vite)](https://vite.dev)
[![Rolldown](https://img.shields.io/badge/Rolldown-Powered-FF6B35.svg)](https://rolldown.rs)

A professional, production-ready monorepo containing a comprehensive library of customizable and accessible React components, built with TypeScript and modern web standards.

> **⚡ Powered by Vite 8 + Rolldown**: This project uses Vite 8 Beta with Rolldown, the next-generation Rust-powered bundler that delivers **10-30x faster builds** than traditional bundlers.

## Overview

Kubit React Components is an enterprise-grade design system and component library designed to accelerate UI development while maintaining consistency, accessibility, and performance. This monorepo leverages Turborepo for efficient build orchestration and Yarn workspaces for optimal dependency management.

## Architecture

This monorepo is structured as a collection of interconnected packages, each serving a specific purpose:

```
kubit-react-components/
├── packages/
│   ├── components/          # React component library
│   ├── design-system/       # CSS-in-JS styles and themes
│   └── storybook/          # Interactive documentation
├── scripts/                # Build and automation scripts
└── docs/                   # Documentation and assets
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
- **Yarn**: v4.9.1 (automatically managed via Corepack)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kubit-ui/kubit-react-components.git
cd kubit-react-components
yarn install
```

### Development

Start the development environment:

```bash
# Start Storybook (recommended for development)
yarn dev

# Start specific package in development mode
yarn dev:components
yarn dev:design-system
```

### Building

Build all packages:

```bash
# Build all publishable packages
yarn build

# Build specific packages
yarn build:components
yarn build:design-system
yarn build:storybook
```

### Testing

Run the comprehensive test suite:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate coverage report
yarn test:coverage
```

### Code Quality

Maintain code quality with built-in linting and formatting:

```bash
# Lint all packages
yarn lint

# Auto-fix linting issues
yarn lint:fix

# Format code
yarn format

# Check formatting
yarn format:check

# Type checking
yarn typecheck

# Run all validations
yarn validate
```

## Using in Your Project

### Installing Components

```bash
npm install @kubit-ui-web/react-components @kubit-ui-web/design-system
# or
yarn add @kubit-ui-web/react-components @kubit-ui-web/design-system
# or
yarn add @kubit-ui-web/react-components @kubit-ui-web/design-system
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
- **Yarn Workspaces**: For efficient dependency management and package linking
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
| `yarn dev` | Start Storybook development server |
| `yarn build` | Build all packages for production |
| `yarn test` | Run unit tests |
| `yarn test:coverage` | Generate test coverage report |
| `yarn lint` | Lint all packages |
| `yarn lint:fix` | Auto-fix linting issues |
| `yarn format` | Format code with Prettier |
| `yarn typecheck` | Type check all packages |
| `yarn validate` | Run all quality checks |
| `yarn clean` | Remove all node_modules and build artifacts |

## Contributing

We welcome contributions to **Kubit React Components**! This is a **monorepo** managed with **[Changesets](https://github.com/changesets/changesets)** for automated version management and publishing.

### 📦 Monorepo Packages

- **`@kubit-ui-web/react-components`** - React component library
- **`@kubit-ui-web/design-system`** - CSS-in-JS styles and themes
- **`@kubit-ui-web/storybook`** - Component documentation (private)

### Quick Start for Contributors

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Install dependencies**: `yarn install`
4. **Create a branch** with proper naming: `<type>/<description>`
5. **Make changes** with scoped commits: `<type>(<scope>): <description>`
6. **Push to your fork** and open a Pull Request

### Branch Naming (Required)

Your branch name determines the version bump type:

| Branch Pattern | Version Bump | Example |
|----------------|--------------|---------|
| `feat/` or `feature/` | **MINOR** (2.0.0 → 2.1.0) | `feat/tooltip-component` |
| `fix/` or `bugfix/` | **PATCH** (2.0.0 → 2.0.1) | `fix/button-styling` |
| `break/` or `breaking/` | **MAJOR** (2.0.0 → 3.0.0) | `break/api-redesign` |
| `docs/`, `chore/`, `refactor/`, `test/` | **PATCH** | `docs/update-readme` |

### Commit Format (Required)

**CRITICAL:** Commits must include a **scope** to indicate which package is affected:

```
<type>(<scope>): <description>
```

**Scopes:**
- `components` - Changes to `@kubit-ui-web/react-components`
- `design-system` - Changes to `@kubit-ui-web/design-system`
- `storybook` - Changes to `@kubit-ui-web/storybook` (docs only)
- `all` or `monorepo` - Changes affecting multiple packages
- No scope - Defaults to all packages (not recommended)

**Examples:**

```sh
# Adding a new component
git commit -m "feat(components): add Tooltip component with accessibility"

# Fixing design system bug
git commit -m "fix(design-system): resolve button hover color issue"

# Breaking change
git commit -m "feat(components)!: redesign Modal API"

# Changes affecting both packages
git commit -m "feat(all): add dark mode support"

# Documentation
git commit -m "docs(components): add Button usage examples"
```

### PR Title Format (Required)

Your PR title must follow the same format:

```
<type>(<scope>): <description>
```

**Examples:**
- ✅ `feat(components): add Tooltip component`
- ✅ `fix(design-system): resolve button styling`
- ✅ `feat(all): add dark mode support`
- ❌ `Added new component` (missing type and scope)
- ❌ `fix: button issue` (missing scope)

### Automated Workflow

When you open a PR:
1. **Automated validation** checks branch name, PR title, tests, and code quality
2. **Bot comments** with validation results and expected version bump
3. **On merge**:
   - Changeset is auto-generated based on your scope
   - Version is bumped in affected package(s)
   - CHANGELOG is updated
   - Package(s) are built and published to NPM
   - GitHub Release is created
   - PR comment confirms published version(s)

**No manual changeset needed - it's all automatic!** 🚀

### PR Validation Checks

✅ Branch naming follows conventions
✅ PR title follows conventional commits with scope
✅ TypeScript type checking passes
✅ All tests pass (components)
✅ Linting passes
✅ No `console.log` in production code
✅ TODOs reference GitHub issues

For detailed contributing guidelines, see [CONTRIBUTING-CHANGESETS.md](./CONTRIBUTING-CHANGESETS.md).

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
- **Yarn**: Fast, efficient package manager
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
