# Snackbar

The Snackbar component provides brief messages about app processes at the bottom of the screen. Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen, and shouldn't interrupt the user experience.

## Installation

```bash
npm install @kubit/react-components
```

## Usage

```tsx
import { useState } from 'react';

import { Snackbar } from '@kubit/react-components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Snackbar</button>

      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeTimeout={4000}
      >
        <div style={{ padding: '12px 16px' }}>Message sent successfully</div>
      </Snackbar>
    </>
  );
}
```

## Props

### ISnackbar

| Prop                | Type                   | Default | Description                                                                    |
| ------------------- | ---------------------- | ------- | ------------------------------------------------------------------------------ |
| `open`              | `boolean`              | `false` | Controls the visibility of the snackbar                                        |
| `children`          | `ReactNode`            | -       | Content to display inside the snackbar                                         |
| `onClose`           | `() => void`           | -       | Callback fired when the snackbar requests to be closed                         |
| `closeTimeout`      | `number`               | `4000`  | Duration in milliseconds before auto-closing. Set to `0` to disable auto-close |
| `popover`           | `SnackbarPopover`      | -       | Popover configuration for positioning and animation                            |
| `additionalClasses` | `SnackbarV2CssClasses` | -       | Additional CSS classes for styling                                             |
| `cssClasses`        | `SnackbarV2CssClasses` | -       | Override default CSS classes                                                   |
| `data-*`            | `DataAttributes`       | -       | Data attributes for testing and analytics                                      |
| `aria-*`            | `AriaAttributes`       | -       | ARIA attributes for accessibility                                              |

### SnackbarPopover

The snackbar uses a Popover component internally for positioning. Available popover props:

| Prop                | Type                                     | Default    | Description                                            |
| ------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------ |
| `placement`         | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Placement of the snackbar                              |
| `middlewareOptions` | `object`                                 | -          | Options for positioning middleware (edgePadding, etc.) |
| `zIndex`            | `number`                                 | `500`      | Z-index of the snackbar                                |
| `disableAnimations` | `boolean`                                | `false`    | Disable default animations                             |
| `additionalClasses` | `object`                                 | -          | Additional classes for popover styling                 |

## Features

### Auto-close Behavior

- **Default timeout**: 4 seconds
- **Pause on hover**: Hovering over the snackbar pauses the auto-close timer
- **Pause on focus**: Focusing any element inside pauses the timer
- **Resume on blur/leave**: Timer resumes when hover/focus ends
- **Disable auto-close**: Set `closeTimeout={0}`

```tsx
<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={6000} // 6 seconds
>
  Extended message that needs more time to read
</Snackbar>
```

### Custom Content

The `children` prop accepts any React node, allowing complete customization:

```tsx
<Snackbar open={isOpen} onClose={handleClose}>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
    }}
  >
    <Icon name="check-circle" color="success" />
    <span>Action completed successfully</span>
    <button onClick={handleClose}>Dismiss</button>
  </div>
</Snackbar>
```

### Positioning

Control the snackbar position using the `popover.placement` prop:

```tsx
<Snackbar
  open={isOpen}
  onClose={handleClose}
  popover={{
    placement: 'top', // or 'bottom' (default), 'left', 'right'
    middlewareOptions: {
      edgePadding: 20, // Distance from viewport edge
    },
  }}
>
  Message at the top of the screen
</Snackbar>
```

### Animations

Add custom animations using the `additionalClasses` prop:

```tsx
import { createSpringAnimation } from '@kubit/react-components';

// Generate spring animation
const springAnimation = createSpringAnimation('down', {
  stiffness: 200,
  damping: 10,
  mass: 1,
  duration: '1200ms',
  placement: 'bottom',
  initialDisplacement: 40,
  keyframeCount: 30,
});

// Add animation CSS to document
const styleElement = document.createElement('style');
styleElement.textContent = `
  @keyframes snackbar-enter {
    ${springAnimation.keyframesCSS}
  }

  .snackbar-animated[data-kbt-placement="bottom"] {
    animation: snackbar-enter ${springAnimation.duration} ease-out;
  }
`;
document.head.appendChild(styleElement);

// Use in component
<Snackbar
  open={isOpen}
  onClose={handleClose}
  popover={{
    additionalClasses: {
      popover: 'snackbar-animated',
    },
    disableAnimations: true, // Disable default animations
  }}
>
  Animated snackbar message
</Snackbar>;
```

## Examples

### Simple Message

Basic snackbar with a text message:

```tsx
function SimpleSnackbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Message</button>

      <Snackbar open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ padding: '12px 16px' }}>Changes saved</div>
      </Snackbar>
    </>
  );
}
```

### With Action Button

Snackbar with an action button:

```tsx
function SnackbarWithAction() {
  const [isOpen, setIsOpen] = useState(false);

  const handleUndo = () => {
    console.log('Undo action');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Item</button>

      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeTimeout={6000}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            minWidth: '300px',
          }}
        >
          <span>Item deleted</span>
          <button onClick={handleUndo} style={{ marginLeft: '24px' }}>
            UNDO
          </button>
        </div>
      </Snackbar>
    </>
  );
}
```

### With Icon and Close Button

Snackbar with icon and manual close:

```tsx
function SnackbarWithIconAndClose() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Success</button>

      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeTimeout={5000}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            background: '#E6F6F6',
            border: '1px solid #23779A',
            borderRadius: '4px',
          }}
        >
          <Icon name="check-circle" color="#23779A" />
          <span style={{ flex: 1 }}>
            Your changes have been saved successfully
          </span>
          <button onClick={() => setIsOpen(false)} aria-label="Close">
            <Icon name="x" />
          </button>
        </div>
      </Snackbar>
    </>
  );
}
```

### Error Notification

Snackbar for error messages:

```tsx
function ErrorSnackbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Trigger Error</button>

      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeTimeout={0} // Don't auto-close errors
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            background: '#FEE',
            border: '1px solid #C33',
            borderRadius: '4px',
          }}
        >
          <Icon name="alert-circle" color="#C33" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>Error</div>
            <div style={{ fontSize: '14px' }}>
              Failed to save changes. Please try again.
            </div>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <Icon name="x" />
          </button>
        </div>
      </Snackbar>
    </>
  );
}
```

### Multiple Actions

Snackbar with multiple action buttons:

```tsx
function MultiActionSnackbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleRetry = () => {
    console.log('Retrying...');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Upload File</button>

      <Snackbar open={isOpen} onClose={() => setIsOpen(false)} closeTimeout={0}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            minWidth: '400px',
          }}
        >
          <span>Upload failed</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handleRetry}>RETRY</button>
            <button onClick={() => setIsOpen(false)}>DISMISS</button>
          </div>
        </div>
      </Snackbar>
    </>
  );
}
```

### Sequential Snackbars

Managing a queue of snackbar messages:

```tsx
function SnackbarQueue() {
  const [queue, setQueue] = useState<string[]>([]);
  const [current, setCurrent] = useState<string | null>(null);

  const addMessage = (message: string) => {
    setQueue((prev) => [...prev, message]);
  };

  useEffect(() => {
    if (!current && queue.length > 0) {
      setCurrent(queue[0]);
      setQueue((prev) => prev.slice(1));
    }
  }, [current, queue]);

  const handleClose = () => {
    setCurrent(null);
  };

  return (
    <>
      <button onClick={() => addMessage('First message')}>Message 1</button>
      <button onClick={() => addMessage('Second message')}>Message 2</button>
      <button onClick={() => addMessage('Third message')}>Message 3</button>

      <Snackbar open={!!current} onClose={handleClose} closeTimeout={3000}>
        <div style={{ padding: '12px 16px' }}>{current}</div>
      </Snackbar>
    </>
  );
}
```

### Top Positioned

Snackbar at the top of the screen:

```tsx
function TopSnackbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show at Top</button>

      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        popover={{
          placement: 'top',
          middlewareOptions: {
            edgePadding: 20,
          },
        }}
      >
        <div style={{ padding: '12px 16px' }}>Message at the top</div>
      </Snackbar>
    </>
  );
}
```

### No Auto-close

Snackbar that requires manual dismissal:

```tsx
function PersistentSnackbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Persistent</button>

      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeTimeout={0} // Disable auto-close
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
          }}
        >
          <span>This message stays until dismissed</span>
          <button onClick={() => setIsOpen(false)}>CLOSE</button>
        </div>
      </Snackbar>
    </>
  );
}
```

## Accessibility

### ARIA Attributes

The component supports standard ARIA attributes:

```tsx
<Snackbar
  open={isOpen}
  onClose={handleClose}
  aria-label="Notification"
  aria-live="polite"
  role="status"
>
  Changes saved successfully
</Snackbar>
```

### Keyboard Support

- **Escape**: Closes the snackbar (if implemented in custom content)
- **Tab**: Navigates through focusable elements inside the snackbar
- Focus on interactive elements pauses the auto-close timer

### Screen Readers

- Use `aria-live="polite"` for non-critical messages
- Use `aria-live="assertive"` for important notifications
- Ensure all actions have proper labels
- Provide clear, concise messages

```tsx
<Snackbar
  open={isOpen}
  onClose={handleClose}
  aria-live="assertive"
  aria-atomic="true"
>
  <div>
    <span id="snackbar-message">Error: Upload failed</span>
    <button onClick={handleRetry} aria-label="Retry upload">
      RETRY
    </button>
  </div>
</Snackbar>
```

## Best Practices

### Content Guidelines

- **Keep it brief**: Messages should be short and scannable (max 2 lines)
- **Be specific**: Clearly communicate what happened or will happen
- **Use active voice**: "Message sent" instead of "Your message has been sent"
- **Action labels**: Use uppercase for action buttons (UNDO, RETRY)

### Timing

- **Default duration**: 4-6 seconds for informational messages
- **Longer duration**: 6-10 seconds for messages with actions
- **No timeout**: For error messages that require user attention
- **Sequential**: Show one snackbar at a time, queue additional messages

### Placement

- **Bottom center**: Default and most common placement
- **Top center**: For notifications related to header actions
- **Avoid**: Left/right placements (less conventional)

### Actions

- **Single action**: Most common pattern (UNDO, RETRY, VIEW)
- **Two actions**: Maximum recommended (primary + dismiss)
- **Close button**: Optional, especially for auto-closing snackbars
- **No actions**: For simple confirmations

### Visual Design

- **Contrast**: Ensure sufficient contrast for readability
- **Icons**: Use to reinforce message type (success, error, warning)
- **Elevation**: Use shadow to distinguish from main content
- **Width**: 344px minimum, responsive on mobile

## Common Patterns

### Form Submission Feedback

```tsx
const handleSubmit = async () => {
  try {
    await submitForm();
    setSnackbar({
      open: true,
      message: 'Form submitted successfully',
      type: 'success',
    });
  } catch (error) {
    setSnackbar({
      open: true,
      message: 'Submission failed. Please try again.',
      type: 'error',
    });
  }
};
```

### Network Status

```tsx
const [isOnline, setIsOnline] = useState(navigator.onLine);

useEffect(() => {
  const handleOnline = () => {
    setIsOnline(true);
    showSnackbar('Connection restored');
  };

  const handleOffline = () => {
    setIsOnline(false);
    showSnackbar('No internet connection');
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}, []);
```

### Undo Actions

```tsx
const handleDelete = (item) => {
  const backup = item;
  deleteItem(item.id);

  setSnackbar({
    open: true,
    message: 'Item deleted',
    action: {
      label: 'UNDO',
      onClick: () => restoreItem(backup),
    },
  });
};
```

## Notes

- The snackbar doesn't manage its own state - use the `open` prop for control
- Positioning is handled by the internal Popover component
- The component doesn't include default styling for content - implement your own design
- Auto-close behavior can be customized or disabled
- Hover or focus on the snackbar pauses the auto-close timer
- Only one snackbar should be visible at a time - implement queuing if needed

## Related Components

- **Popover**: Used internally for positioning
- **Alert**: For more prominent, persistent messages
- **Toast**: Similar notification pattern (if available)
- **Dialog**: For messages requiring explicit user action
