# Toggle Component

The Toggle component provides a binary switch control (on/off) with support for custom icons, disabled states, and both controlled and uncontrolled implementations. It's designed for enabling/disabling features, settings, and preferences.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

### Controlled Toggle (Recommended)

```tsx
import { useState } from 'react';

import { ToggleControlled } from '@kubit/web-ui-components';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={setChecked}
      aria-label="Enable notifications"
    />
  );
}
```

### Uncontrolled Toggle

```tsx
import { ToggleUncontrolled } from '@kubit/web-ui-components';

function App() {
  return (
    <ToggleUncontrolled
      variant="REGULAR"
      defaultChecked={false}
      onToggle={(checked) => console.log('Toggle changed:', checked)}
      aria-label="Enable dark mode"
    />
  );
}
```

## Variants

The Toggle component currently supports one variant:

### REGULAR

Standard toggle styling with smooth animations:

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={false}
  onToggle={handleToggle}
  aria-label="Standard toggle"
/>
```

## Advanced Usage

### Toggle with Icons

Add custom icons for on/off states:

```tsx
import { useState } from 'react';

import { ICONS } from '@kubit/web-ui-components';

function ToggleWithIcons() {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={setChecked}
      leftIcon={{ icon: ICONS.CLOSE }}
      rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
      aria-label="Toggle with icons"
    />
  );
}
```

### Disabled State

Prevent user interaction:

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={false}
  disabled={true}
  aria-label="Disabled toggle"
/>
```

### Disabled and Checked

Show locked-in enabled state:

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={true}
  disabled={true}
  aria-label="Locked enabled"
/>
```

### Toggle with Callback

Handle state changes with custom logic:

```tsx
function ToggleWithCallback() {
  const [checked, setChecked] = useState(false);

  const handleToggle = (newChecked: boolean): void => {
    setChecked(newChecked);
    console.log('Toggle changed to:', newChecked);

    // Additional logic
    if (newChecked) {
      enableFeature();
    } else {
      disableFeature();
    }
  };

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={handleToggle}
      aria-label="Feature toggle"
    />
  );
}
```

### Multiple Toggles

Manage multiple toggle states:

```tsx
function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false,
  });

  return (
    <div>
      <ToggleControlled
        variant="REGULAR"
        checked={settings.notifications}
        onToggle={(checked) =>
          setSettings({ ...settings, notifications: checked })
        }
        aria-label="Enable notifications"
      />

      <ToggleControlled
        variant="REGULAR"
        checked={settings.darkMode}
        onToggle={(checked) => setSettings({ ...settings, darkMode: checked })}
        aria-label="Dark mode"
      />

      <ToggleControlled
        variant="REGULAR"
        checked={settings.autoSave}
        onToggle={(checked) => setSettings({ ...settings, autoSave: checked })}
        aria-label="Auto save"
      />
    </div>
  );
}
```

### Toggle with Label (Composition)

Compose toggle with labels for better UX:

```tsx
import { useId } from 'react';

import { Label } from '@kubit/web-ui-components';

function ToggleWithLabel() {
  const [checked, setChecked] = useState(false);
  const toggleId = useId();
  const labelId = useId();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Label id={labelId} inputId={toggleId}>
        Enable notifications
      </Label>
      <ToggleControlled
        id={toggleId}
        variant="REGULAR"
        checked={checked}
        onToggle={setChecked}
        aria-labelledby={labelId}
      />
    </div>
  );
}
```

### Clickable Label Area

Make the entire label + toggle area interactive:

```tsx
function ClickableLabelToggle() {
  const [checked, setChecked] = useState(false);
  const toggleId = useId();

  const handleContainerClick = (): void => {
    setChecked(!checked);
  };

  return (
    <div
      onClick={handleContainerClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        padding: '8px',
      }}
    >
      <span style={{ flex: 1 }}>Dark Mode</span>
      <ToggleControlled
        id={toggleId}
        variant="REGULAR"
        checked={checked}
        component="span"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
}
```

### Toggle in Forms

Use toggle within form contexts:

```tsx
function FormWithToggle() {
  const [formData, setFormData] = useState({
    username: '',
    acceptTerms: false,
    subscribeNewsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />

      <div>
        <ToggleControlled
          variant="REGULAR"
          checked={formData.acceptTerms}
          onToggle={(checked) =>
            setFormData({ ...formData, acceptTerms: checked })
          }
          aria-label="Accept terms and conditions"
        />
        <span>I accept the terms and conditions</span>
      </div>

      <div>
        <ToggleControlled
          variant="REGULAR"
          checked={formData.subscribeNewsletter}
          onToggle={(checked) =>
            setFormData({ ...formData, subscribeNewsletter: checked })
          }
          aria-label="Subscribe to newsletter"
        />
        <span>Subscribe to newsletter</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Async Toggle Changes

Handle asynchronous operations:

```tsx
function AsyncToggle() {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = async (newChecked: boolean): Promise<void> => {
    setLoading(true);

    try {
      // Simulate API call
      await updateUserPreference('notifications', newChecked);
      setChecked(newChecked);
    } catch (error) {
      console.error('Failed to update preference:', error);
      // Revert to previous state
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={handleToggle}
      disabled={loading}
      aria-label="Enable notifications"
    />
  );
}
```

### Confirmation Before Toggle

Require user confirmation:

```tsx
function ConfirmationToggle() {
  const [checked, setChecked] = useState(false);

  const handleToggle = (newChecked: boolean): void => {
    if (newChecked) {
      // Confirm before enabling
      if (window.confirm('Are you sure you want to enable this feature?')) {
        setChecked(newChecked);
      }
    } else {
      // Disable without confirmation
      setChecked(newChecked);
    }
  };

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={handleToggle}
      aria-label="Dangerous feature toggle"
    />
  );
}
```

### Toggle with Description

Add contextual information:

```tsx
function ToggleWithDescription() {
  const [checked, setChecked] = useState(false);
  const descriptionId = useId();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span>Dark Mode</span>
        <ToggleControlled
          variant="REGULAR"
          checked={checked}
          onToggle={setChecked}
          aria-label="Dark mode"
          aria-describedby={descriptionId}
        />
      </div>
      <p id={descriptionId} style={{ fontSize: '12px', color: '#666' }}>
        Switch to dark theme for better viewing in low light
      </p>
    </div>
  );
}
```

### Conditional Toggle States

Show different states based on conditions:

```tsx
function ConditionalToggle() {
  const [checked, setChecked] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={isPremium ? setChecked : undefined}
      disabled={!isPremium}
      aria-label="Premium feature"
    />
  );
}
```

### Toggle Group

Related toggle switches:

```tsx
function ToggleGroup() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <span>Email Notifications</span>
        <ToggleControlled
          variant="REGULAR"
          checked={notifications.email}
          onToggle={(checked) =>
            setNotifications({ ...notifications, email: checked })
          }
          aria-label="Email notifications"
        />
      </div>

      <div>
        <span>Push Notifications</span>
        <ToggleControlled
          variant="REGULAR"
          checked={notifications.push}
          onToggle={(checked) =>
            setNotifications({ ...notifications, push: checked })
          }
          aria-label="Push notifications"
        />
      </div>

      <div>
        <span>SMS Notifications</span>
        <ToggleControlled
          variant="REGULAR"
          checked={notifications.sms}
          onToggle={(checked) =>
            setNotifications({ ...notifications, sms: checked })
          }
          aria-label="SMS notifications"
        />
      </div>
    </div>
  );
}
```

### Toggle with Persistence

Save state to localStorage:

```tsx
function PersistentToggle() {
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  const handleToggle = (newChecked: boolean): void => {
    setChecked(newChecked);
    localStorage.setItem('darkMode', String(newChecked));

    // Apply theme
    document.body.classList.toggle('dark-mode', newChecked);
  };

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={handleToggle}
      aria-label="Dark mode"
    />
  );
}
```

### Toggle with Analytics

Track toggle interactions:

```tsx
function AnalyticsToggle() {
  const [checked, setChecked] = useState(false);

  const handleToggle = (newChecked: boolean): void => {
    setChecked(newChecked);

    // Track analytics
    analytics.track('toggle_changed', {
      feature: 'notifications',
      enabled: newChecked,
      timestamp: Date.now(),
    });
  };

  return (
    <ToggleControlled
      variant="REGULAR"
      checked={checked}
      onToggle={handleToggle}
      aria-label="Enable notifications"
    />
  );
}
```

## Props

### ToggleControlled Props

| Prop                       | Type                               | Default     | Description                                  |
| -------------------------- | ---------------------------------- | ----------- | -------------------------------------------- |
| `variant`                  | `string`                           | Required    | Visual variant of the toggle                 |
| `checked`                  | `boolean`                          | `undefined` | Toggle state (controlled)                    |
| `onToggle`                 | `(checked: boolean) => void`       | `undefined` | Callback when toggle state changes           |
| `disabled`                 | `boolean`                          | `false`     | Whether toggle is disabled                   |
| `leftIcon`                 | `CommonIconProps`                  | `undefined` | Icon for unchecked/off state                 |
| `rightIcon`                | `CommonIconProps`                  | `undefined` | Icon for checked/on state                    |
| `component`                | `React.ElementType`                | `'button'`  | HTML element to render as                    |
| `id`                       | `string`                           | `undefined` | HTML id attribute                            |
| `name`                     | `string`                           | `undefined` | Name attribute for forms                     |
| `value`                    | `string`                           | `undefined` | Value attribute for forms                    |
| `tabIndex`                 | `number`                           | `undefined` | Tab order position                           |
| `aria-label`               | `string`                           | `undefined` | Accessible label (required if no labelledby) |
| `aria-labelledby`          | `string`                           | `undefined` | ID of labelling element                      |
| `aria-describedby`         | `string`                           | `undefined` | ID of describing element                     |
| `dataTestId`               | `string`                           | `undefined` | Test identifier                              |
| `onClick`                  | `React.MouseEventHandler`          | `undefined` | Click event handler                          |
| `onFocus`                  | `React.FocusEventHandler`          | `undefined` | Focus event handler                          |
| `onBlur`                   | `React.FocusEventHandler`          | `undefined` | Blur event handler                           |
| `onKeyDown`                | `React.KeyboardEventHandler`       | `undefined` | KeyDown event handler                        |
| `onMouseEnter`             | `React.MouseEventHandler`          | `undefined` | Mouse enter event handler                    |
| `onMouseLeave`             | `React.MouseEventHandler`          | `undefined` | Mouse leave event handler                    |
| `additionalVariantClasses` | `Partial<ToggleVariantCssClasses>` | `undefined` | Additional CSS classes                       |
| `data-*`                   | `string`                           | `undefined` | Data attributes                              |

### ToggleUncontrolled Props

| Prop                                         | Type                         | Default     | Description                         |
| -------------------------------------------- | ---------------------------- | ----------- | ----------------------------------- |
| `variant`                                    | `string`                     | Required    | Visual variant of the toggle        |
| `defaultChecked`                             | `boolean`                    | `false`     | Initial toggle state (uncontrolled) |
| `onToggle`                                   | `(checked: boolean) => void` | `undefined` | Callback when toggle state changes  |
| `disabled`                                   | `boolean`                    | `false`     | Whether toggle is disabled          |
| `leftIcon`                                   | `CommonIconProps`            | `undefined` | Icon for unchecked/off state        |
| `rightIcon`                                  | `CommonIconProps`            | `undefined` | Icon for checked/on state           |
| _(all other props same as ToggleControlled)_ |                              |             |                                     |

## Accessibility

- **ARIA Labels**: Always provide `aria-label` or `aria-labelledby`
- **Keyboard Support**: Full keyboard interaction (Space/Enter to toggle)
- **Focus Management**: Clear focus indicators
- **Role**: Uses native button role for proper semantics
- **State Announcement**: Screen readers announce checked/unchecked state
- **Disabled State**: Properly conveyed to assistive technologies
- **Component Type**: Use `component='span'` for decorative toggles in clickable containers

### Keyboard Shortcuts

| Key     | Action        |
| ------- | ------------- |
| `Space` | Toggle on/off |
| `Enter` | Toggle on/off |
| `Tab`   | Move focus    |

## Best Practices

1. **Always Provide Labels**: Use `aria-label` or compose with Label component
2. **Controlled State**: Prefer controlled over uncontrolled for better state management
3. **Immediate Feedback**: Toggle should respond instantly to clicks
4. **Visual Clarity**: Icons help communicate on/off states
5. **Disable Appropriately**: Only disable when action is truly unavailable
6. **Group Related Toggles**: Keep related settings together
7. **Confirmation for Critical Actions**: Require confirmation for dangerous operations
8. **Persist Important Settings**: Save toggle states to localStorage/backend
9. **Accessible Composition**: When creating clickable areas, use `component='span'` and `tabIndex={-1}`
10. **Avoid Nested Interactivity**: Don't nest interactive elements (violates accessibility)

## Common Use Cases

### Settings Panels

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={darkMode}
  onToggle={setDarkMode}
  aria-label="Dark mode"
/>
```

### Feature Flags

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={featureEnabled}
  onToggle={setFeatureEnabled}
  aria-label="Enable experimental features"
/>
```

### Notification Preferences

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={notificationsEnabled}
  onToggle={setNotificationsEnabled}
  leftIcon={{ icon: ICONS.CLOSE }}
  rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
  aria-label="Enable notifications"
/>
```

### Privacy Controls

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={publicProfile}
  onToggle={setPublicProfile}
  aria-label="Public profile"
/>
```

### Auto-Save Toggle

```tsx
<ToggleControlled
  variant="REGULAR"
  checked={autoSave}
  onToggle={setAutoSave}
  aria-label="Enable auto-save"
/>
```

## When to Use Toggle

Use Toggle when:

- Binary on/off choices (enabled/disabled)
- Immediate effect without confirmation
- Settings and preferences
- Feature activation/deactivation
- Visual state is important

Don't use Toggle when:

- More than two options (use Radio or Select)
- Action requires confirmation (use Checkbox + Button)
- Part of a larger form submission (use Checkbox)
- State change isn't immediate
- Multiple selections needed (use Checkbox)

## Related Components

- **Checkbox**: For form selections requiring submission
- **Radio**: For selecting one option from multiple choices
- **Button**: For action triggers
- **Switch**: Alternative visual style for toggle (if available)
- **Label**: For composing toggles with labels

## Controlled vs Uncontrolled

### When to Use Controlled

- Need to control state from parent
- Form validation required
- State persistence needed
- Multiple components share state
- Complex state logic
- **Recommended for most use cases**

### When to Use Uncontrolled

- Simple toggles without external state
- Rapid prototyping
- No need to track state changes
- Standalone toggles

## Performance Considerations

- Toggle is a lightweight component with minimal overhead
- Icons are lazy-loaded when needed
- No unnecessary re-renders with proper React optimization
- For forms with many toggles:
  - Use single state object instead of individual states
  - Memoize toggle handlers with useCallback
  - Consider React.memo for toggle rows

## Styling Notes

- Toggle uses native button element for accessibility
- Smooth animations for state transitions
- Icons scale appropriately within toggle
- Focus states clearly visible
- Disabled state reduces opacity
- Custom styling via `additionalVariantClasses`

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper ARIA attributes
- **2.1.1 Keyboard (Level A)**: Full keyboard accessibility
- **2.1.2 No Keyboard Trap (Level A)**: Focus management
- **2.4.7 Focus Visible (Level AA)**: Clear focus indicators
- **3.2.1 On Focus (Level A)**: No unexpected changes on focus
- **3.2.2 On Input (Level A)**: Predictable toggle behavior
- **4.1.2 Name, Role, Value (Level A)**: Proper button semantics
- **4.1.3 Status Messages (Level AA)**: State changes announced

## Browser Support

Toggle component uses standard web technologies with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ NVDA, JAWS, VoiceOver
- Mobile: ✅ Touch-optimized interactions
- Keyboard Navigation: ✅ Full support

## Migration from Other Toggle Components

If migrating from other toggle/switch components:

```tsx
// Old component
<OldToggle checked={value} onChange={setValue} />

// New component
<ToggleControlled
  variant='REGULAR'
  checked={value}
  onToggle={setValue}
  aria-label='Your toggle label'
/>
```

Key differences:

- Use `onToggle` instead of `onChange`
- `variant` prop is required
- Always provide `aria-label` or `aria-labelledby`
- Controlled version requires explicit state management
