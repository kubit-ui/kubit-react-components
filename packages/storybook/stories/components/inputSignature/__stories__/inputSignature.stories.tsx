import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  InputSignature,
  type InputSignatureCustomHandle,
} from '@kubit-ui-web/react-components';
import { useRef } from 'react';

import { argtypes } from './argTypes';

const meta = {
  argTypes: argtypes(),
  component: InputSignature,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputSignature',
    layout: 'centered',
  },
  tags: ['forms'],
  title: 'Components/Forms/InputSignature',
} satisfies Meta<typeof InputSignature>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  placeholder: 'Sign here',
};

// @ts-expect-error - state is managed internally
export const Basic: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Sign here"
  onChange={(dataUrl) => console.log(dataUrl)}
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithOnChange: StoryType = {
  args: {
    ...commonArgs,
    onChange: (dataUrl: string) => {
      // eslint-disable-next-line no-console
      console.log('Signature data URL:', dataUrl);
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Sign here"
  onChange={(dataUrl) => {
    console.log('Signature data URL:', dataUrl);
  }}
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithError: StoryType = {
  args: {
    ...commonArgs,
    error: true,
    errorText: 'Invalid signature',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Sign here"
  error={true}
  errorText="Invalid signature"
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const Disabled: StoryType = {
  args: {
    ...commonArgs,
    disabled: true,
    placeholder: 'Signature disabled',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Signature disabled"
  disabled={true}
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithVariant: StoryType = {
  args: {
    ...commonArgs,
    variant: 'PRIMARY',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Sign here"
  variant="PRIMARY"
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithCustomPlaceholder: StoryType = {
  args: {
    placeholder: 'Please draw your signature in the box above',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Please draw your signature in the box above"
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithComplexPlaceholder: StoryType = {
  args: {
    placeholder: {
      content: 'Sign your full name here',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder={{
    content: 'Sign your full name here',
  }}
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithComplexErrorText: StoryType = {
  args: {
    error: true,
    errorText: {
      content: 'Signature is required to proceed',
    },
    placeholder: 'Sign here',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputSignature
  placeholder="Sign here"
  error={true}
  errorText={{
    content: 'Signature is required to proceed',
  }}
/>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithRef: StoryType = {
  args: {
    placeholder: 'Sign here',
  },
  parameters: {
    docs: {
      source: {
        code: `const signatureRef = useRef<InputSignatureCustomHandle>(null);

const handleClear = () => {
  signatureRef.current?.reset();
};

<div>
  <InputSignature
    ref={signatureRef}
    placeholder="Sign here"
  />
  <button onClick={handleClear}>Clear Signature</button>
</div>`,
      },
    },
  },
  render: (args) => {
    const signatureRef = useRef<InputSignatureCustomHandle>(null);

    const handleClear = () => {
      signatureRef.current?.reset();
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <InputSignature ref={signatureRef} {...args} />
        <button
          style={{
            background: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            padding: '8px 16px',
          }}
          onClick={handleClear}
        >
          Clear Signature
        </button>
      </div>
    );
  },
};

// @ts-expect-error - state is managed internally
export const FormExample: StoryType = {
  args: {
    placeholder: 'Sign to agree',
  },
  parameters: {
    docs: {
      source: {
        code: `const [signature, setSignature] = useState('');
const signatureRef = useRef<InputSignatureCustomHandle>(null);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Signature submitted:', signature);
};

const handleReset = () => {
  signatureRef.current?.reset();
  setSignature('');
};

<form onSubmit={handleSubmit}>
  <label>Your Signature</label>
  <InputSignature
    ref={signatureRef}
    placeholder="Sign to agree"
    onChange={setSignature}
  />
  <div>
    <button type="submit" disabled={!signature}>
      Submit
    </button>
    <button type="button" onClick={handleReset}>
      Clear
    </button>
  </div>
</form>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const WithPreview: StoryType = {
  args: {
    placeholder: 'Draw your signature',
  },
  parameters: {
    docs: {
      source: {
        code: `const [signature, setSignature] = useState('');
const signatureRef = useRef<InputSignatureCustomHandle>(null);

const handleClear = () => {
  signatureRef.current?.reset();
  setSignature('');
};

<div>
  <InputSignature
    ref={signatureRef}
    placeholder="Draw your signature"
    onChange={setSignature}
  />
  {signature && (
    <div>
      <h3>Preview:</h3>
      <img
        src={signature}
        alt="Signature preview"
        style={{ border: '1px solid #ccc', maxWidth: '300px' }}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  )}
</div>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const ValidationExample: StoryType = {
  args: {
    placeholder: 'Sign here',
  },
  parameters: {
    docs: {
      source: {
        code: `const [signature, setSignature] = useState('');
const [error, setError] = useState(false);
const signatureRef = useRef<InputSignatureCustomHandle>(null);

const validateSignature = (dataUrl: string) => {
  const hasContent = dataUrl.length > 1000;
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

<div>
  <InputSignature
    ref={signatureRef}
    placeholder="Sign here"
    error={error}
    errorText="Please provide a valid signature"
    onChange={handleChange}
  />
  {error && (
    <button onClick={handleRetry}>Try Again</button>
  )}
</div>`,
      },
    },
  },
};

// @ts-expect-error - state is managed internally
export const AgreementExample: StoryType = {
  args: {
    placeholder: 'Sign to confirm agreement',
  },
  parameters: {
    docs: {
      source: {
        code: `const [agreed, setAgreed] = useState(false);
const [signature, setSignature] = useState('');
const signatureRef = useRef<InputSignatureCustomHandle>(null);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (agreed && signature) {
    console.log('Agreement signed');
  }
};

<form onSubmit={handleSubmit}>
  <h2>Terms and Conditions</h2>
  <p>Please read and agree to the terms...</p>

  <label>
    <input
      type="checkbox"
      checked={agreed}
      onChange={(e) => setAgreed(e.target.checked)}
    />
    I agree to the terms and conditions
  </label>

  <label>Signature:</label>
  <InputSignature
    ref={signatureRef}
    placeholder={agreed ? 'Sign here' : 'Please agree first'}
    disabled={!agreed}
    onChange={setSignature}
  />

  <button type="submit" disabled={!agreed || !signature}>
    Submit Agreement
  </button>
</form>`,
      },
    },
  },
};
