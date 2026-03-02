# @kubit-ui-web/react-components

[![npm version](https://img.shields.io/npm/v/@kubit-ui-web/react-components.svg)](https://www.npmjs.com/package/@kubit-ui-web/react-components)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

A comprehensive, production-ready library of customizable and accessible React web components designed to enhance your application's user experience.

## Overview

Kubit React Components is a professional component library that provides a complete set of UI building blocks for modern web applications. Built with TypeScript, accessibility, and performance in mind, it offers 50+ carefully crafted components that follow best practices and design system principles.

## Features

- **Fully Typed**: Complete TypeScript support with comprehensive type definitions
- **Accessible**: WCAG 2.1 Level AA compliant components with keyboard navigation and screen reader support
- **Customizable**: Flexible theming system powered by design tokens
- **Tree-shakeable**: Optimized bundle size with ESM and CommonJS exports
- **SSR Ready**: Full support for server-side rendering
- **Composable**: Flexible API allowing controlled and uncontrolled usage patterns
- **Well Tested**: Extensive test coverage with unit, integration, and accessibility tests
- **Production Ready**: Battle-tested in real-world applications

## Installation

Install the package using your preferred package manager:

```bash
npm install @kubit-ui-web/react-components @kubit-ui-web/design-system
```

```bash
yarn add @kubit-ui-web/react-components @kubit-ui-web/design-system
```

```bash
pnpm add @kubit-ui-web/react-components @kubit-ui-web/design-system
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` ^18.3.0 || ^19.0.0
- `react-dom` ^18.3.0 || ^19.0.0

## Quick Start

### Basic Usage

```tsx
import {
  Button,
  Card,
  Input,
  StylesProvider,
} from '@kubit-ui-web/react-components';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@kubit-ui-web/react-components';

function App() {
  return (
    <StylesProvider>
      <Card>
        <Input placeholder="Enter your email" type="email" />
        <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.LARGE}>
          Subscribe
        </Button>
      </Card>
    </StylesProvider>
  );
}
```

### Using with Custom Bernova Provider

You can pass your own Bernova provider to customize the theme:

```tsx
import { Button, StylesProvider } from '@kubit-ui-web/react-components';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@kubit-ui-web/react-components';

import { Provider } from './my-custom-theme';

function App() {
  return (
    <StylesProvider bernovaProvider={Provider as never}>
      <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.LARGE}>
        Custom Theme Button
      </Button>
    </StylesProvider>
  );
}
```

### Using Existing Design System Themes

Import and use pre-built themes from `@kubit-ui-web/design-system`:

```tsx
import { Provider as DefaultProvider } from '@kubit-ui-web/design-system';
import { Button, StylesProvider } from '@kubit-ui-web/react-components';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@kubit-ui-web/react-components';

function App() {
  return (
    <StylesProvider bernovaProvider={DefaultProvider as never}>
      <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.LARGE}>
        Themed Button
      </Button>
    </StylesProvider>
  );
}
```

## Available Components

### Layout & Structure (6)

- **Accordion**: Collapsible content panels with controlled and uncontrolled modes
- **Card**: Flexible container for content grouping
- **Modal**: Dialog overlays for focused user interactions
- **Popover**: Floating content containers with positioning
- **Portal**: Render components outside the DOM hierarchy
- **Tabs**: Tabbed interface for organizing content

### Navigation (4)

- **Breadcrumbs**: Hierarchical navigation trail
- **Link**: Accessible navigation links
- **Pagination**: Page navigation controls
- **PageControl**: Dot-based page indicators

### Data Display (14)

- **Avatar**: User profile images and initials
- **Badge**: Status indicators and counters
- **Chip**: Compact element for tags or selections
- **Dot**: Visual status indicators
- **Icon**: SVG icon system
- **Image**: Optimized image component
- **Tag**: Labeled data elements
- **Skeleton**: Loading state placeholders
- **Table**: Data table container
- **TableHead**: Table header section
- **TableBody**: Table body content
- **TableRow**: Table row wrapper
- **TableCell**: Individual table cells
- **TableFoot**: Table footer section
- **TableCaption**: Table caption element
- **TableDivider**: Visual row separators
- **DataTable**: Full-featured data grid
- **Calendar**: Date selection interface
- **Carousel**: Slideshow component
- **ProgressBar**: Progress indicators

### Forms & Input (18)

- **Button**: Action triggers with multiple variants
- **Input**: Text input field
- **InputBase**: Base input functionality
- **InputDecoration**: Input wrapper with decorations
- **InputSignature**: Signature capture input
- **TextArea**: Multi-line text input
- **Checkbox**: Single checkbox control
- **CheckboxBase**: Base checkbox functionality
- **RadioButton**: Radio button selection
- **Toggle**: Binary switch control
- **Select**: Dropdown selection menu
- **Slider**: Range selection slider
- **StepperNumber**: Numeric stepper input
- **Label**: Form field labels
- **Option**: Select option items
- **ListOptions**: Option list container
- **SelectorBoxFile**: File upload selector
- **VirtualKeyboard**: On-screen keyboard input

### Feedback (3)

- **Alert**: Contextual feedback messages
- **Snackbar**: Temporary notification messages
- **Tooltip**: Contextual help overlays

### Typography (1)

- **Text**: Styled text component with variants

## Component Patterns

### Controlled vs Uncontrolled

Many components offer both controlled and uncontrolled patterns:

```tsx
import { Accordion, AccordionPanel, StylesProvider } from '@kubit-ui-web/react-components';

// Uncontrolled (component manages state)
<StylesProvider>
  <Accordion defaultExpanded={0}>
    <AccordionPanel title="Section 1">Content 1</AccordionPanel>
  </Accordion>
</StylesProvider>

// Controlled (you manage state)
<StylesProvider>
  <Accordion expanded={activeIndex} onExpandedChange={setActiveIndex}>
    <AccordionPanel title="Section 1">Content 1</AccordionPanel>
  </Accordion>
</StylesProvider>
```

### StandAlone Components

Each component includes a StandAlone variant for maximum flexibility:

```tsx
import { ButtonStandAlone } from '@kubit-ui-web/react-components';

// Full control over rendering and behavior
<ButtonStandAlone styles={customStyles} onClick={handleClick}>
  Custom Button
</ButtonStandAlone>;
```

## Project Structure

```
src/
├── components/           # All UI components
│   ├── accordion/       # Accordion component
│   ├── alert/           # Alert component
│   ├── avatar/          # Avatar component
│   └── ...              # 50+ components
├── lib/                 # Shared utilities
│   ├── components/      # Base component utilities
│   ├── constants/       # Shared constants
│   ├── hooks/           # Reusable React hooks
│   ├── provider/        # Context providers
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper functions
└── index.ts            # Main entry point
```

## Development

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.28.1

### Setup

```bash
# Install dependencies
pnpm install

# Start development mode
pnpm dev

# Run tests
pnpm test

# Type checking
pnpm typecheck

# Lint code
pnpm lint

# Format code
pnpm format
```

### Build

```bash
# Build for production
pnpm build

# Clean build artifacts
pnpm clean:build
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage

# Run coverage with UI
pnpm test:coverage:ui
```

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Check formatting
pnpm format:check

# Format code
pnpm format

# Type check
pnpm typecheck

# Run all validations
pnpm validate
```

## Package Distribution

This package is distributed with multiple module formats:

- **ESM** (ES Modules): `dist/esm/` - Modern bundlers and environments
- **CJS** (CommonJS): `dist/cjs/` - Node.js and legacy tooling
- **Types**: `dist/types/` - TypeScript type definitions

### Exports

The package provides granular exports for optimal tree-shaking:

```tsx
// Import everything
import { Button, Input, StylesProvider } from '@kubit-ui-web/react-components';

// Import specific components (better for tree-shaking)
import { Button } from '@kubit-ui-web/react-components/components/button';

// Import StylesProvider
import { StylesProvider } from '@kubit-ui-web/react-components/provider/styles';
```

## Theming

### StylesProvider Configuration

The `StylesProvider` component is the root wrapper that provides theming capabilities through Bernova:

```tsx
import { StylesProvider } from '@kubit-ui-web/react-components';

// Without custom theme (uses default)
<StylesProvider>
  <YourApp />
</StylesProvider>

// With custom Bernova provider
<StylesProvider bernovaProvider={CustomProvider as never}>
  <YourApp />
</StylesProvider>
```

### Creating a Custom Theme

Create your own Bernova provider with custom design tokens:

```tsx
// my-theme/provider.ts
import { createProvider } from '@kubit-ui-web/design-system';

export const MyCustomProvider = createProvider({
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    // ... more color tokens
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    // ... more spacing tokens
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    // ... more typography tokens
  },
  // ... more design tokens
});

// App.tsx
import { StylesProvider } from '@kubit-ui-web/react-components';
import { MyCustomProvider } from './my-theme/provider';

function App() {
  return (
    <StylesProvider bernovaProvider={MyCustomProvider as never}>
      <YourApp />
    </StylesProvider>
  );
}
```

### Using Pre-built Themes

Use themes from the design system package:

```tsx
import { StylesProvider } from '@kubit-ui-web/react-components';
import {
  Provider as DefaultProvider,
  DarkProvider,
  LightProvider
} from '@kubit-ui-web/design-system';

// Default theme
<StylesProvider bernovaProvider={DefaultProvider as never}>
  <YourApp />
</StylesProvider>

// Dark theme
<StylesProvider bernovaProvider={DarkProvider as never}>
  <YourApp />
</StylesProvider>

// Light theme
<StylesProvider bernovaProvider={LightProvider as never}>
  <YourApp />
</StylesProvider>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- Semantic HTML structure
- ARIA attributes and roles
- Keyboard navigation support
- Focus management
- Screen reader optimization
- Color contrast compliance
- Skip links and landmarks

Accessibility is tested using:

- `vitest-axe` for automated accessibility testing
- `@testing-library/react` for user interaction testing
- Manual screen reader testing

## TypeScript Support

Full TypeScript support with:

- Comprehensive type definitions
- Generic type parameters for flexible typing
- Strict type checking
- IntelliSense support in VS Code
- JSDoc documentation

```tsx
import type {
  ButtonProps,
  ButtonVariant,
} from '@kubit-ui-web/react-components';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Testing

The component library uses:

- **Vitest**: Fast unit test runner
- **@testing-library/react**: Component testing utilities
- **@testing-library/user-event**: User interaction simulation
- **vitest-axe**: Accessibility testing
- **jsdom**: DOM environment for testing
- **@vitest/coverage-v8**: Code coverage reporting

Test coverage is maintained at a high level for reliability.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our development process and how to submit pull requests.

### Development Guidelines

- Write tests for new components and features
- Follow the existing component patterns
- Ensure accessibility compliance
- Update TypeScript types
- Document component APIs
- Run `pnpm validate` before submitting

## Documentation

- **Website**: [https://www.kubit-ui.com](https://www.kubit-ui.com)
- **Storybook**: Interactive component documentation
- **API Docs**: TypeScript definitions and JSDoc comments
- **Examples**: Component README files with usage examples

## Performance

The library is optimized for performance:

- Tree-shakeable exports
- Code splitting support
- Lazy loading compatible
- Minimal re-renders
- Optimized bundle size
- No runtime dependencies (except @floating-ui/dom for positioning)

## License

Apache License 2.0 - see [LICENSE](../../LICENSE) for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/kubit-ui/kubit-react-components/issues)
- **Email**: kubit.lab.dev@gmail.com
- **Funding**: [Open Collective](https://opencollective.com/kubit-ui)

## Related Packages

- **@kubit-ui-web/design-system**: CSS-in-JS design system and themes
- **@kubit-ui-web/storybook**: Interactive component documentation

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history and updates.

---

Built with dedication by the Kubit team and community contributors.
