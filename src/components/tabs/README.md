# Tabs Component

The Tabs component provides a flexible and accessible way to organize content into separate views. Users can switch between different sections by clicking tab labels. It supports features like scrollable tabs, disabled states, icons, keyboard navigation, and various customization options.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

### Uncontrolled Tabs

The uncontrolled version manages tab selection internally:

```tsx
import { TabsUnControlled } from '@kubit/web-ui-components';

function App() {
  return (
    <TabsUnControlled
      variant="DEFAULT"
      tabs={[
        { content: 'First tab' },
        { content: 'Second tab' },
        { content: 'Third tab' },
      ]}
      content={[
        <div>Content for First tab</div>,
        <div>Content for Second tab</div>,
        <div>Content for Third tab</div>,
      ]}
    />
  );
}
```

### Controlled Tabs

The controlled version allows you to manage tab selection from the parent:

```tsx
import { useState } from 'react';

import { TabsControlled } from '@kubit/web-ui-components';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabsControlled
      variant="DEFAULT"
      selectedTab={selectedTab}
      onSelectTab={setSelectedTab}
      tabs={[
        { content: 'First tab' },
        { content: 'Second tab' },
        { content: 'Third tab' },
      ]}
      content={[
        <div>Content for First tab</div>,
        <div>Content for Second tab</div>,
        <div>Content for Third tab</div>,
      ]}
    />
  );
}
```

## Variants

The Tabs component currently supports one variant:

### DEFAULT

Standard tabs styling:

```tsx
<TabsUnControlled variant="DEFAULT" tabs={[...]} content={[...]} />
```

## Advanced Usage

### Tabs with Navigation Controls

Add left and right navigation icons for scrollable tabs:

```tsx
import { TabsUnControlled } from '@kubit/web-ui-components';
import { ICONS } from '@kubit/web-ui-components';

function ScrollableTabs() {
  return (
    <TabsUnControlled
      variant="DEFAULT"
      leftIcon={{ icon: ICONS.CHEVRON_LEFT }}
      rightIcon={{ icon: ICONS.CHEVRON_RIGHT }}
      maxTabsInView={4}
      tabs={[
        { content: 'Tab 1' },
        { content: 'Tab 2' },
        { content: 'Tab 3' },
        { content: 'Tab 4' },
        { content: 'Tab 5' },
        { content: 'Tab 6' },
        { content: 'Tab 7' },
        { content: 'Tab 8' },
      ]}
      content={[
        <div>Content 1</div>,
        <div>Content 2</div>,
        <div>Content 3</div>,
        <div>Content 4</div>,
        <div>Content 5</div>,
        <div>Content 6</div>,
        <div>Content 7</div>,
        <div>Content 8</div>,
      ]}
    />
  );
}
```

### Tabs with Disabled States

Disable specific tabs to prevent user interaction:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    { content: 'Active tab' },
    {
      content: 'Disabled tab',
      disabled: true,
      'aria-label': 'This tab is currently disabled',
    },
    { content: 'Another active tab' },
  ]}
  content={[
    <div>Content for active tab</div>,
    <div>Content for disabled tab</div>,
    <div>Content for another active tab</div>,
  ]}
/>
```

### Default Selected Tab

Set which tab should be selected initially:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  defaultSelectedTab={2} // Third tab (zero-indexed)
  tabs={[
    { content: 'First tab' },
    { content: 'Second tab' },
    { content: 'Third tab' },
  ]}
  content={[
    <div>First content</div>,
    <div>Second content</div>,
    <div>Third content</div>,
  ]}
/>
```

### Auto-width Tabs

Allow tabs to size automatically based on their content:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  autoWidth={true}
  tabs={[
    { content: 'Short' },
    { content: 'Medium Length Tab' },
    { content: 'Very Long Tab Title Here' },
  ]}
  content={[...]}
/>
```

### Unmount Content When Hidden

Improve performance by unmounting inactive tab content:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  unMountContent={true}
  tabs={[...]}
  content={[
    <ExpensiveComponent />,
    <AnotherExpensiveComponent />,
    <HeavyDataTable />,
  ]}
/>
```

Benefits:

- Reduces memory usage for inactive tabs
- Improves initial render performance
- Useful for tabs with expensive components
- Content remounts when tab is reselected

### Single Tab with Hidden Label

Hide the tab label when only one tab exists:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  hideLabelForSingleTab={true}
  tabs={[
    {
      content: 'Only Tab',
      'aria-label': 'Main content tab',
    },
  ]}
  content={[<div>Main content without visible tab label</div>]}
/>
```

### Tab with Callback

Execute actions when tabs are selected:

```tsx
function TabsWithCallback() {
  const handleTabSelect = (tabIndex: number) => {
    console.log(`Tab ${tabIndex} selected`);
    // Track analytics
    // Load data for the selected tab
    // Update URL params
  };

  return (
    <TabsUnControlled
      variant="DEFAULT"
      onSelectTab={handleTabSelect}
      tabs={[
        { content: 'Dashboard' },
        { content: 'Reports' },
        { content: 'Settings' },
      ]}
      content={[<Dashboard />, <Reports />, <Settings />]}
    />
  );
}
```

### Tabs with Custom ARIA Labels

Provide descriptive labels for accessibility:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  leftControlAriaLabel="Previous tabs"
  rightControlAriaLabel="Next tabs"
  tabs={[
    {
      content: 'Overview',
      'aria-label': 'Overview section with general information',
    },
    {
      content: 'Details',
      'aria-label': 'Detailed information section',
    },
    {
      content: 'History',
      'aria-label': 'Historical data and timeline',
    },
  ]}
  content={[...]}
/>
```

### Tabs with Maximum Visible Tabs

Control how many tabs are visible at once:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  maxTabsInView={3}
  leftIcon={{ icon: ICONS.CHEVRON_LEFT }}
  rightIcon={{ icon: ICONS.CHEVRON_RIGHT }}
  tabs={[
    { content: 'Tab 1' },
    { content: 'Tab 2' },
    { content: 'Tab 3' },
    { content: 'Tab 4' },
    { content: 'Tab 5' },
    { content: 'Tab 6' },
  ]}
  content={[...]}
/>
```

### Lazy Loading Tab Content

Load content only when a tab is selected:

```tsx
function LazyTabs() {
  const [loadedTabs, setLoadedTabs] = useState<Set<number>>(new Set([0]));
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (tabIndex: number) => {
    setSelectedTab(tabIndex);
    setLoadedTabs((prev) => new Set(prev).add(tabIndex));
  };

  return (
    <TabsControlled
      variant="DEFAULT"
      selectedTab={selectedTab}
      onSelectTab={handleTabSelect}
      tabs={[{ content: 'Tab 1' }, { content: 'Tab 2' }, { content: 'Tab 3' }]}
      content={[
        loadedTabs.has(0) ? <ExpensiveContent1 /> : <div>Loading...</div>,
        loadedTabs.has(1) ? <ExpensiveContent2 /> : <div>Loading...</div>,
        loadedTabs.has(2) ? <ExpensiveContent3 /> : <div>Loading...</div>,
      ]}
    />
  );
}
```

### Tabs with Dynamic Content

Update tabs and content dynamically:

```tsx
function DynamicTabs() {
  const [categories, setCategories] = useState([
    'Electronics',
    'Clothing',
    'Books',
  ]);

  return (
    <TabsUnControlled
      variant="DEFAULT"
      tabs={categories.map((category) => ({
        content: category,
      }))}
      content={categories.map((category) => (
        <CategoryContent key={category} category={category} />
      ))}
    />
  );
}
```

### Tabs with URL Synchronization

Sync selected tab with URL parameters:

```tsx
import { useSearchParams } from 'react-router-dom';

function TabsWithURL() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const tabIndex = tabParam ? parseInt(tabParam, 10) : 0;

  const handleTabSelect = (index: number) => {
    setSearchParams({ tab: index.toString() });
  };

  return (
    <TabsControlled
      variant="DEFAULT"
      selectedTab={tabIndex}
      onSelectTab={handleTabSelect}
      tabs={[
        { content: 'Profile' },
        { content: 'Settings' },
        { content: 'Notifications' },
      ]}
      content={[...]}
    />
  );
}
```

### Tabs with Form Validation

Navigate to tabs with validation errors:

```tsx
function FormTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  const handleSubmit = () => {
    const newErrors: Record<number, boolean> = {};

    // Validate each tab
    if (!validatePersonalInfo()) newErrors[0] = true;
    if (!validateAddress()) newErrors[1] = true;
    if (!validatePayment()) newErrors[2] = true;

    setErrors(newErrors);

    // Navigate to first tab with error
    const firstErrorTab = Object.keys(newErrors).find(
      (key) => newErrors[parseInt(key, 10)],
    );
    if (firstErrorTab) {
      setSelectedTab(parseInt(firstErrorTab, 10));
    }
  };

  return (
    <div>
      <TabsControlled
        variant="DEFAULT"
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
        tabs={[
          {
            content: errors[0] ? '❗ Personal Info' : 'Personal Info',
          },
          {
            content: errors[1] ? '❗ Address' : 'Address',
          },
          {
            content: errors[2] ? '❗ Payment' : 'Payment',
          },
        ]}
        content={[<PersonalInfoForm />, <AddressForm />, <PaymentForm />]}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

### Tabs with Badge Indicators

Show notifications or counts in tabs:

```tsx
function TabsWithBadges() {
  const [unreadMessages, setUnreadMessages] = useState(5);
  const [pendingTasks, setPendingTasks] = useState(3);

  return (
    <TabsUnControlled
      variant="DEFAULT"
      tabs={[
        { content: 'Dashboard' },
        {
          content: (
            <span>
              Messages
              {unreadMessages > 0 && (
                <Badge count={unreadMessages} />
              )}
            </span>
          ),
        },
        {
          content: (
            <span>
              Tasks
              {pendingTasks > 0 && (
                <Badge count={pendingTasks} />
              )}
            </span>
          ),
        },
      ]}
      content={[...]}
    />
  );
}
```

### Nested Tabs

Create hierarchical navigation with nested tabs:

```tsx
function NestedTabs() {
  return (
    <TabsUnControlled
      variant="DEFAULT"
      tabs={[
        { content: 'Overview' },
        { content: 'Data Analysis' },
        { content: 'Settings' },
      ]}
      content={[
        <div>Overview content</div>,
        <TabsUnControlled
          variant="DEFAULT"
          tabs={[
            { content: 'Charts' },
            { content: 'Tables' },
            { content: 'Reports' },
          ]}
          content={[<ChartsView />, <TablesView />, <ReportsView />]}
        />,
        <div>Settings content</div>,
      ]}
    />
  );
}
```

### Tabs with Keyboard Shortcuts

Add keyboard shortcuts for tab navigation:

```tsx
function TabsWithShortcuts() {
  const [selectedTab, setSelectedTab] = useState(0);
  const totalTabs = 4;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + number to switch tabs
      if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        setSelectedTab(parseInt(e.key, 10) - 1);
      }
      // Ctrl/Cmd + Arrow keys to navigate
      if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelectedTab(prev => (prev > 0 ? prev - 1 : totalTabs - 1));
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowRight') {
        e.preventDefault();
        setSelectedTab(prev => (prev < totalTabs - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TabsControlled
      variant="DEFAULT"
      selectedTab={selectedTab}
      onSelectTab={setSelectedTab}
      tabs={[
        { content: 'Tab 1 (Ctrl+1)' },
        { content: 'Tab 2 (Ctrl+2)' },
        { content: 'Tab 3 (Ctrl+3)' },
        { content: 'Tab 4 (Ctrl+4)' },
      ]}
      content={[...]}
    />
  );
}
```

## Props

### TabsUnControlledProps

| Prop                    | Type                      | Default     | Description                           |
| ----------------------- | ------------------------- | ----------- | ------------------------------------- |
| `variant`               | `string`                  | Required    | Visual variant of the tabs            |
| `tabs`                  | `TabsTabProps[]`          | Required    | Array of tab configurations           |
| `content`               | `ReactNode[]`             | Required    | Array of content for each tab         |
| `defaultSelectedTab`    | `number`                  | `0`         | Initially selected tab (zero-indexed) |
| `onSelectTab`           | `(tab: number) => void`   | `undefined` | Callback when a tab is selected       |
| `leftIcon`              | `ElementOrIconProps`      | `undefined` | Icon for left navigation control      |
| `rightIcon`             | `ElementOrIconProps`      | `undefined` | Icon for right navigation control     |
| `leftControlAriaLabel`  | `string`                  | `undefined` | ARIA label for left control           |
| `rightControlAriaLabel` | `string`                  | `undefined` | ARIA label for right control          |
| `maxTabsInView`         | `number`                  | `undefined` | Maximum tabs visible at once          |
| `minTabsInView`         | `number`                  | `undefined` | Minimum tabs visible at once          |
| `autoWidth`             | `boolean`                 | `false`     | Allow tabs to size based on content   |
| `unMountContent`        | `boolean`                 | `false`     | Unmount inactive tab content          |
| `hideLabelForSingleTab` | `boolean`                 | `false`     | Hide label when only one tab exists   |
| `allowFocusTabPanel`    | `boolean`                 | `false`     | Allow tab panel to receive focus      |
| `additionalClasses`     | `Partial<TabsCssClasses>` | `undefined` | Additional CSS classes                |
| `data-*`                | `string`                  | `undefined` | Data attributes for testing           |

### TabsControlledProps

Same as `TabsUnControlledProps`, but with:

| Prop          | Type                    | Default     | Description                         |
| ------------- | ----------------------- | ----------- | ----------------------------------- |
| `selectedTab` | `number`                | `undefined` | Currently selected tab (controlled) |
| `onSelectTab` | `(tab: number) => void` | Required    | Callback when a tab is selected     |

### TabsTabProps

| Prop         | Type        | Default     | Description                         |
| ------------ | ----------- | ----------- | ----------------------------------- |
| `content`    | `ReactNode` | Required    | Content to display in the tab label |
| `disabled`   | `boolean`   | `false`     | Whether the tab is disabled         |
| `aria-label` | `string`    | `undefined` | Accessible label for the tab        |

## Accessibility

- **Keyboard Navigation**: Full support for arrow keys, Home, End, Tab, and Enter
- **ARIA Roles**: Uses `tablist`, `tab`, and `tabpanel` roles
- **ARIA States**: Implements `aria-selected`, `aria-disabled`, `aria-controls`
- **Focus Management**: Proper focus indicators and keyboard focus management
- **Screen Readers**: Tab labels and controls are properly announced
- **ARIA Labels**: Support for custom labels on tabs and navigation controls
- **Disabled States**: Properly indicated with `aria-disabled`

### Keyboard Shortcuts

- **Arrow Left/Right**: Navigate between tabs
- **Home**: Go to first tab
- **End**: Go to last tab
- **Tab**: Move focus to tab panel content
- **Enter/Space**: Activate focused tab

## Best Practices

1. **Unique Content**: Each tab should have distinct, meaningful content
2. **Short Labels**: Keep tab labels concise and descriptive
3. **Loading States**: Show loading indicators for async content
4. **Error Handling**: Handle content loading errors gracefully
5. **Performance**: Use `unMountContent={true}` for tabs with heavy content
6. **Accessibility**: Always provide `aria-label` for disabled tabs
7. **Responsive Design**: Use `maxTabsInView` for many tabs on small screens
8. **State Management**: Use controlled tabs when tab state needs to be managed externally
9. **Navigation Controls**: Add left/right icons when tabs exceed visible area
10. **Unique Keys**: Use stable keys for dynamic tab content

## Common Use Cases

### Dashboard Navigation

Organize dashboard sections with tabs:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    { content: 'Overview' },
    { content: 'Analytics' },
    { content: 'Reports' },
    { content: 'Settings' },
  ]}
  content={[
    <OverviewDashboard />,
    <AnalyticsDashboard />,
    <ReportsDashboard />,
    <SettingsDashboard />,
  ]}
/>
```

### Profile Settings

Organize user settings into logical groups:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    { content: 'Profile' },
    { content: 'Account' },
    { content: 'Privacy' },
    { content: 'Notifications' },
  ]}
  content={[...]}
/>
```

### Multi-step Forms

Break long forms into manageable sections:

```tsx
<TabsControlled
  variant="DEFAULT"
  selectedTab={currentStep}
  onSelectTab={setCurrentStep}
  tabs={[
    { content: 'Personal Info' },
    { content: 'Address', disabled: !isStep1Complete },
    { content: 'Payment', disabled: !isStep2Complete },
  ]}
  content={[...]}
/>
```

### Product Details

Show different aspects of a product:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    { content: 'Description' },
    { content: 'Specifications' },
    { content: 'Reviews' },
    { content: 'Q&A' },
  ]}
  content={[...]}
/>
```

### Data Visualization

Switch between different views of data:

```tsx
<TabsUnControlled
  variant="DEFAULT"
  tabs={[{ content: 'Chart' }, { content: 'Table' }, { content: 'Map' }]}
  content={[
    <ChartView data={data} />,
    <TableView data={data} />,
    <MapView data={data} />,
  ]}
/>
```

## When to Use Tabs

Use Tabs when:

- Content can be logically grouped into distinct sections
- Users don't need to see all content simultaneously
- You want to reduce scrolling and page length
- Content sections are of equal importance
- Navigation between sections should be quick and easy

Don't use Tabs when:

- Content needs to be compared side-by-side
- Users need to see multiple sections at once
- Navigation flow is sequential (use a stepper instead)
- Only one or two sections exist (consider other layouts)
- Content is interdependent and needs simultaneous viewing

## Related Components

- **Accordion**: Alternative for vertical content organization
- **Stepper**: For sequential, step-by-step processes
- **Breadcrumbs**: For hierarchical navigation
- **Button**: For tab-like single actions
- **Link**: For navigation without tab structure

## Performance Considerations

- **Content Mounting**: Use `unMountContent={true}` to improve performance with heavy content
- **Lazy Loading**: Load tab content only when needed
- **Memoization**: Use `React.memo` for expensive tab content
- **Virtual Scrolling**: Consider for tabs with very large lists
- **Code Splitting**: Use dynamic imports for tab content bundles
- **Image Loading**: Lazy load images in inactive tabs

### Optimization Tips

```tsx
// Use unMountContent for heavy content
<TabsUnControlled
  variant="DEFAULT"
  unMountContent={true}
  tabs={[...]}
  content={[
    <HeavyComponent />,
    <ExpensiveChart />,
    <LargeDataTable />,
  ]}
/>

// Memoize expensive tab content
const MemoizedContent = React.memo(ExpensiveContent);

// Lazy load tab modules
const LazyTab = lazy(() => import('./LazyTabContent'));
```

## Styling Notes

- Tabs use CSS classes for styling defined in the design system
- `autoWidth` allows natural tab sizing based on content
- Active tabs have distinct visual styling
- Disabled tabs use reduced opacity and pointer-events
- Navigation controls appear when tabs exceed visible area
- Custom styling via `additionalClasses` prop

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper use of ARIA roles
- **2.1.1 Keyboard (Level A)**: Full keyboard navigation support
- **2.4.3 Focus Order (Level A)**: Logical focus order
- **2.4.7 Focus Visible (Level AA)**: Visible focus indicators
- **3.2.1 On Focus (Level A)**: No unexpected context changes
- **4.1.2 Name, Role, Value (Level A)**: Proper ARIA attributes

## Browser Support

Tabs component uses modern web standards with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with ARIA
- Keyboard Navigation: ✅ All modern browsers
- Touch Devices: ✅ Full support with swipe gestures (if implemented)
