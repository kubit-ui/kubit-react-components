# StepperNumber

The StepperNumber component displays a sequence of numbered steps to guide users through a multi-step process. It provides visual feedback about completed, current, and upcoming steps, with support for both horizontal and vertical layouts.

## Installation

```bash
npm install @kubit/react-components
```

## Usage

```tsx
import { StepperNumber } from '@kubit/react-components';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <StepperNumber
      variant="DEFAULT"
      orientation="vertical"
      currentStep={currentStep}
      steps={[
        {
          name: 'Personal Information',
          'aria-label': 'Step 1: Personal Information',
        },
        { name: 'Address Details', 'aria-label': 'Step 2: Address Details' },
        { name: 'Review & Submit', 'aria-label': 'Step 3: Review and Submit' },
      ]}
      completedStepIcon={{ icon: 'check' }}
    />
  );
}
```

## Props

### StepperNumberProps

| Prop                           | Type                                 | Default      | Description                                    |
| ------------------------------ | ------------------------------------ | ------------ | ---------------------------------------------- |
| `variant`                      | `'DEFAULT' \| 'ALTERNATIVE'`         | `'DEFAULT'`  | Visual variant of the stepper                  |
| `orientation`                  | `'horizontal' \| 'vertical'`         | `'vertical'` | Layout direction of the steps                  |
| `steps`                        | `Steps[]`                            | `[]`         | Array of step objects with name and aria-label |
| `currentStep`                  | `number`                             | `0`          | Index of the currently active step (0-based)   |
| `completedStepIcon`            | `ElementOrIconProps`                 | -            | Icon to display for completed steps            |
| `horizontalOrientationWidth`   | `string`                             | `'5.75rem'`  | Width of each step in horizontal mode          |
| `stepMaxTruncatedLines`        | `number`                             | -            | Maximum lines before truncating step text      |
| `screenReaderTitle`            | `StepperNumberScreenReaderTextProps` | -            | Screen reader title for the stepper            |
| `screenReaderCompletedStep`    | `StepperNumberScreenReaderTextProps` | -            | Screen reader text for completed steps         |
| `screenReaderTextBuilder`      | `StepperNumberprefixSuffixProps`     | -            | Text builder for screen reader announcements   |
| `additionalVariantClasses`     | `Partial<StepperNumberCssClasses>`   | -            | Additional CSS classes for variant styling     |
| `additionalOrientationClasses` | `Partial<StepperNumberCssClasses>`   | -            | Additional CSS classes for orientation styling |
| `data-*`                       | `DataAttributes`                     | -            | Data attributes for testing and analytics      |

### Steps

```typescript
interface Steps {
  name: string; // Display name of the step
  'aria-label'?: string; // Accessible label for screen readers
}
```

### StepperNumberScreenReaderTextProps

```typescript
interface StepperNumberScreenReaderTextProps {
  content?: string; // Text content for screen readers
  component?: React.ElementType; // HTML component to render (e.g., 'span', 'div')
}
```

## Step States

The component automatically manages four states based on the `currentStep` prop:

- **Completed**: Steps before the current step (index < currentStep)
- **Active**: The current step (index === currentStep)
- **Inactive**: Steps after the current step (index > currentStep)
- **Default**: Initial state before interaction

## Variants

### DEFAULT

Standard stepper design with clear step indicators and connecting lines.

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="vertical"
  currentStep={1}
  steps={[{ name: 'Step 1' }, { name: 'Step 2' }, { name: 'Step 3' }]}
/>
```

### ALTERNATIVE

Alternative visual style for the stepper with different colors or layout.

```tsx
<StepperNumber
  variant="ALTERNATIVE"
  orientation="vertical"
  currentStep={1}
  steps={[{ name: 'Step 1' }, { name: 'Step 2' }, { name: 'Step 3' }]}
/>
```

## Orientation

### Vertical (Default)

Steps are displayed in a vertical list, ideal for sidebars or narrow layouts.

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="vertical"
  currentStep={1}
  steps={[
    { name: 'Personal Information' },
    { name: 'Contact Details' },
    { name: 'Confirmation' },
  ]}
/>
```

### Horizontal

Steps are displayed horizontally, suitable for top navigation or wizards.

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="horizontal"
  horizontalOrientationWidth="150px"
  currentStep={1}
  steps={[{ name: 'Account' }, { name: 'Profile' }, { name: 'Settings' }]}
/>
```

## Features

### Completed Step Icon

Customize the icon shown for completed steps:

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="vertical"
  currentStep={2}
  steps={[{ name: 'Step 1' }, { name: 'Step 2' }, { name: 'Step 3' }]}
  completedStepIcon={{
    icon: 'check-circle',
    altText: 'Completed',
  }}
/>
```

### Step Text Truncation

Control how long step names are displayed:

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="vertical"
  currentStep={0}
  stepMaxTruncatedLines={2}
  steps={[
    { name: 'This is a very long step name that might need truncation' },
    { name: 'Another long step description' },
    { name: 'Final step' },
  ]}
/>
```

### Horizontal Width Control

Set custom width for horizontal steps:

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="horizontal"
  horizontalOrientationWidth="200px"
  currentStep={1}
  steps={[
    { name: 'Wide Step 1' },
    { name: 'Wide Step 2' },
    { name: 'Wide Step 3' },
  ]}
/>
```

## Examples

### Basic Vertical Stepper

Simple vertical stepper with 3 steps:

```tsx
function VerticalStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>
      <StepperNumber
        variant="DEFAULT"
        orientation="vertical"
        currentStep={currentStep}
        steps={[
          {
            name: 'Personal Information',
            'aria-label': 'Step 1: Personal Information',
          },
          {
            name: 'Address Details',
            'aria-label': 'Step 2: Address Details',
          },
          {
            name: 'Review & Submit',
            'aria-label': 'Step 3: Review and Submit',
          },
        ]}
        completedStepIcon={{ icon: 'check' }}
        screenReaderTitle={{ content: 'Registration Progress' }}
        screenReaderCompletedStep={{ content: 'Completed' }}
      />

      <button onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 2))}>
        Next Step
      </button>
      <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}>
        Previous Step
      </button>
    </div>
  );
}
```

### Horizontal Stepper

Stepper displayed horizontally across the top:

```tsx
function HorizontalStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>
      <StepperNumber
        variant="DEFAULT"
        orientation="horizontal"
        horizontalOrientationWidth="180px"
        currentStep={currentStep}
        steps={[
          { name: 'Cart', 'aria-label': 'Step 1: Shopping Cart' },
          { name: 'Shipping', 'aria-label': 'Step 2: Shipping Information' },
          { name: 'Payment', 'aria-label': 'Step 3: Payment Details' },
          { name: 'Confirmation', 'aria-label': 'Step 4: Order Confirmation' },
        ]}
        completedStepIcon={{ icon: 'check-circle' }}
      />

      {/* Step content here */}
    </div>
  );
}
```

### Multi-Step Form

Complete form with stepper navigation:

```tsx
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {},
    contact: {},
    preferences: {},
  });

  const steps = [
    { name: 'Personal Info', 'aria-label': 'Step 1: Personal Information' },
    { name: 'Contact Info', 'aria-label': 'Step 2: Contact Information' },
    { name: 'Preferences', 'aria-label': 'Step 3: User Preferences' },
    { name: 'Review', 'aria-label': 'Step 4: Review Your Information' },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <aside style={{ width: '250px' }}>
        <StepperNumber
          variant="DEFAULT"
          orientation="vertical"
          currentStep={currentStep}
          steps={steps}
          completedStepIcon={{ icon: 'check' }}
          screenReaderTitle={{ content: 'Form Progress' }}
          screenReaderCompletedStep={{ content: 'Completed' }}
        />
      </aside>

      <main style={{ flex: 1 }}>
        {currentStep === 0 && <PersonalInfoForm />}
        {currentStep === 1 && <ContactInfoForm />}
        {currentStep === 2 && <PreferencesForm />}
        {currentStep === 3 && <ReviewForm />}

        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <button onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </button>
          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </main>
    </div>
  );
}
```

### Registration Flow

User registration with validation per step:

```tsx
function RegistrationStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { name: 'Account Setup', 'aria-label': 'Step 1: Account Setup' },
    { name: 'Profile Details', 'aria-label': 'Step 2: Profile Details' },
    { name: 'Verification', 'aria-label': 'Step 3: Email Verification' },
    { name: 'Complete', 'aria-label': 'Step 4: Registration Complete' },
  ];

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <h1>User Registration</h1>

      <StepperNumber
        variant="DEFAULT"
        orientation="horizontal"
        horizontalOrientationWidth="200px"
        currentStep={currentStep}
        steps={steps}
        completedStepIcon={{ icon: 'check-circle' }}
        screenReaderTitle={{ content: 'Registration Progress' }}
        screenReaderCompletedStep={{ content: 'Step Completed' }}
      />

      <div style={{ marginTop: '32px' }}>
        {/* Step content with validation */}
        <button onClick={handleStepComplete}>
          {currentStep < steps.length - 1 ? 'Continue' : 'Finish'}
        </button>
      </div>
    </div>
  );
}
```

### Checkout Process

E-commerce checkout stepper:

```tsx
function CheckoutStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: 'Cart Review', 'aria-label': 'Step 1: Review Your Cart' },
    {
      name: 'Shipping Address',
      'aria-label': 'Step 2: Enter Shipping Address',
    },
    { name: 'Delivery Method', 'aria-label': 'Step 3: Choose Delivery Method' },
    { name: 'Payment', 'aria-label': 'Step 4: Enter Payment Information' },
    { name: 'Confirmation', 'aria-label': 'Step 5: Order Confirmation' },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <h1>Checkout</h1>

      <StepperNumber
        variant="DEFAULT"
        orientation="horizontal"
        horizontalOrientationWidth="140px"
        currentStep={currentStep}
        steps={steps}
        completedStepIcon={{ icon: 'check' }}
      />

      {/* Checkout form sections */}
    </div>
  );
}
```

### Onboarding Wizard

User onboarding with tutorial steps:

```tsx
function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: 'Welcome', 'aria-label': 'Step 1: Welcome to the Platform' },
    { name: 'Setup Profile', 'aria-label': 'Step 2: Setup Your Profile' },
    { name: 'Connect Services', 'aria-label': 'Step 3: Connect Your Services' },
    { name: 'Tutorial', 'aria-label': 'Step 4: Take the Tutorial' },
    { name: 'Get Started', 'aria-label': 'Step 5: Get Started' },
  ];

  const handleSkip = () => {
    setCurrentStep(steps.length - 1);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside
        style={{
          width: '300px',
          padding: '24px',
          background: '#f5f5f5',
        }}
      >
        <h2>Onboarding</h2>
        <StepperNumber
          variant="DEFAULT"
          orientation="vertical"
          currentStep={currentStep}
          steps={steps}
          completedStepIcon={{ icon: 'check-circle' }}
          screenReaderTitle={{ content: 'Onboarding Progress' }}
          screenReaderCompletedStep={{ content: 'Completed' }}
        />
        <button onClick={handleSkip}>Skip Tutorial</button>
      </aside>

      <main style={{ flex: 1, padding: '24px' }}>
        {/* Onboarding content */}
      </main>
    </div>
  );
}
```

### Alternative Variant

Using the alternative visual style:

```tsx
function AlternativeStepper() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepperNumber
      variant="ALTERNATIVE"
      orientation="vertical"
      currentStep={currentStep}
      steps={[
        { name: 'Getting Started', 'aria-label': 'Step 1: Getting Started' },
        { name: 'Configuration', 'aria-label': 'Step 2: Configuration' },
        { name: 'Testing', 'aria-label': 'Step 3: Testing' },
        { name: 'Deployment', 'aria-label': 'Step 4: Deployment' },
      ]}
      completedStepIcon={{ icon: 'check' }}
    />
  );
}
```

### Long Step Names

Handling long step descriptions:

```tsx
function LongStepNames() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <StepperNumber
      variant="DEFAULT"
      orientation="vertical"
      currentStep={currentStep}
      stepMaxTruncatedLines={2}
      steps={[
        {
          name: 'Complete Your Personal Information and Identity Verification',
          'aria-label':
            'Step 1: Complete Your Personal Information and Identity Verification',
        },
        {
          name: 'Review and Accept Terms of Service and Privacy Policy',
          'aria-label':
            'Step 2: Review and Accept Terms of Service and Privacy Policy',
        },
        {
          name: 'Setup Two-Factor Authentication and Security Preferences',
          'aria-label':
            'Step 3: Setup Two-Factor Authentication and Security Preferences',
        },
      ]}
      completedStepIcon={{ icon: 'check' }}
    />
  );
}
```

### Many Steps

Stepper with many steps (scrollable):

```tsx
function ManySteps() {
  const [currentStep, setCurrentStep] = useState(3);

  const steps = Array.from({ length: 10 }, (_, i) => ({
    name: `Step ${i + 1}`,
    'aria-label': `Step ${i + 1} of 10`,
  }));

  return (
    <div style={{ maxHeight: '400px', overflow: 'auto' }}>
      <StepperNumber
        variant="DEFAULT"
        orientation="vertical"
        currentStep={currentStep}
        steps={steps}
        completedStepIcon={{ icon: 'check' }}
      />
    </div>
  );
}
```

### Non-Linear Navigation

Allow jumping between steps:

```tsx
function NonLinearStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState<number[]>([0]);

  const steps = [
    { name: 'Personal Info' },
    { name: 'Address' },
    { name: 'Preferences' },
    { name: 'Review' },
  ];

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    if (!visitedSteps.includes(index)) {
      setVisitedSteps([...visitedSteps, index]);
    }
  };

  return (
    <div>
      <StepperNumber
        variant="DEFAULT"
        orientation="horizontal"
        horizontalOrientationWidth="150px"
        currentStep={currentStep}
        steps={steps}
        completedStepIcon={{ icon: 'check' }}
      />

      {/* Allow clicking on any visited step */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => handleStepClick(index)}
            disabled={!visitedSteps.includes(index) && index > currentStep}
          >
            {step.name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## Accessibility

### ARIA Labels

Provide clear ARIA labels for each step:

```tsx
<StepperNumber
  variant="DEFAULT"
  orientation="vertical"
  currentStep={1}
  steps={[
    {
      name: 'Account',
      'aria-label': 'Step 1 of 3: Create your account',
    },
    {
      name: 'Profile',
      'aria-label': 'Step 2 of 3: Complete your profile',
    },
    {
      name: 'Finish',
      'aria-label': 'Step 3 of 3: Finish setup',
    },
  ]}
  screenReaderTitle={{
    content: 'Account Setup Progress',
    component: 'h2',
  }}
  screenReaderCompletedStep={{
    content: 'Completed',
    component: 'span',
  }}
/>
```

### Screen Reader Support

- Each step has an accessible label
- Completed steps are announced to screen readers
- Current step is clearly identified
- Progress is communicated through aria attributes

### Keyboard Navigation

The stepper is primarily for visual feedback, not direct keyboard interaction. Navigation should be handled by the form controls within each step.

## Best Practices

### Step Count

- **3-5 steps**: Ideal for most processes
- **6-7 steps**: Consider grouping related steps
- **8+ steps**: May be overwhelming; consider splitting into sections

### Step Names

- **Be concise**: Keep step names short (2-3 words)
- **Be descriptive**: Clearly indicate what each step contains
- **Use active language**: "Enter Information" vs "Information"
- **Maintain consistency**: Use similar patterns across steps

### Progress Indication

- Always show total number of steps
- Clearly mark completed, current, and upcoming steps
- Use icons for completed steps
- Consider progress percentage for many steps

### Layout Choice

- **Vertical**: Better for sidebars, detailed step names, many steps
- **Horizontal**: Better for top navigation, simple processes, few steps
- **Responsive**: Consider switching orientation on mobile

### Navigation

- Allow moving forward only after validation
- Consider allowing backward navigation
- Disable/hide steps that aren't accessible yet
- Provide "Save & Exit" for long processes

## Notes

- The component is controlled via the `currentStep` prop
- Step indices are 0-based (first step is 0)
- Steps before currentStep are marked as completed
- Steps after currentStep are marked as inactive
- The completedStepIcon replaces the step number for completed steps
- Orientation can be changed dynamically
- Step text can be truncated if too long

## Related Components

- **Tabs**: For switching between parallel content sections
- **Breadcrumb**: For showing navigation hierarchy
- **ProgressBar**: For showing completion percentage
- **Wizard**: Complete wizard pattern with built-in navigation
