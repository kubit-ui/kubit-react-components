# @kubit-ui-web/design-system

Kubit Design System provides CSS-in-JS styles, themes, and design tokens for Kubit components.

## Installation

```bash
npm install @kubit-ui-web/design-system
# or
pnpm add @kubit-ui-web/design-system
# or
yarn add @kubit-ui-web/design-system
```

## Usage

### With Provider

```tsx
import { KubitProvider } from '@kubit-ui-web/design-system';

function App() {
  return (
    <KubitProvider theme="kubit">
      {/* Your app */}
    </KubitProvider>
  );
}
```

### Generate Custom Styles

You can generate custom styles using the CLI:

```bash
npx kubit-design-system generate
```

This will use `bernova` to generate a provider with custom styles.

## Features

- 🎨 Complete design system with tokens
- 🎭 Multiple theme support
- 📦 CSS-in-JS with zero runtime
- 🔧 TypeScript support
- 🎯 Customizable via bernova

## Documentation

Visit [kubit-ui.com](https://www.kubit-ui.com/) for full documentation.

## License

Apache-2.0
