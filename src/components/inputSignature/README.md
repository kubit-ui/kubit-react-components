# InputSignature

A canvas-based signature capture component that allows users to draw their signature with mouse or touch input. Features include automatic state management, clearing functionality, and export to data URL format.

## Features

- **Canvas Drawing**: Smooth signature drawing with mouse and touch support
- **State Management**: Automatic handling of active, filled, error, and disabled states
- **Reset Functionality**: Clear signature with exposed reset method
- **Data Export**: Converts signature to data URL for storage/transmission
- **Responsive**: Adapts to container size
- **Accessible**: Keyboard and screen reader support
- **Placeholder Support**: Show instructions when empty
- **Error Handling**: Display error states and messages
- **Touch Optimized**: Full support for touch devices

## Usage

### Basic InputSignature

```tsx
import { InputSignature } from '@/components/inputSignature';

function MyComponent() {
  const handleChange = (dataUrl: string) => {
    console.log('Signature data:', dataUrl);
  };

  return <InputSignature placeholder="Sign here" onChange={handleChange} />;
}
```

### With Ref for Reset

```tsx
import { useRef } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function MyComponent() {
  const signatureRef = useRef<InputSignatureCustomHandle>(null);

  const handleClear = () => {
    signatureRef.current?.reset();
  };

  return (
    <div>
      <InputSignature
        ref={signatureRef}
        placeholder="Sign here"
        onChange={(dataUrl) => console.log(dataUrl)}
      />
      <button onClick={handleClear}>Clear Signature</button>
    </div>
  );
}
```

### With Error State

```tsx
import { useState } from 'react';

import { InputSignature } from '@/components/inputSignature';

function MyComponent() {
  const [error, setError] = useState(false);

  const handleChange = (dataUrl: string) => {
    if (dataUrl.length < 100) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <InputSignature
      error={error}
      errorText="Signature is too short"
      placeholder="Sign here"
      onChange={handleChange}
    />
  );
}
```

### Disabled State

```tsx
import { InputSignature } from '@/components/inputSignature';

function MyComponent() {
  return <InputSignature disabled placeholder="Signature disabled" />;
}
```

### With Variant

```tsx
import { InputSignature } from '@/components/inputSignature';

function MyComponent() {
  return (
    <InputSignature
      placeholder="Sign here"
      variant="PRIMARY"
      onChange={(dataUrl) => console.log(dataUrl)}
    />
  );
}
```

## Props

### InputSignatureUnControlledProps

| Property            | Type                                | Description                      | Required | Default |
| ------------------- | ----------------------------------- | -------------------------------- | -------- | ------- |
| `placeholder`       | `string \| CommonTextProps`         | Placeholder text/config          | Yes      | -       |
| `errorText`         | `string \| CommonTextProps`         | Error message text/config        | No       | -       |
| `variant`           | `string`                            | Visual style variant             | No       | -       |
| `disabled`          | `boolean`                           | Disables signature input         | No       | `false` |
| `error`             | `boolean`                           | Shows error state                | No       | `false` |
| `onChange`          | `(dataUrl: string) => void`         | Callback with signature data URL | No       | -       |
| `additionalClasses` | `Partial<InputSignatureCssClasses>` | Custom CSS classes               | No       | -       |

### InputSignatureCustomHandle

The ref exposes these methods:

| Property         | Type             | Description                 |
| ---------------- | ---------------- | --------------------------- |
| `InputSignature` | `HTMLDivElement` | The container element       |
| `reset`          | `() => void`     | Clears the signature canvas |

### CommonTextProps

```typescript
type CommonTextProps =
  | string
  | {
      content: string;
      // Additional text styling props
    };
```

## Common Patterns

### Form Integration

```tsx
import { useRef, useState } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function SignatureForm() {
  const [signatureData, setSignatureData] = useState<string>('');
  const signatureRef = useRef<InputSignatureCustomHandle>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting signature:', signatureData);
  };

  const handleReset = () => {
    signatureRef.current?.reset();
    setSignatureData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Your Signature</label>
      <InputSignature
        ref={signatureRef}
        placeholder="Sign here"
        onChange={setSignatureData}
      />
      <div>
        <button type="submit" disabled={!signatureData}>
          Submit
        </button>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
      </div>
    </form>
  );
}
```

### Validation

```tsx
import { useRef, useState } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function ValidatedSignature() {
  const [signature, setSignature] = useState('');
  const [error, setError] = useState(false);
  const signatureRef = useRef<InputSignatureCustomHandle>(null);

  const validateSignature = (dataUrl: string) => {
    // Simple validation: check if signature has content
    const hasContent = dataUrl.length > 1000; // Minimum size
    setError(!hasContent);
    return hasContent;
  };

  const handleChange = (dataUrl: string) => {
    setSignature(dataUrl);
    validateSignature(dataUrl);
  };

  const handleRetry = () => {
    signatureRef.current?.reset();
    setSignature('');
    setError(false);
  };

  return (
    <div>
      <InputSignature
        ref={signatureRef}
        error={error}
        errorText="Please provide a valid signature"
        placeholder="Sign here"
        onChange={handleChange}
      />
      {error && <button onClick={handleRetry}>Try Again</button>}
    </div>
  );
}
```

### Multi-step Form

```tsx
import { useRef, useState } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [signatures, setSignatures] = useState({
    initial: '',
    confirmation: '',
  });
  const initialRef = useRef<InputSignatureCustomHandle>(null);
  const confirmRef = useRef<InputSignatureCustomHandle>(null);

  const handleNext = () => {
    if (step === 1 && signatures.initial) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Initial Signature</h2>
          <InputSignature
            ref={initialRef}
            placeholder="Sign here"
            onChange={(dataUrl) =>
              setSignatures((prev) => ({ ...prev, initial: dataUrl }))
            }
          />
          <button onClick={handleNext} disabled={!signatures.initial}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Confirm Signature</h2>
          <InputSignature
            ref={confirmRef}
            placeholder="Sign again to confirm"
            onChange={(dataUrl) =>
              setSignatures((prev) => ({ ...prev, confirmation: dataUrl }))
            }
          />
          <button onClick={handleBack}>Back</button>
          <button disabled={!signatures.confirmation}>Submit</button>
        </div>
      )}
    </div>
  );
}
```

### Preview Signature

```tsx
import { useRef, useState } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function SignatureWithPreview() {
  const [signature, setSignature] = useState('');
  const signatureRef = useRef<InputSignatureCustomHandle>(null);

  const handleClear = () => {
    signatureRef.current?.reset();
    setSignature('');
  };

  return (
    <div>
      <div>
        <label>Draw your signature:</label>
        <InputSignature
          ref={signatureRef}
          placeholder="Sign here"
          onChange={setSignature}
        />
      </div>
      {signature && (
        <div>
          <h3>Preview:</h3>
          <img
            alt="Signature preview"
            src={signature}
            style={{ border: '1px solid #ccc', maxWidth: '300px' }}
          />
          <button onClick={handleClear}>Clear</button>
        </div>
      )}
    </div>
  );
}
```

### Agreement Form

```tsx
import { useRef, useState } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function AgreementForm() {
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState('');
  const signatureRef = useRef<InputSignatureCustomHandle>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && signature) {
      console.log('Agreement signed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Terms and Conditions</h2>
        <p>Please read and agree to the terms...</p>
      </div>
      <label>
        <input
          checked={agreed}
          type="checkbox"
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
      <div>
        <label>Signature:</label>
        <InputSignature
          ref={signatureRef}
          disabled={!agreed}
          placeholder={agreed ? 'Sign here' : 'Please agree first'}
          onChange={setSignature}
        />
      </div>
      <button type="submit" disabled={!agreed || !signature}>
        Submit Agreement
      </button>
    </form>
  );
}
```

### Save and Load

```tsx
import { useEffect, useRef, useState } from 'react';

import { InputSignature } from '@/components/inputSignature';
import type { InputSignatureCustomHandle } from '@/components/inputSignature/types/inputSignature';

function SaveableSignature() {
  const [signature, setSignature] = useState('');
  const signatureRef = useRef<InputSignatureCustomHandle>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('signature');
    if (saved) {
      setSignature(saved);
    }
  }, []);

  const handleSave = () => {
    if (signature) {
      localStorage.setItem('signature', signature);
      alert('Signature saved!');
    }
  };

  const handleClear = () => {
    signatureRef.current?.reset();
    setSignature('');
    localStorage.removeItem('signature');
  };

  return (
    <div>
      <InputSignature
        ref={signatureRef}
        placeholder="Sign here"
        onChange={setSignature}
      />
      {signature && (
        <img
          alt="Saved signature"
          src={signature}
          style={{ maxWidth: '200px' }}
        />
      )}
      <div>
        <button onClick={handleSave} disabled={!signature}>
          Save Signature
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
```

## Accessibility

### Keyboard Navigation

```tsx
// Component is keyboard accessible
<InputSignature
  placeholder="Sign here (press Enter to focus)"
  onChange={(dataUrl) => console.log(dataUrl)}
/>
```

### Screen Reader Support

```tsx
// Provide descriptive text
<InputSignature
  aria-label="Signature input field"
  placeholder="Draw your signature here"
  onChange={(dataUrl) => console.log(dataUrl)}
/>
```

### Error Announcements

```tsx
// Error text is announced to screen readers
<InputSignature
  aria-invalid={true}
  error={true}
  errorText="Signature is required"
  placeholder="Sign here"
/>
```

## Best Practices

### 1. Always Provide Clear Instructions

```tsx
// ✅ Good - Clear placeholder
<InputSignature
  placeholder="Sign your full name here"
  onChange={handleChange}
/>

// ❌ Bad - Vague placeholder
<InputSignature
  placeholder="Sign"
  onChange={handleChange}
/>
```

### 2. Handle Validation Properly

```tsx
// ✅ Good - Validate and show errors
const handleChange = (dataUrl: string) => {
  const isValid = dataUrl.length > 1000;
  setError(!isValid);
};

<InputSignature
  error={error}
  errorText="Signature is too small. Please sign clearly."
  placeholder="Sign here"
  onChange={handleChange}
/>;
```

### 3. Provide Clear Actions

```tsx
// ✅ Good - Clear and reset options
<div>
  <InputSignature ref={ref} placeholder="Sign here" />
  <button onClick={() => ref.current?.reset()}>Clear</button>
  <button onClick={handleSubmit}>Submit</button>
</div>
```

### 4. Store Signatures Securely

```tsx
// ✅ Good - Send to secure backend
const handleChange = async (dataUrl: string) => {
  await fetch('/api/signatures', {
    method: 'POST',
    body: JSON.stringify({ signature: dataUrl }),
    headers: { 'Content-Type': 'application/json' },
  });
};

// ❌ Bad - Store sensitive data in localStorage without encryption
localStorage.setItem('signature', dataUrl);
```

### 5. Provide Visual Feedback

```tsx
// ✅ Good - Show preview and confirmation
{
  signature && (
    <div>
      <p>Preview:</p>
      <img src={signature} alt="Signature preview" />
      <p>✓ Signature captured</p>
    </div>
  );
}
```

### 6. Handle Disabled State Clearly

```tsx
// ✅ Good - Clear disabled message
<InputSignature
  disabled={!termsAgreed}
  placeholder={termsAgreed ? 'Sign here' : 'Please agree to terms first'}
/>
```

## Performance Considerations

### Canvas Optimization

The component automatically optimizes canvas rendering for smooth drawing performance.

### Data URL Size

Signature data URLs can be large. Consider:

```tsx
// Compress or convert to smaller format before storing
const handleChange = async (dataUrl: string) => {
  // Convert to smaller format or compress
  const compressed = await compressImage(dataUrl);
  setSignature(compressed);
};
```

## Testing

### Basic Rendering

```tsx
import { render, screen } from '@testing-library/react';

import { InputSignature } from './inputSignature';

test('renders signature input', () => {
  render(<InputSignature placeholder="Sign here" />);

  expect(screen.getByTestId('input-signature')).toBeInTheDocument();
  expect(screen.getByText('Sign here')).toBeInTheDocument();
});
```

### Canvas Rendering

```tsx
test('renders canvas element', () => {
  render(<InputSignature placeholder="Sign here" />);

  const canvas = screen.getByTestId('input-signature-canvas');
  expect(canvas).toBeInTheDocument();
  expect(canvas.tagName).toBe('CANVAS');
});
```

### Reset Functionality

```tsx
import { useRef } from 'react';

import { render } from '@testing-library/react';

import { InputSignature } from './inputSignature';

test('reset clears signature', () => {
  const TestComponent = () => {
    const ref = useRef<InputSignatureCustomHandle>(null);
    return (
      <div>
        <InputSignature ref={ref} placeholder="Sign" />
        <button onClick={() => ref.current?.reset()}>Clear</button>
      </div>
    );
  };

  render(<TestComponent />);
  // Test reset functionality
});
```

### Error State

```tsx
test('displays error state and message', () => {
  render(
    <InputSignature
      error={true}
      errorText="Invalid signature"
      placeholder="Sign here"
    />,
  );

  expect(screen.getByText('Invalid signature')).toBeInTheDocument();
});
```

### Accessibility

```tsx
import { axe } from 'jest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(<InputSignature placeholder="Sign here" />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Related Components

- **Input**: Text input component
- **TextArea**: Multi-line text input

## Notes

- Uses HTML5 Canvas for drawing
- Exports signature as base64 data URL
- Supports both mouse and touch events
- Automatically manages drawing state
- Canvas size adapts to container
- Use `ref` to access reset functionality
- CommonTextProps can be a string or object with styling
