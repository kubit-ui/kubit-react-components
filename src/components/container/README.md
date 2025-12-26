# Container

## Description

Container component that wraps the content of a website, providing consistent styling and structure.

## Usage

```tsx
import Container from '@kubit';
```

## Props

| Prop                | Type                                 | Description                                                                   |
| ------------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| `variant`           | `string`                             | The variant type for the container.                                           |
| `title`             | `object`                             | The title object containing the content to be displayed and the configuration |
| `additionalClasses` | `object`                             | Additional CSS classes to be applied to the container.                        |
| `children`          | `React.ReactNode`                    | The content to be wrapped by the container.                                   |
| `ref`               | `React.ForwardedRef<HTMLDivElement>` | The forwarded ref for the inner container div.                                |
| `dataTestId`        | `string`                             | The data-testid attribute for testing.                                        |

## Usage

Here is an example of how to use the Container component in your project:

```tsx
<Container variant="DEFAULT" title={{ content: 'My Title' }}>
  <p>This is the content inside the container.</p>
</Container>
```

### Customization

```tsx
<Container
  variant="DEFAULT"
  title={{ content: 'My Title' }}
  additionalClasses={{ container: 'custom-container' }}
>
  <p>This is the content inside the container.</p>
</Container>
```

In the example above, the custom-container class will be applied to the container, allowing you to customize its appearance.
