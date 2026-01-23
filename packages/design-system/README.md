# @kubit-ui-web/design-system

[![npm version](https://img.shields.io/npm/v/@kubit-ui-web/design-system.svg)](https://www.npmjs.com/package/@kubit-ui-web/design-system)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Bernova](https://img.shields.io/badge/Bernova-1.3.1-purple)](https://bernova.dev)

A professional CSS-in-JS design system providing styles, themes, and design tokens for Kubit React Components, powered by Bernova.

## Overview

Kubit Design System is a comprehensive styling solution that provides pre-built themes, design tokens, and component styles for building consistent and customizable user interfaces. Built on top of Bernova, it offers powerful theming capabilities with zero runtime overhead.

## Features

- **CSS-in-JS**: Type-safe styling powered by Bernova
- **Design Tokens**: Comprehensive token system for consistent design
- **Pre-built Themes**: Production-ready theme configurations
- **Component Styles**: Styles for 50+ components with multiple variants
- **Customizable**: Fully customizable design tokens and component styles
- **Zero Runtime**: Styles are generated at build time
- **TypeScript**: Full type safety for all design tokens
- **CSS Output**: Optional CSS file generation for non-JS environments
- **Tree-shakeable**: Only include the styles you use
- **Media Queries**: Responsive design utilities

## Installation

Install the package using your preferred package manager:

```bash
npm install @kubit-ui-web/design-system
```

```bash
yarn add @kubit-ui-web/design-system
```

```bash
pnpm add @kubit-ui-web/design-system
```

## Peer Dependencies

This package is designed to work with:

- `@kubit-ui-web/react-components` (workspace package)

## Quick Start

### Using the Default Provider

The simplest way to use the design system:

```tsx
import { Provider } from '@kubit-ui-web/design-system';
import { StylesProvider } from '@kubit-ui-web/react-components';

function App() {
  return (
    <StylesProvider bernovaProvider={Provider as never}>
      <YourApp />
    </StylesProvider>
  );
}
```

### Using Pre-generated CSS

For non-JavaScript environments or static styling:

```tsx
import '@kubit-ui-web/design-system/styles/kubit.css';
// or minified version
import '@kubit-ui-web/design-system/styles/kubit.min.css';
```

## Architecture

The design system is organized into several key areas:

### Foundations

Core design tokens that form the foundation of the design system:

- **Colors**: Color palette and semantic color tokens
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Borders**: Border widths, styles, and radius values
- **Shadows**: Box shadow definitions
- **Sizes**: Standardized size values
- **Z-Index**: Layering system
- **Breakpoints**: Responsive design breakpoints

### Component Styles

Individual style definitions for each component with support for:

- Multiple variants (primary, secondary, ghost, etc.)
- Different sizes (small, medium, large)
- State-based styling (hover, active, disabled, focus)
- Responsive behavior

### Global Styles

Application-wide style resets and base styles:

- CSS reset/normalization
- Base typography
- Default element styling
- Accessibility enhancements

## Design Tokens

### Color Tokens

```typescript
import { COLORS } from '@kubit-ui-web/design-system';

// Access color tokens
const primary = COLORS.PRIMARY;
const secondary = COLORS.SECONDARY;
const neutral = COLORS.NEUTRAL;
const success = COLORS.SUCCESS;
const error = COLORS.ERROR;
const warning = COLORS.WARNING;
const info = COLORS.INFO;
```

### Typography Tokens

```typescript
import {
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from '@kubit-ui-web/design-system';

// Font sizes
const fontSize = FONT_SIZE.MD; // medium

// Font weights
const fontWeight = FONT_WEIGHT.BOLD;

// Line heights
const lineHeight = LINE_HEIGHT.NORMAL;
```

### Spacing Tokens

```typescript
import { SPACINGS } from '@kubit-ui-web/design-system';

const spacing = SPACINGS.SPACING_4; // 16px
const gap = SPACINGS.SPACING_2; // 8px
```

### Shadow Tokens

```typescript
import { SHADOW } from '@kubit-ui-web/design-system';

const elevation1 = SHADOW.SHADOW_10;
const elevation2 = SHADOW.SHADOW_20;
const elevation3 = SHADOW.SHADOW_30;
```

## Component Styles

Each component has dedicated style definitions organized by variants:

```
designSystem/
└── kubit/
    └── components/
        ├── button/
        │   ├── styles.ts      # Base button styles
        │   └── variants.ts    # Button variants
        ├── input/
        │   ├── styles.ts
        │   └── variants.ts
        └── ...                # 50+ components
```

### Available Component Styles

The design system includes styles for all Kubit components:

**Layout & Structure**

- Accordion, Card, Modal, Popover, Tabs

**Navigation**

- Breadcrumbs, Link, Pagination, PageControl

**Data Display**

- Avatar, Badge, Chip, Dot, Icon, Table, DataTable, Calendar, Carousel, ProgressBar, Skeleton, Tag

**Forms & Input**

- Button, Input, InputBase, InputDecoration, InputSignature, TextArea, Checkbox, CheckboxBase, RadioButton, Toggle, Select, Slider, StepperNumber, Label, Option, ListOptions, SelectorBoxFile, VirtualKeyboard

**Feedback**

- Alert, Snackbar, Tooltip

**Typography**

- Text

**Utilities**

- ErrorMessage, ItemRove, LinkAsButton, Overlay, TextCount

## Creating Custom Themes

### Basic Custom Theme

Create your own theme by extending or replacing the default tokens:

```typescript
// my-theme/foundations.ts
export const MY_FOUNDATIONS = {
  COLORS: {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    SUCCESS: '#28a745',
    ERROR: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8',
    // ... more colors
  },
  SPACINGS: {
    SPACING_0: '0px',
    SPACING_1: '4px',
    SPACING_2: '8px',
    SPACING_3: '12px',
    SPACING_4: '16px',
    // ... more spacing
  },
  FONT_SIZE: {
    XS: '12px',
    SM: '14px',
    MD: '16px',
    LG: '18px',
    XL: '20px',
    // ... more sizes
  },
  FONT_WEIGHT: {
    LIGHT: '300',
    NORMAL: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700',
  },
  // ... more foundation tokens
};
```

### Using Custom Theme with Bernova

Configure Bernova to generate styles from your custom theme:

```json
// bernova.config.json
{
  "compilerOptions": {
    "baseOutDir": "./dist",
    "rootDir": "./src",
    "minifyJS": true,
    "minifyCSS": true,
    "types": ["cjs", "esm"]
  },
  "provider": {
    "name": "MyProvider",
    "path": "./src/provider/",
    "declarationHelp": true
  },
  "themes": [
    {
      "name": "myTheme",
      "foundations": {
        "path": "./src/my-theme/foundations.ts",
        "name": "MY_FOUNDATIONS"
      },
      "theme": {
        "path": "./src/my-theme/components/theme.ts",
        "name": "MY_THEME_STYLES"
      },
      "globalStyles": {
        "path": "./src/my-theme/globalStyles.ts",
        "name": "MY_GLOBAL_STYLES"
      }
    }
  ]
}
```

## Bernova Integration

This design system leverages [Bernova](https://bernova.dev) for CSS-in-JS compilation:

### What is Bernova?

Bernova is a modern CSS-in-JS compiler that:

- Generates optimized CSS at build time
- Provides type-safe styling
- Supports theming and design tokens
- Has zero runtime overhead
- Outputs standard CSS files

### Build Process

The design system uses Bernova's CLI to generate CSS:

```bash
# Generate CSS from design tokens
pnpm generate-css

# Generate CSS in watch mode
pnpm dev

# Build everything
pnpm build
```

### Provider Class

The `Provider` class is auto-generated by Bernova and includes:

```typescript
class Provider {
  // Theme management
  getCurrentTheme(): string;
  setTheme(themeName: string): void;

  // Available themes
  getThemes(): string[];

  // CSS Variables
  getThemesVariables(): Record<string, any>;

  // Class names
  getThemesClassNames(): Record<string, any>;

  // Components
  getThemesComponents(): string[];

  // Global styles
  getThemesGlobalStyles(): Record<string, any>;

  // Media queries
  getThemesMediaQueries(): Record<string, any>;
}
```

## Project Structure

```
src/
├── designSystem/
│   ├── common/
│   │   └── mediaQueries.ts      # Responsive breakpoints
│   └── kubit/
│       ├── index.ts              # Main export
│       ├── variants.ts           # Global variant definitions
│       ├── components/           # Component styles
│       │   ├── styles.ts         # All component styles
│       │   ├── theme.ts          # Theme configuration
│       │   ├── variants.ts       # Component variants
│       │   ├── accordion/
│       │   ├── alert/
│       │   ├── avatar/
│       │   └── ...               # 50+ components
│       ├── css/                  # Generated CSS files
│       │   ├── cssVars.d.ts
│       │   ├── cssVars.js
│       │   ├── kubit.css
│       │   └── kubit.min.css
│       ├── foundations/          # Design tokens
│       │   ├── borders.ts
│       │   ├── breakpoints.ts
│       │   ├── colors.ts
│       │   ├── foundations.ts
│       │   ├── shadow.ts
│       │   ├── sizes.ts
│       │   ├── spacings.ts
│       │   ├── typography.ts
│       │   └── zIndex.ts
│       └── globalStyles/         # Global CSS
│           └── globalStyles.ts
├── provider/
│   ├── index.ts
│   ├── Provider.d.ts             # Generated by Bernova
│   ├── Provider.js               # Generated by Bernova
│   └── stats/
│       ├── stats.d.ts
│       └── stats.js
└── types/
    ├── cssGenerator/
    │   ├── stylesTypes.ts
    │   └── kubit/
    │       └── componentsTypes.ts
    └── sizes/
        └── sizes.ts
```

## Development

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.28.1
- Bernova 1.3.1

### Setup

```bash
# Install dependencies
pnpm install

# Generate CSS and watch for changes
pnpm dev

# Build for production
pnpm build
```

### Scripts

```bash
# Generate CSS from design tokens
pnpm generate-css

# Development mode (watch)
pnpm dev

# Build everything
pnpm build

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Type check
pnpm typecheck

# Run all validations
pnpm validate
```

## Package Distribution

The package is distributed with multiple formats:

- **ESM** (ES Modules): `dist/esm/` - Modern bundlers
- **CJS** (CommonJS): `dist/cjs/` - Node.js compatibility
- **Types**: `dist/types/` - TypeScript definitions
- **CSS**: `dist/styles/` - Pre-generated CSS files

### Exports

```typescript
// Main export (Provider and tokens)
import { Provider } from '@kubit-ui-web/design-system';

// Provider directly
import { Provider } from '@kubit-ui-web/design-system/provider';

// Specific provider file
import { Provider } from '@kubit-ui-web/design-system/provider/Provider';

// CSS files
import '@kubit-ui-web/design-system/styles/kubit.css';
import '@kubit-ui-web/design-system/styles/kubit.min.css';
```

## Responsive Design

The design system includes responsive utilities through media queries:

```typescript
import { mediaQueries } from '@kubit-ui-web/design-system';

// Use breakpoints in your styles
const styles = {
  button: {
    padding: '8px 16px',
    [mediaQueries.mobile]: {
      padding: '6px 12px',
    },
    [mediaQueries.tablet]: {
      padding: '10px 20px',
    },
    [mediaQueries.desktop]: {
      padding: '12px 24px',
    },
  },
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## CSS Variables

The design system generates CSS custom properties (variables) for all design tokens:

```css
:root {
  --color-primary: #007bff;
  --spacing-4: 16px;
  --font-size-md: 16px;
  --shadow-10: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* ... hundreds of design tokens */
}
```

These can be used directly in CSS or through JavaScript.

## Performance

The design system is optimized for performance:

- **Zero Runtime**: CSS is generated at build time
- **Tree-shakeable**: Only bundle the styles you use
- **Minified Output**: Production builds are minified
- **CSS Caching**: Generated CSS can be cached by browsers
- **Small Bundle Size**: Optimized output with cssnano

## TypeScript Support

Full TypeScript support with:

- Type definitions for all design tokens
- Component style types
- Theme configuration types
- Provider interface types
- Auto-completion in IDEs

```typescript
import type { ComponentStylesType } from '@kubit-ui-web/design-system';

// Fully typed design tokens
const myStyles: ComponentStylesType = {
  // Type-safe style definitions
};
```

## CLI Tool

The package includes a CLI tool for design system operations:

```bash
# Access via package.json bin
npx kubit-design-system [command]
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our development process.

### Adding New Components

1. Create component style files in `src/designSystem/kubit/components/[component]/`
2. Define styles in `styles.ts`
3. Define variants in `variants.ts`
4. Export from `components/styles.ts` and `components/theme.ts`
5. Run `pnpm generate-css` to regenerate CSS

### Modifying Design Tokens

1. Update foundation files in `src/designSystem/kubit/foundations/`
2. Run `pnpm generate-css` to regenerate CSS
3. Test affected components
4. Update documentation

## Documentation

- **Website**: [https://www.kubit-ui.com](https://www.kubit-ui.com)
- **Bernova Docs**: [https://bernova.dev](https://bernova.dev)
- **API Reference**: TypeScript definitions
- **Storybook**: Component documentation with live examples

## Related Packages

- **@kubit-ui-web/react-components**: React component library
- **@kubit-ui-web/storybook**: Interactive documentation

## License

Apache License 2.0 - see [LICENSE](../../LICENSE) for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/kubit-ui/kubit-react-components/issues)
- **Email**: kubit.lab.dev@gmail.com
- **Funding**: [Open Collective](https://opencollective.com/kubit-ui)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history and updates.

---

Built with dedication by the Kubit team and community contributors.
