# @kubit-ui-web/storybook

[![Storybook](https://img.shields.io/badge/Storybook-10.2-ff4785)](https://storybook.js.org/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

Interactive component documentation and development environment for Kubit React Components, powered by Storybook.

## Overview

Kubit Storybook is a comprehensive documentation platform that provides an interactive playground for exploring, testing, and developing Kubit React Components. It serves as both a development tool and a living style guide for the entire component library.

## Features

- **Interactive Documentation**: Live component previews with editable props
- **Component Playground**: Real-time prop manipulation and testing
- **Accessibility Testing**: Built-in a11y checks with @storybook/addon-a11y
- **Code Examples**: Auto-generated code snippets for each component
- **Design Integration**: Figma Code Connect integration
- **Bundle Size Analysis**: Track component bundle sizes
- **Custom Addons**: Extended functionality with custom Storybook addons
- **Pseudo States**: Test hover, focus, and active states
- **Deep Controls**: Advanced prop controls for complex components
- **MDX Documentation**: Rich documentation with MDX support
- **Coverage Reports**: Test coverage tracking

## Installation

This package is designed for development and documentation purposes within the monorepo.

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.28.1

### Setup

```bash
# Install dependencies from root
pnpm install

# Navigate to storybook package
cd packages/storybook
```

## Development

### Start Development Server

Launch Storybook in development mode:

```bash
# From root
pnpm dev

# From storybook package
pnpm storybook
# or
pnpm dev
```

This starts the Storybook server at `http://localhost:6006`.

### Build for Production

Build a static version of Storybook:

```bash
# From root
pnpm build:storybook

# From storybook package
pnpm build
```

The static site will be generated in the `dist/` directory.

## Project Structure

```
packages/storybook/
├── .storybook/                    # Storybook configuration
│   ├── main.ts                    # Main configuration
│   ├── preview.tsx                # Global decorators and parameters
│   ├── manager.ts                 # UI customization
│   ├── manager-head.html          # Custom head tags
│   ├── viteStorybook.config.mts   # Vite configuration
│   ├── bundle-analysis.json       # Bundle analysis data
│   ├── bundle-sizes.json          # Component bundle sizes
│   ├── kubit.css                  # Design system styles
│   ├── storybook.css              # Custom Storybook styles
│   ├── addons/                    # Custom addons
│   │   ├── bundle-size/           # Bundle size addon
│   │   │   ├── preset.ts
│   │   │   └── register.tsx
│   │   └── source-code/           # Source code addon
│   │       ├── preset.ts
│   │       └── register.tsx
│   ├── assets/                    # Static assets
│   │   ├── font/                  # Custom fonts
│   │   └── icon/                  # Icons and favicons
│   └── components/                # Storybook UI components
│       ├── bundleSize/            # Bundle size panel
│       ├── docs/                  # Doc blocks
│       └── note/                  # Note component
├── stories/                       # Component stories
│   ├── argtypes/                  # Reusable arg type definitions
│   │   ├── argtypes.ts
│   │   ├── booleanArgTypes.ts
│   │   ├── contentArgTypes.ts
│   │   ├── disabledArgTypes.ts
│   │   ├── iconArgTypes.ts
│   │   ├── imageArgTypes.ts
│   │   ├── numberArgTypes.ts
│   │   ├── selectorArgTypes.ts
│   │   ├── stringArgTypes.ts
│   │   ├── textComponentArgTypes.ts
│   │   └── variantArgtypes.ts
│   ├── assets/                    # Story assets
│   │   ├── icons/                 # Example icons
│   │   ├── illustrations/         # Example illustrations
│   │   ├── images/                # Example images
│   │   ├── loader/                # Loading components
│   │   └── videos/                # Example videos
│   ├── components/                # Component stories
│   │   └── button/                # Button component stories
│   │       ├── __figma__/         # Figma integration
│   │       └── __stories__/       # Story files
│   ├── constants/                 # Shared constants
│   │   ├── categoryControl.ts
│   │   └── textComponentOptions.ts
│   └── utils/                     # Utility functions
│       └── utils.ts
├── overview/                      # Documentation pages
│   ├── introduction.mdx
│   ├── introduction.tsx
│   ├── introduction.css
│   └── assets/                    # Overview assets
└── package.json
```

## Storybook Configuration

### Addons

The Storybook instance includes the following addons:

**Official Addons:**

- `@storybook/addon-links`: Navigate between stories
- `@storybook/addon-a11y`: Accessibility testing and validation
- `@storybook/addon-coverage`: Test coverage tracking
- `@storybook/addon-docs`: Auto-generated documentation
- `storybook-addon-deep-controls`: Advanced prop controls
- `storybook-addon-pseudo-states`: Test pseudo-states (hover, focus, active)

**Custom Addons:**

- `bundle-size`: Display bundle size information for each component
- `source-code`: Show component source code

### Custom Addons

#### Bundle Size Addon

Displays bundle size information in a dedicated panel:

**Features:**

- Shows JavaScript and CSS sizes
- Displays both gzipped and raw sizes
- Indicates if component is tree-shakeable
- Automatically updates when navigating between stories
- Reads data from `bundle-sizes.json`

**Usage:**
The addon automatically activates when viewing component stories and shows:

- Total bundle size
- JavaScript size (gzipped and raw)
- CSS size (gzipped and raw)
- Tree-shaking support indicator

#### Source Code Addon

Provides quick access to component source code:

**Features:**

- Direct links to component source files
- Syntax highlighted code preview
- Jump to definition functionality
- Integration with version control

### Figma Integration

The Storybook integrates with Figma through Code Connect:

```typescript
// Example: stories/components/button/__figma__/button.figma.tsx
import figma from '@figma/code-connect';
import { Button } from '@kubit-ui-web/react-components';

figma.connect(Button, {
  // Figma component URL
  // Component prop mappings
});
```

This enables:

- Design-to-code synchronization
- Component usage examples in Figma
- Design system consistency

## Writing Stories

### Basic Story Structure

```tsx
// stories/components/button/__stories__/button.stories.tsx
import { Button } from '@kubit-ui-web/react-components';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component for user interactions',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariantType),
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSizeType),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: ButtonVariantType.PRIMARY,
    size: ButtonSizeType.LARGE,
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariantType.SECONDARY,
    size: ButtonSizeType.MEDIUM,
    children: 'Click me',
  },
};
```

### Reusable ArgTypes

Utilize shared argType definitions for consistency:

```tsx
import { booleanArgTypes } from '../../argtypes/booleanArgTypes';
import { iconArgTypes } from '../../argtypes/iconArgTypes';
import { stringArgTypes } from '../../argtypes/stringArgTypes';

const meta: Meta<typeof MyComponent> = {
  argTypes: {
    disabled: booleanArgTypes.disabled,
    label: stringArgTypes.label,
    icon: iconArgTypes.icon,
  },
};
```

### Using Assets

Import and use shared assets in stories:

```tsx
import { icons } from '../../assets/icons/icons';
import { images } from '../../assets/images/images';
import { videos } from '../../assets/videos/videos';

export const WithIcon: Story = {
  args: {
    icon: icons.checkmark,
  },
};

export const WithImage: Story = {
  args: {
    src: images.image_1,
  },
};
```

## Scripts

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Start Storybook development server on port 6006 |
| `pnpm storybook`    | Alternative command to start development server |
| `pnpm build`        | Build static Storybook site                     |
| `pnpm lint`         | Lint all files                                  |
| `pnpm lint:fix`     | Auto-fix linting issues                         |
| `pnpm format`       | Format code with Prettier                       |
| `pnpm format:check` | Check code formatting                           |
| `pnpm typecheck`    | Type check TypeScript files                     |
| `pnpm validate`     | Run all quality checks                          |
| `pnpm clean`        | Remove build artifacts and dependencies         |

## Assets

### Icons

Reusable SVG icons for stories:

- `checkmark_thick.svg`
- `icon_chevron_down.svg`
- `icon_chevron_left.svg`
- `icon_chevron_right.svg`
- `icon_chevron_up.svg`
- `icon_ds_handle.svg`
- `icon_ghost.svg`
- `icon_placeholder.svg`
- `icon_x_close.svg`
- `play_button.svg`
- `replace.svg`

### Images

Example images for component testing:

- `image_1.png`
- `image_2.png`
- `image_3.png`
- `image_4.png`

### Illustrations

Example illustrations:

- `illustration.webp`

### Videos

Example video files:

- `mov_bbb.mp4`
- `exampleSubtitles.vtt`

### Fonts

Custom fonts for consistent typography:

- GT America Regular (`gtamericaregular.woff`)
- Light weight (`light.woff`)
- Nunito Sans Bold (`NunitoSans_10pt-Bold.ttf`)
- Nunito Sans Regular (`NunitoSans_10pt-Regular.ttf`)
- Regular weight (`regular.woff`)

## TypeScript Support

Full TypeScript support with:

- Type definitions for all stories
- Typed story objects with `StoryObj`
- Typed meta configurations with `Meta`
- Auto-completion in IDEs
- Type-safe prop controls

```tsx
import type { MyComponentProps } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<MyComponentProps> = {
  // Fully typed configuration
};

type Story = StoryObj<MyComponentProps>;
```

## Accessibility Testing

Every component story includes accessibility checks:

- Automated a11y testing with @storybook/addon-a11y
- WCAG 2.1 compliance validation
- Color contrast checking
- Keyboard navigation testing
- ARIA attribute validation
- Screen reader compatibility

View accessibility results in the "Accessibility" panel.

## Pseudo States

Test component states without interaction:

```tsx
export const InteractiveStates: Story = {
  parameters: {
    pseudo: {
      hover: true,
      focus: true,
      active: true,
    },
  },
};
```

Available states:

- hover
- focus
- active
- focus-visible
- focus-within

## Deployment

The Storybook is configured for deployment on Vercel:

```json
// vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": null
}
```

Automatic deployment happens on:

- Push to main branch
- Pull request creation
- Manual deployment trigger

## Development Workflow

### Adding a New Component Story

1. Create story directory structure:

   ```
   stories/components/[component]/
   ├── __stories__/
   │   ├── [component].stories.tsx
   │   └── argtypes.ts
   └── __figma__/
       └── [component].figma.tsx
   ```

2. Write the story file with proper typing

3. Add reusable argTypes if needed

4. Include accessibility considerations

5. Test in Storybook development mode

6. Document edge cases and variants

### Best Practices

- Use consistent story naming conventions
- Leverage shared argTypes for common props
- Include comprehensive prop documentation
- Test accessibility for every story
- Provide real-world usage examples
- Document component variants thoroughly
- Use MDX for complex documentation
- Keep stories focused and atomic

## Contributing

Contributions to the Storybook documentation are welcome! Please:

1. Follow existing story patterns
2. Ensure accessibility compliance
3. Add comprehensive prop documentation
4. Test all interactive states
5. Include code examples
6. Update this README if adding new features

See [Contributing Guide](../../CONTRIBUTING.md) for more details.

## Related Packages

- **@kubit-ui-web/react-components**: Component library being documented
- **@kubit-ui-web/design-system**: Design system and themes

## Resources

- **Storybook Documentation**: [https://storybook.js.org/docs](https://storybook.js.org/docs)
- **Kubit Website**: [https://www.kubit-ui.com](https://www.kubit-ui.com)
- **Component Docs**: View in the running Storybook instance

## License

Apache License 2.0 - see [LICENSE](../../LICENSE) for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/kubit-ui/kubit-react-components/issues)
- **Email**: kubit.lab.dev@gmail.com

---

Built with dedication by the Kubit team and community contributors.
