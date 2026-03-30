import type { Meta, StoryObj } from '@storybook/react';

import { VirtualKeyboard as VirtualKeyboardComponent } from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { ICONS } from '@/stories/assets/icons/icons';

const meta = {
  component: VirtualKeyboardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Forms/VirtualKeyboard',
} satisfies Meta<typeof VirtualKeyboardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Stories use render function instead of args
export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Basic virtual keyboard with shuffled digits for secure PIN entry.',
      },
      source: {
        code: `const [pin, setPin] = useState('');

<VirtualKeyboard
  variant='DEFAULT'
  digits={['0', '4', '2', '8', '7', '3', '9', '1', '6', '5']}
  icon={{ icon: ICONS.PLACEHOLDER }}
  onDigitButtonClick={(digit) => setPin(pin + digit)}
  onRemoveButtonClick={() => setPin(pin.slice(0, -1))}
/>`,
      },
    },
  },
  render: () => {
    const [pin, setPin] = useState('');

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
            PIN: {pin.replace(/./g, '•')}
          </div>
        </div>
        <VirtualKeyboardComponent
          digits={['0', '4', '2', '8', '7', '3', '9', '1', '6', '5']}
          icon={{ icon: ICONS.PLACEHOLDER }}
          variant="DEFAULT"
          onDigitButtonClick={(digit: string) => setPin(pin + digit)}
          onRemoveButtonClick={() => setPin(pin.slice(0, -1))}
        />
      </div>
    );
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Stories use render function instead of args
export const WithCustomIcon: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Virtual keyboard with custom icon for the delete button.',
      },
      source: {
        code: `<VirtualKeyboard
  variant='DEFAULT'
  digits={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']}
  icon={{ icon: ICONS.CLOSE }}
  onDigitButtonClick={(digit) => handleDigitClick(digit)}
  onRemoveButtonClick={() => handleRemove()}
/>`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: '14px' }}>Value: {value}</div>
        </div>
        <VirtualKeyboardComponent
          digits={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']}
          icon={{ icon: ICONS.CLOSE }}
          variant="DEFAULT"
          onDigitButtonClick={(digit: string) => setValue(value + digit)}
          onRemoveButtonClick={() => setValue(value.slice(0, -1))}
        />
      </div>
    );
  },
};

export const ShuffledDigits: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Virtual keyboard with randomly shuffled digits for enhanced security.',
      },
      source: {
        code: `const shuffleDigits = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const [digits] = useState(() => shuffleDigits(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']));

<VirtualKeyboard
  variant='DEFAULT'
  digits={digits}
  icon={{ icon: ICONS.PLACEHOLDER }}
  onDigitButtonClick={(digit) => handleDigit(digit)}
  onRemoveButtonClick={() => handleRemove()}
/>`,
      },
    },
  },
  render: () => {
    const [code, setCode] = useState('');

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: '14px' }}>Code: {code}</div>
        </div>
        <VirtualKeyboardComponent
          digits={['9', '3', '5', '1', '8', '0', '4', '7', '2', '6']}
          icon={{ icon: ICONS.PLACEHOLDER }}
          variant="DEFAULT"
          onDigitButtonClick={(digit: string) => setCode(code + digit)}
          onRemoveButtonClick={() => setCode(code.slice(0, -1))}
        />
      </div>
    );
  },
};

export const WithMaxLength: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Virtual keyboard with maximum length validation (4 digits).',
      },
      source: {
        code: `const [pin, setPin] = useState('');
const MAX_LENGTH = 4;

<VirtualKeyboard
  variant='DEFAULT'
  digits={['7', '1', '9', '3', '0', '5', '8', '2', '4', '6']}
  icon={{ icon: ICONS.PLACEHOLDER }}
  onDigitButtonClick={(digit) => {
    if (pin.length < MAX_LENGTH) {
      setPin(pin + digit);
    }
  }}
  onRemoveButtonClick={() => setPin(pin.slice(0, -1))}
/>`,
      },
    },
  },
  render: () => {
    const [pin, setPin] = useState('');
    const MAX_LENGTH = 4;

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: '14px', marginBottom: '4px' }}>
            PIN ({pin.length}/{MAX_LENGTH})
          </div>
          <div style={{ fontSize: '24px', letterSpacing: '8px' }}>
            {pin
              .padEnd(MAX_LENGTH, '−')
              .split('')
              .map((char, idx) => {
                const uniqueKey = `pin-${idx}-${Math.random().toString(36).substring(2, 9)}`;
                return <span key={uniqueKey}>{char === '−' ? '−' : '•'}</span>;
              })}
          </div>
        </div>
        <VirtualKeyboardComponent
          digits={['7', '1', '9', '3', '0', '5', '8', '2', '4', '6']}
          icon={{ icon: ICONS.PLACEHOLDER }}
          variant="DEFAULT"
          onDigitButtonClick={(digit: string) => {
            if (pin.length < MAX_LENGTH) {
              setPin(pin + digit);
            }
          }}
          onRemoveButtonClick={() => setPin(pin.slice(0, -1))}
        />
      </div>
    );
  },
};

export const PINEntry: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Virtual keyboard configured for secure PIN entry with masked display.',
      },
      source: {
        code: `const [pin, setPin] = useState('');
const PIN_LENGTH = 6;

<VirtualKeyboard
  variant='DEFAULT'
  digits={shuffledDigits}
  icon={{ icon: ICONS.PLACEHOLDER }}
  onDigitButtonClick={(digit) => {
    if (pin.length < PIN_LENGTH) {
      setPin(pin + digit);
    }
  }}
  onRemoveButtonClick={() => setPin(pin.slice(0, -1))}
/>`,
      },
    },
  },
  render: () => {
    const [pin, setPin] = useState('');
    const PIN_LENGTH = 6;

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
            Enter PIN ({pin.length}/{PIN_LENGTH})
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              letterSpacing: '12px',
            }}
          >
            {Array.from({ length: PIN_LENGTH }, (_, idx) => (
              <span key={`pin-${idx}`}>{idx < pin.length ? '•' : '○'}</span>
            ))}
          </div>
        </div>
        <VirtualKeyboardComponent
          digits={['5', '9', '1', '7', '3', '0', '8', '4', '2', '6']}
          icon={{ icon: ICONS.PLACEHOLDER }}
          variant="DEFAULT"
          onDigitButtonClick={(digit: string) => {
            if (pin.length < PIN_LENGTH) {
              setPin(pin + digit);
            }
          }}
          onRemoveButtonClick={() => setPin(pin.slice(0, -1))}
        />
      </div>
    );
  },
};

export const WithValidation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Virtual keyboard with validation and error feedback.',
      },
      source: {
        code: `const [code, setCode] = useState('');
const [error, setError] = useState('');
const VALID_CODE = '1234';

const handleDigit = (digit: string) => {
  const newCode = code + digit;
  setCode(newCode);

  if (newCode.length === 4) {
    if (newCode === VALID_CODE) {
      setError('');
      alert('Code correct!');
    } else {
      setError('Invalid code');
      setCode('');
    }
  }
};

<VirtualKeyboard
  variant='DEFAULT'
  digits={shuffledDigits}
  icon={{ icon: ICONS.PLACEHOLDER }}
  onDigitButtonClick={handleDigit}
  onRemoveButtonClick={() => { setCode(code.slice(0, -1)); setError(''); }}
/>`,
      },
    },
  },
  render: () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const VALID_CODE = '1234';

    const handleDigit = (digit: string) => {
      const newCode = code + digit;
      setCode(newCode);

      if (newCode.length === 4) {
        if (newCode === VALID_CODE) {
          setError('');
          // eslint-disable-next-line no-alert
          alert('Code correct!');
          setCode('');
        } else {
          setError('Invalid code. Try again.');
          setTimeout(() => {
            setCode('');
            setError('');
          }, 1500);
        }
      }
    };

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: '14px', marginBottom: '4px' }}>
            Enter code: 1234
          </div>
          <div
            style={{
              color: error ? '#d32f2f' : '#333',
              fontSize: '24px',
              letterSpacing: '8px',
            }}
          >
            {code
              .padEnd(4, '−')
              .split('')
              .map((char, idx) => (
                <span key={`validation-code-${idx.toString()}-${char}`}>
                  {char === '−' ? '−' : '•'}
                </span>
              ))}
          </div>
          {error && (
            <div
              style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}
            >
              {error}
            </div>
          )}
        </div>
        <VirtualKeyboardComponent
          digits={['8', '2', '5', '9', '1', '6', '4', '0', '3', '7']}
          icon={{ icon: ICONS.PLACEHOLDER }}
          variant="DEFAULT"
          onDigitButtonClick={handleDigit}
          onRemoveButtonClick={() => {
            setCode(code.slice(0, -1));
            setError('');
          }}
        />
      </div>
    );
  },
};

export const VirtualKeyboard: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Complete virtual keyboard example with all features.',
      },
      source: {
        code: `const [value, setValue] = useState('');

<VirtualKeyboard
  variant='DEFAULT'
  digits={['0', '4', '2', '8', '7', '3', '9', '1', '6', '5']}
  icon={{ icon: ICONS.PLACEHOLDER }}
  onDigitButtonClick={(digit) => setValue(value + digit)}
  onRemoveButtonClick={() => setValue(value.slice(0, -1))}
/>`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {value || '−'}
          </div>
        </div>
        <VirtualKeyboardComponent
          digits={['0', '4', '2', '8', '7', '3', '9', '1', '6', '5']}
          icon={{ icon: ICONS.PLACEHOLDER }}
          variant="DEFAULT"
          onDigitButtonClick={(digit: string) => setValue(value + digit)}
          onRemoveButtonClick={() => setValue(value.slice(0, -1))}
        />
      </div>
    );
  },
};
