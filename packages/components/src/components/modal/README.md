# Modal Component

The Modal component is an overlay dialog that displays content above the main page. It provides a flexible container for forms, confirmations, alerts, or any interactive content that requires user attention. The component supports controlled and uncontrolled modes, blocking behavior, custom sizing, and full accessibility features.

## Features

- **Controlled/Uncontrolled Modes**: Manage modal state internally or externally
- **Overlay with Blocking**: Optional blocking mode to prevent closing
- **Custom Sizing**: Control width, height, min/max dimensions
- **Responsive Design**: Adapts to different device breakpoints
- **Header with Close Button**: Optional title and close icon
- **Scrollable Content**: Built-in scroll support for long content
- **Footer Support**: Optional footer for actions
- **Drag Icon**: Optional drag handle for mobile
- **Portal Support**: Render modal in custom portal
- **Accessibility**: Full ARIA support, focus management, keyboard navigation
- **Escape to Close**: Close modal with Escape key (unless blocked)
- **Click Outside to Close**: Close modal by clicking overlay (unless blocked)

## Usage

### Basic Example

```tsx
import { useState } from 'react';

import { Modal } from '@kubit/components';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Modal Title' }}
        variant="DEFAULT"
      >
        <p>This is the modal content.</p>
      </Modal>
    </>
  );
}
```

### With Close Icon

```tsx
import { Modal } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={{ content: 'Modal with Close Icon' }}
      closeIcon={{ icon: ICONS.CLOSE }}
      variant="DEFAULT"
    >
      <p>Click the X to close this modal.</p>
    </Modal>
  );
}
```

### With Footer

```tsx
import { Modal } from '@kubit/components';

function Example() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    // Save logic
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={{ content: 'Confirm Action' }}
      footer={
        <div
          style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
        >
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      }
      variant="DEFAULT"
    >
      <p>Are you sure you want to save these changes?</p>
    </Modal>
  );
}
```

### Blocking Modal

```tsx
import { Modal } from '@kubit/components';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      blocked // Prevents closing via escape or overlay click
      title={{ content: 'Important Notice' }}
      footer={<button onClick={() => setOpen(false)}>I Understand</button>}
      variant="DEFAULT"
    >
      <p>This modal cannot be closed by clicking outside or pressing Escape.</p>
      <p>You must click the button below.</p>
    </Modal>
  );
}
```

### Custom Sizing

```tsx
import { Modal } from '@kubit/components';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={{ content: 'Large Modal' }}
      maxWidth="800px"
      minHeight="400px"
      variant="DEFAULT"
    >
      <p>This modal has custom dimensions.</p>
    </Modal>
  );
}
```

## Props

### ModalControlledProps

| Prop                      | Type                                                      | Required | Default        | Description                                       |
| ------------------------- | --------------------------------------------------------- | -------- | -------------- | ------------------------------------------------- |
| `open`                    | `boolean`                                                 | No       | `false`        | Whether the modal is open                         |
| `onClose`                 | `() => void`                                              | No       | -              | Callback when modal should close                  |
| `variant`                 | `'DEFAULT'`                                               | No       | -              | Visual variant of the modal                       |
| `title`                   | `CommonTextProps & { visible?: boolean }`                 | No       | -              | Title configuration (can be string or object)     |
| `closeIcon`               | `CommonIconProps`                                         | No       | -              | Close icon configuration                          |
| `closeButton`             | `ModalButtonProps`                                        | No       | -              | Close button configuration                        |
| `content`                 | `ReactNode`                                               | No       | -              | Main content of the modal                         |
| `footer`                  | `ReactNode`                                               | No       | -              | Footer content (typically actions)                |
| `blocked`                 | `boolean`                                                 | No       | `false`        | Whether modal prevents closing via escape/overlay |
| `maxWidth`                | `string`                                                  | No       | -              | Maximum width (CSS value)                         |
| `minWidth`                | `string`                                                  | No       | -              | Minimum width (CSS value)                         |
| `maxHeight`               | `string`                                                  | No       | -              | Maximum height (CSS value)                        |
| `minHeight`               | `string`                                                  | No       | -              | Minimum height (CSS value)                        |
| `minContentHeight`        | `string`                                                  | No       | -              | Minimum content area height                       |
| `customWidthAllDevices`   | `boolean`                                                 | No       | `false`        | Apply custom width to all devices                 |
| `customHeightAllDevices`  | `boolean`                                                 | No       | `false`        | Apply custom height to all devices                |
| `dragIcon`                | `CommonIconProps`                                         | No       | -              | Drag handle icon for mobile                       |
| `popover`                 | `ModalPopoverProps`                                       | No       | -              | Popover configuration                             |
| `contentContainer`        | `ModalContentContainerProps`                              | No       | -              | Content container ARIA props                      |
| `contentScrollArias`      | `Pick<AriaAttributes, 'aria-label' \| 'aria-labelledby'>` | No       | -              | Scroll area ARIA labels                           |
| `disableFocusableContent` | `boolean`                                                 | No       | `false`        | Disable focus trap in content                     |
| `portalId`                | `string`                                                  | No       | -              | Custom portal element ID                          |
| `id`                      | `string`                                                  | No       | Auto-generated | Custom modal ID                                   |
| `additionalClasses`       | `Partial<ModalCssClasses>`                                | No       | -              | Additional CSS classes                            |
| `data-testid`             | `string`                                                  | No       | `'modal'`      | Test ID for testing purposes                      |

### Title Props (CommonTextProps)

When passing a string directly:

```tsx
title={{ content: 'Modal Title' }}
```

Or as a string (will be converted internally):

```tsx
title = 'Modal Title';
```

With additional properties:

```tsx
title={{
  content: 'Modal Title',
  id: 'modal-title',
  visible: true
}}
```

### Close Icon Props (CommonIconProps)

```tsx
closeIcon={{
  icon: ICONS.CLOSE,
  altText: 'Close modal',
  onClick: handleClose
}}
```

## Variants

The Modal component currently supports one variant:

### DEFAULT

The standard modal style with default spacing, borders, and shadows.

```tsx
<Modal variant="DEFAULT" title="Default Modal">
  Content here
</Modal>
```

## Common Patterns

### Confirmation Dialog

```tsx
import { useState } from 'react';

import { Modal } from '@kubit/components';

function ConfirmationDialog() {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    setOpen(false);
    // Perform action
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Delete Item</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Confirm Deletion' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        footer={
          <div
            style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
          >
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button
              onClick={handleConfirm}
              style={{ background: '#e74c3c', color: 'white' }}
            >
              Delete
            </button>
          </div>
        }
        variant="DEFAULT"
      >
        <p>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
      </Modal>
    </>
  );
}
```

### Form Modal

```tsx
import { useState } from 'react';

import { Modal } from '@kubit/components';

function FormModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Add User</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Add New User' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        maxWidth="500px"
        footer={
          <div
            style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
          >
            <button type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button type="submit" form="user-form">
              Save
            </button>
          </div>
        }
        variant="DEFAULT"
      >
        <form id="user-form" onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
```

### Long Content with Scroll

```tsx
import { Modal } from '@kubit/components';

function ScrollableModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={{ content: 'Terms and Conditions' }}
      closeIcon={{ icon: ICONS.CLOSE }}
      maxHeight="600px"
      contentScrollArias={{ 'aria-label': 'Terms and conditions content' }}
      footer={<button onClick={() => setOpen(false)}>I Accept</button>}
      variant="DEFAULT"
    >
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        {/* Long content that will scroll */}
      </div>
    </Modal>
  );
}
```

### Multi-Step Modal

```tsx
import { useState } from 'react';

import { Modal } from '@kubit/components';

function MultiStepModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleFinish = () => {
    setOpen(false);
    setStep(1);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Start Setup</button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setStep(1);
        }}
        title={{ content: `Setup - Step ${step} of 3` }}
        closeIcon={{ icon: ICONS.CLOSE }}
        footer={
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <button onClick={handleBack} disabled={step === 1}>
              Back
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setOpen(false)}>Cancel</button>
              {step < 3 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
                <button onClick={handleFinish}>Finish</button>
              )}
            </div>
          </div>
        }
        variant="DEFAULT"
      >
        {step === 1 && <div>Step 1 content</div>}
        {step === 2 && <div>Step 2 content</div>}
        {step === 3 && <div>Step 3 content</div>}
      </Modal>
    </>
  );
}
```

### Alert Modal

```tsx
import { Modal } from '@kubit/components';

function AlertModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={{ content: 'Success!' }}
      closeIcon={{ icon: ICONS.CLOSE }}
      maxWidth="400px"
      footer={<button onClick={() => setOpen(false)}>OK</button>}
      variant="DEFAULT"
    >
      <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <p>Your changes have been saved successfully.</p>
      </div>
    </Modal>
  );
}
```

### Nested Modals

```tsx
import { useState } from 'react';

import { Modal } from '@kubit/components';

function NestedModals() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  return (
    <>
      <button onClick={() => setFirstOpen(true)}>Open First Modal</button>

      <Modal
        open={firstOpen}
        onClose={() => setFirstOpen(false)}
        title={{ content: 'First Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        variant="DEFAULT"
      >
        <p>This is the first modal.</p>
        <button onClick={() => setSecondOpen(true)}>Open Second Modal</button>
      </Modal>

      <Modal
        open={secondOpen}
        onClose={() => setSecondOpen(false)}
        title={{ content: 'Second Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        variant="DEFAULT"
      >
        <p>This is the second modal, opened from the first.</p>
      </Modal>
    </>
  );
}
```

### Loading Modal

```tsx
import { Modal } from '@kubit/components';

function LoadingModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      blocked={loading} // Prevent closing while loading
      title={{ content: 'Processing...' }}
      variant="DEFAULT"
    >
      <div style={{ textAlign: 'center', padding: '24px' }}>
        {loading ? (
          <>
            <div className="spinner" />
            <p>Please wait...</p>
          </>
        ) : (
          <>
            <p>Ready to process?</p>
            <button onClick={handleAction}>Start</button>
          </>
        )}
      </div>
    </Modal>
  );
}
```

## Accessibility

The Modal component is built with comprehensive accessibility features:

### ARIA Attributes

The modal automatically includes:

- `role="dialog"` for semantic dialog role
- `aria-modal="true"` when open
- `aria-labelledby` pointing to the title
- Proper focus management

```tsx
<Modal
  open={open}
  title={{ content: 'Accessible Modal', id: 'modal-title' }}
  contentContainer={{
    'aria-label': 'Modal content',
    role: 'document',
  }}
>
  Content here
</Modal>
```

### Keyboard Navigation

- **Escape**: Closes the modal (unless `blocked={true}`)
- **Tab**: Cycles through focusable elements within modal
- **Shift + Tab**: Cycles backwards through focusable elements

### Focus Management

The modal automatically:

1. Traps focus within the modal when open
2. Focuses the first focusable element
3. Returns focus to the trigger element when closed

```tsx
<Modal
  open={open}
  onClose={handleClose}
  popover={{
    focusFirstDescendantAutomatically: true,
    variant: 'MODAL',
  }}
>
  Content here
</Modal>
```

### Screen Reader Support

Provide descriptive labels for screen readers:

```tsx
<Modal
  open={open}
  title={{ content: 'Delete Confirmation' }}
  contentScrollArias={{
    'aria-label': 'Confirmation dialog content',
  }}
  closeIcon={{
    icon: ICONS.CLOSE,
    altText: 'Close delete confirmation dialog',
  }}
>
  <p>This action cannot be undone.</p>
</Modal>
```

## Best Practices

### 1. Always Provide a Title

```tsx
// ✅ Good - descriptive title
<Modal title={{ content: 'Edit Profile' }}>
  Form content
</Modal>

// ❌ Bad - no title
<Modal>
  Form content
</Modal>
```

### 2. Use Blocking Sparingly

```tsx
// ✅ Good - blocking for critical operations
<Modal blocked title="Processing Payment">
  Please wait...
</Modal>

// ❌ Bad - blocking unnecessarily
<Modal blocked title="Information">
  Here's some info
</Modal>
```

### 3. Provide Clear Actions

```tsx
// ✅ Good - clear action buttons
<Modal
  title="Confirm Delete"
  footer={
    <>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onDelete}>Delete</button>
    </>
  }
>
  Content
</Modal>

// ❌ Bad - unclear actions
<Modal title="Confirm Delete">
  <button>OK</button>
</Modal>
```

### 4. Handle Long Content

```tsx
// ✅ Good - set max height for scrolling
<Modal
  title="Terms"
  maxHeight="600px"
  contentScrollArias={{ 'aria-label': 'Terms content' }}
>
  Long content...
</Modal>

// ❌ Bad - no scroll handling
<Modal title="Terms">
  Very long content that might overflow...
</Modal>
```

### 5. Close Icon Accessibility

```tsx
// ✅ Good - descriptive alt text
<Modal
  closeIcon={{
    icon: ICONS.CLOSE,
    altText: 'Close profile settings dialog'
  }}
>
  Content
</Modal>

// ❌ Bad - no alt text
<Modal closeIcon={{ icon: ICONS.CLOSE }}>
  Content
</Modal>
```

### 6. Manage Modal State

```tsx
// ✅ Good - controlled state
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)}>
  Content
</Modal>

// ❌ Bad - uncontrolled
<Modal open={true}>
  Content
</Modal>
```

### 7. Use Appropriate Sizing

```tsx
// ✅ Good - responsive sizing
<Modal
  maxWidth="90vw"
  maxHeight="90vh"
  customWidthAllDevices
>
  Content
</Modal>

// ❌ Bad - fixed large size
<Modal maxWidth="1200px" maxHeight="900px">
  Content
</Modal>
```

### 8. Test Focus Behavior

```tsx
// ✅ Good - proper focus management
<Modal
  open={open}
  onClose={handleClose}
  popover={{
    focusFirstDescendantAutomatically: true,
  }}
>
  <button>First focusable element</button>
</Modal>
```

## Styling

### Custom CSS Classes

```tsx
<Modal
  title="Styled Modal"
  additionalClasses={{
    container: 'custom-modal-container',
    header: 'custom-modal-header',
    content: 'custom-modal-content',
    footer: 'custom-modal-footer',
  }}
>
  Content
</Modal>
```

### Custom Dimensions

```tsx
<Modal
  maxWidth="800px"
  minWidth="400px"
  maxHeight="600px"
  minHeight="300px"
  minContentHeight="200px"
>
  Content
</Modal>
```

### Responsive Sizing

```tsx
<Modal
  maxWidth="95vw"
  maxHeight="90vh"
  customWidthAllDevices={true}
  customHeightAllDevices={true}
>
  Content adapts to all devices
</Modal>
```

## Testing

### Basic Rendering

```tsx
import { Modal } from '@kubit/components';
import { render, screen } from '@testing-library/react';

describe('Modal', () => {
  test('renders when open', () => {
    render(
      <Modal open={true} title={{ content: 'Test Modal' }}>
        Modal content
      </Modal>,
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    render(
      <Modal open={false} title={{ content: 'Test Modal' }}>
        Modal content
      </Modal>,
    );

    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });
});
```

### Close Behavior

```tsx
import userEvent from '@testing-library/user-event';

test('calls onClose when close icon clicked', async () => {
  const handleClose = vi.fn();

  render(
    <Modal
      open={true}
      onClose={handleClose}
      title={{ content: 'Test' }}
      closeIcon={{ icon: 'close', altText: 'Close' }}
    >
      Content
    </Modal>,
  );

  const closeButton = screen.getByAltText('Close');
  await userEvent.click(closeButton);

  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('closes on Escape key', async () => {
  const handleClose = vi.fn();

  render(
    <Modal open={true} onClose={handleClose} title="Test">
      Content
    </Modal>,
  );

  await userEvent.keyboard('{Escape}');

  expect(handleClose).toHaveBeenCalledTimes(1);
});
```

### Blocking Behavior

```tsx
test('does not close when blocked', async () => {
  const handleClose = vi.fn();

  render(
    <Modal open={true} onClose={handleClose} blocked title="Test">
      Content
    </Modal>,
  );

  await userEvent.keyboard('{Escape}');

  expect(handleClose).not.toHaveBeenCalled();
});
```

### Accessibility

```tsx
import { axe } from 'vitest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <Modal
      open={true}
      title={{ content: 'Accessible Modal' }}
      closeIcon={{ icon: 'close', altText: 'Close modal' }}
    >
      Content
    </Modal>,
  );

  expect(await axe(container)).toHaveNoViolations();
});

test('has correct ARIA attributes', () => {
  render(
    <Modal open={true} title={{ content: 'Test Modal', id: 'modal-title' }}>
      Content
    </Modal>,
  );

  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveAttribute('aria-modal', 'true');
  expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
});
```

## Related Components

- **Popover**: The underlying component used by Modal
- **Overlay**: Background overlay component
- **Button**: Buttons used in modal footer
- **Portal**: For rendering modals in custom containers

## Browser Support

The Modal component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Migration Guide

### From Native Dialog

```tsx
// Before
<dialog open>
  <h2>Title</h2>
  <p>Content</p>
  <button>Close</button>
</dialog>

// After
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title={{ content: 'Title' }}
  closeIcon={{ icon: ICONS.CLOSE }}
>
  <p>Content</p>
</Modal>
```

## Troubleshooting

### Modal Not Closing

**Problem**: Modal doesn't close when clicking outside or pressing Escape.

**Solution**: Check if `blocked` prop is set to true:

```tsx
// ✅ Correct - can close normally
<Modal open={open} onClose={handleClose}>
  Content
</Modal>

// ❌ Incorrect - blocked from closing
<Modal open={open} blocked onClose={handleClose}>
  Content
</Modal>
```

### Content Not Scrolling

**Problem**: Long content overflows without scrolling.

**Solution**: Set `maxHeight` and provide scroll ARIA labels:

```tsx
<Modal maxHeight="600px" contentScrollArias={{ 'aria-label': 'Content area' }}>
  Long content...
</Modal>
```

### Focus Not Trapped

**Problem**: Tab key exits the modal.

**Solution**: Ensure popover configuration is correct:

```tsx
<Modal
  popover={{
    focusFirstDescendantAutomatically: true,
    variant: 'MODAL',
  }}
>
  Content
</Modal>
```

### Modal Not Centering

**Problem**: Modal appears off-center.

**Solution**: Check parent container styling and portal configuration:

```tsx
<Modal portalId="modal-root" popover={{ strategy: 'fixed' }}>
  Content
</Modal>
```
