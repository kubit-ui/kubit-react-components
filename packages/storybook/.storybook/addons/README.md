# Custom Storybook Addons

## Bundle Size Addon (`📦 Bundle Size`)

**Location:** `.storybook/addons/bundle-size/register.tsx`

### Features:

- Shows bundle size information in a dedicated panel
- Displays JavaScript, CSS, and total sizes
- Shows both gzipped and raw sizes
- Indicates if component is tree-shakeable
- Automatically updates when navigating between stories
- Reads data from `bundle-sizes.json`

### How it works:

1. Registers a new panel in Storybook
2. Extracts component name from URL
3. Looks up bundle size data
4. Displays formatted size information

---

## Source Code Addon (`📄 Source Code`)

**Location:** `.storybook/addons/source-code/register.tsx`

### Features:

- Shows the actual source code of each story
- Dark theme for better readability
- Copy button to quickly copy code
- Automatically updates when navigating between stories
- Shows clean, formatted code without decorators

### How it works:

1. Registers a new panel in Storybook
2. Accesses story parameters via Storybook API
3. Extracts `parameters.docs.source.code` or originalSource
4. Displays in a Monaco-like editor style

---

## Registration

Both addons are registered in `.storybook/main.ts`:

```typescript
addons: [
  // ... other addons
  './.storybook/addons/bundle-size/register.tsx',
  './.storybook/addons/source-code/register.tsx',
];
```

---

## Usage

After starting Storybook, you'll see two new tabs in the addons panel:

1. **📦 Bundle Size** - Shows component size metrics
2. **📄 Source Code** - Shows the story's source code

Both panels automatically update as you navigate between stories.
