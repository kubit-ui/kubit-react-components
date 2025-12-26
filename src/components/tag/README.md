# Tag Component Module

## Overview

This folder contains the implementation of a reusable and standalone **Tag** UI component built with React and TypeScript. The component is designed to support customizable themes, integration with design systems, and automated testing and documentation through Storybook and Figma.

## Role in the Project

The `Tag` module is part of a component library within a larger design system. It provides a standard way to display tag-like UI elements, supporting both standalone usage and seamless integration with other UI primitives or layouts. It also includes type definitions, visual stories, and Figma bindings to ensure design consistency across platforms.

## Usage

To use the `Tag` component in your project, import it directly from the module entry point:

```tsx
import { Tag } from './tag';

// Basic usage
<Tag label="New" variant="success" />

// With icon or onClick handler
<Tag label="Close" onClick={() => alert('Clicked!')} icon="close" />
```

For standalone behavior (independent styling or state logic), use the `TagStandAlone` component:

```tsx
import { TagStandAlone } from './tag/tagStandAlone';

<TagStandAlone label="Beta" />;
```

## Folder Structure and Key Files

| File / Folder                 | Purpose                                                                |
| ----------------------------- | ---------------------------------------------------------------------- |
| `tag.tsx`                     | Main `Tag` component implementation with logic and styling props.      |
| `tagStandAlone.tsx`           | A variation of `Tag` for isolated use without external dependencies.   |
| `types/tag.ts`                | Defines the props and supported configurations for the `Tag`.          |
| `types/tagTheme.ts`           | Theme-specific types for design customization and token definitions.   |
| `index.ts`                    | Entry point exporting components and types from this module.           |
| `__stories__/tag.stories.tsx` | Storybook file for component visualization and testing in isolation.   |
| `__stories__/argtypes.ts`     | Storybook argTypes definition to enhance story control and docs.       |
| `__figma__/tag.figma.tsx`     | Figma plugin integration to sync design properties from Figma to code. |
| `__tests__/tag.test.tsx`      | Unit tests covering component behavior and rendering logic.            |

## Limitations

- The `Tag` component assumes a controlled theming environment.
- Icon support depends on the icon system used in the hosting project.
- The Figma integration is optional and should be disabled in production builds.
