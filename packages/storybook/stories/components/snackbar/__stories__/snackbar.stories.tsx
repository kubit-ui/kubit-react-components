/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import {
  Button,
  Icon,
  Snackbar,
  createSpringAnimation,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';

const { ButtonSizeType, ButtonVariantType } = KUBIT_VARIANTS;

const meta = {
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['feedback', 'notification', 'toast'],
  title: 'Components/Feedback/Snackbar',
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Shared animation setup hook
const useSnackbarAnimation = () => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const className = 'snackbar-spring-animation';
    const keyframeName = `${className}-keyframes`;

    const springAnimation = createSpringAnimation('down', {
      damping: 10,
      duration: '1200ms',
      initialDisplacement: 40,
      keyframeCount: 30,
      mass: 1,
      placement: 'bottom',
      stiffness: 200,
    });

    const existingStyle = document.getElementById(`style-${className}`);
    if (existingStyle) {
      existingStyle.remove();
    }

    const cssContent = `
      @keyframes ${keyframeName} {
        ${springAnimation.keyframesCSS}
      }

      @keyframes slide-down-exit {
        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
        25% { opacity: 0.9; transform: translateX(-50%) translateY(10px); }
        50% { opacity: 0.7; transform: translateX(-50%) translateY(30px); }
        75% { opacity: 0.4; transform: translateX(-50%) translateY(60px); }
        100% { opacity: 0; transform: translateX(-50%) translateY(80px); }
      }

      [data-kbt-id="popover"][data-kbt-placement="bottom"].${className}[data-snackbar-closing="false"] {
        animation: ${keyframeName} ${springAnimation.duration} ease-out;
        transform-origin: center top;
      }

      [data-kbt-id="popover"].${className}[data-snackbar-closing="true"] {
        animation: slide-down-exit 800ms cubic-bezier(0.4, 0.0, 1.0, 1.0);
        animation-fill-mode: forwards;
        transform-origin: center top;
        pointer-events: none;
        will-change: transform, opacity;
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.id = `style-${className}`;
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);

    return () => {
      const cleanupStyleElement = document.getElementById(`style-${className}`);
      if (cleanupStyleElement) {
        cleanupStyleElement.remove();
      }
    };
  }, []);

  const handleClose = (callback: () => void) => {
    setIsClosing(true);

    setTimeout(() => {
      const popoverElement = document.querySelector(
        '[data-kbt-id="popover"][data-snackbar-closing="true"]',
      ) as HTMLElement;

      if (popoverElement) {
        popoverElement.style.setProperty(
          'animation',
          'slide-down-exit 800ms cubic-bezier(0.4, 0.0, 1.0, 1.0)',
          'important',
        );
        popoverElement.style.setProperty(
          'animation-fill-mode',
          'forwards',
          'important',
        );
        popoverElement.style.setProperty('pointer-events', 'none', 'important');
      }
    }, 10);

    setTimeout(() => {
      setIsClosing(false);
      callback();
    }, 850);
  };

  return { handleClose, isClosing };
};

// Common popover configuration
const basePopoverConfig = {
  additionalClasses: {
    arrow: '',
    popover: 'snackbar-spring-animation',
  },
  disableAnimations: true,
  disableAutoFocusFirstDescendant: true,
  middlewareOptions: {
    edgePadding: 20,
  },
  placement: 'bottom' as const,
  zIndex: 500,
};

/**
 * Basic snackbar with simple message
 */
export const Basic: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={4000}
>
  <div style={{ padding: '12px 16px' }}>
    This is a simple snackbar message
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Show Snackbar
        </Button>

        <Snackbar
          closeTimeout={4000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              fontSize: '14px',
              fontWeight: 500,
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            This is a simple snackbar message
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Snackbar with icon and close button
 */
export const WithIconAndClose: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={5000}
>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Icon icon={ICONS.PLACEHOLDER} />
    <span>Your changes have been saved</span>
    <Icon icon={ICONS.CLOSE} onClick={handleClose} />
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Save Changes
        </Button>

        <Snackbar
          closeTimeout={5000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              gap: '12px',
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            <Icon
              color="#23779A"
              height="20px"
              icon={ICONS.PLACEHOLDER}
              width="20px"
            />
            <span style={{ flex: 1 }}>Your changes have been saved</span>
            <Icon
              color="#1A1A1A"
              height="20px"
              icon={ICONS.CLOSE}
              width="20px"
              onClick={() => handleClose(() => setIsOpen(false))}
            />
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Snackbar with action button
 */
export const WithAction: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={6000}
>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <span>Item deleted</span>
    <button onClick={handleUndo}>UNDO</button>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    const handleUndo = () => {
      console.log('Undo action');
      handleClose(() => setIsOpen(false));
    };

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.SECONDARY}
          onClick={() => setIsOpen(true)}
        >
          Delete Item
        </Button>

        <Snackbar
          closeTimeout={6000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              justifyContent: 'space-between',
              minHeight: '48px',
              minWidth: '300px',
              padding: '12px 16px',
            }}
          >
            <span>Item deleted</span>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: '#23779A',
                cursor: 'pointer',
                fontWeight: 600,
                marginLeft: '24px',
                padding: '4px 8px',
              }}
              onClick={handleUndo}
            >
              UNDO
            </button>
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Success notification snackbar
 */
export const Success: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={4000}
>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: '#E6F6F6',
    border: '1px solid #28A745'
  }}>
    <Icon icon={ICONS.PLACEHOLDER} color="#28A745" />
    <span>Operation completed successfully</span>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Complete Operation
        </Button>

        <Snackbar
          closeTimeout={4000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#D4EDDA',
              border: '1px solid #28A745',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#155724',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              gap: '12px',
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            <Icon
              color="#28A745"
              height="20px"
              icon={ICONS.PLACEHOLDER}
              width="20px"
            />
            <span style={{ flex: 1 }}>Operation completed successfully</span>
            <Icon
              color="#155724"
              height="20px"
              icon={ICONS.CLOSE}
              width="20px"
              onClick={() => handleClose(() => setIsOpen(false))}
            />
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Error notification snackbar
 */
export const Error: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={0} // Don't auto-close errors
>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: '#FEE',
    border: '1px solid #DC3545'
  }}>
    <Icon icon={ICONS.PLACEHOLDER} color="#DC3545" />
    <div>
      <div>Error</div>
      <div>Failed to save changes</div>
    </div>
    <button onClick={handleClose}>Close</button>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.SECONDARY}
          onClick={() => setIsOpen(true)}
        >
          Trigger Error
        </Button>

        <Snackbar
          closeTimeout={0}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#F8D7DA',
              border: '1px solid #DC3545',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#721C24',
              display: 'flex',
              fontSize: '14px',
              gap: '12px',
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            <Icon
              color="#DC3545"
              height="20px"
              icon={ICONS.PLACEHOLDER}
              width="20px"
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>Error</div>
              <div style={{ fontSize: '13px', marginTop: '2px' }}>
                Failed to save changes. Please try again.
              </div>
            </div>
            <Icon
              color="#721C24"
              height="20px"
              icon={ICONS.CLOSE}
              width="20px"
              onClick={() => handleClose(() => setIsOpen(false))}
            />
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Warning notification snackbar
 */
export const Warning: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={5000}
>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: '#FFF3CD',
    border: '1px solid #FFC107'
  }}>
    <Icon icon={ICONS.PLACEHOLDER} color="#FFC107" />
    <span>Connection unstable. Changes may not be saved.</span>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Show Warning
        </Button>

        <Snackbar
          closeTimeout={5000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#FFF3CD',
              border: '1px solid #FFC107',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#856404',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              gap: '12px',
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            <Icon
              color="#FFC107"
              height="20px"
              icon={ICONS.PLACEHOLDER}
              width="20px"
            />
            <span style={{ flex: 1 }}>
              Connection unstable. Changes may not be saved.
            </span>
            <Icon
              color="#856404"
              height="20px"
              icon={ICONS.CLOSE}
              width="20px"
              onClick={() => handleClose(() => setIsOpen(false))}
            />
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Info notification snackbar
 */
export const Info: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={4000}
>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: '#D1ECF1',
    border: '1px solid #17A2B8'
  }}>
    <Icon icon={ICONS.PLACEHOLDER} color="#17A2B8" />
    <span>New update available</span>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Show Info
        </Button>

        <Snackbar
          closeTimeout={4000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#D1ECF1',
              border: '1px solid #17A2B8',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#0C5460',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              gap: '12px',
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            <Icon
              color="#17A2B8"
              height="20px"
              icon={ICONS.PLACEHOLDER}
              width="20px"
            />
            <span style={{ flex: 1 }}>New update available</span>
            <Icon
              color="#0C5460"
              height="20px"
              icon={ICONS.CLOSE}
              width="20px"
              onClick={() => handleClose(() => setIsOpen(false))}
            />
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Snackbar with multiple actions
 */
export const MultipleActions: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={0}
>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <span>Upload failed</span>
    <div>
      <button onClick={handleRetry}>RETRY</button>
      <button onClick={handleDismiss}>DISMISS</button>
    </div>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    const handleRetry = () => {
      console.log('Retrying...');
      handleClose(() => setIsOpen(false));
    };

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.SECONDARY}
          onClick={() => setIsOpen(true)}
        >
          Upload File
        </Button>

        <Snackbar
          closeTimeout={0}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              justifyContent: 'space-between',
              minHeight: '48px',
              minWidth: '400px',
              padding: '12px 16px',
            }}
          >
            <span>Upload failed</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#23779A',
                  cursor: 'pointer',
                  fontWeight: 600,
                  padding: '4px 8px',
                }}
                onClick={handleRetry}
              >
                RETRY
              </button>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#23779A',
                  cursor: 'pointer',
                  fontWeight: 600,
                  padding: '4px 8px',
                }}
                onClick={() => handleClose(() => setIsOpen(false))}
              >
                DISMISS
              </button>
            </div>
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Snackbar at top position
 */
export const TopPosition: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={4000}
  popover={{
    placement: 'top',
    middlewareOptions: { edgePadding: 20 }
  }}
>
  <div style={{ padding: '12px 16px' }}>
    Message at the top
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Show at Top
        </Button>

        <Snackbar
          closeTimeout={4000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
            placement: 'top',
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              fontSize: '14px',
              fontWeight: 500,
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            Message at the top of the screen
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Persistent snackbar (no auto-close)
 */
export const Persistent: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={0} // Disable auto-close
>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <span>This message stays until dismissed</span>
    <button onClick={handleClose}>CLOSE</button>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Show Persistent
        </Button>

        <Snackbar
          closeTimeout={0}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              justifyContent: 'space-between',
              minHeight: '48px',
              minWidth: '350px',
              padding: '12px 16px',
            }}
          >
            <span>This message stays until dismissed</span>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: '#23779A',
                cursor: 'pointer',
                fontWeight: 600,
                marginLeft: '24px',
                padding: '4px 8px',
              }}
              onClick={() => handleClose(() => setIsOpen(false))}
            >
              CLOSE
            </button>
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Long duration snackbar
 */
export const LongDuration: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={10000} // 10 seconds
>
  <div style={{ padding: '12px 16px' }}>
    This message will stay for 10 seconds
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Show Long Duration
        </Button>

        <Snackbar
          closeTimeout={10000}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              fontSize: '14px',
              fontWeight: 500,
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            This message will stay for 10 seconds (hover to pause)
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Sequential snackbars (queue)
 */
export const Sequential: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [queue, setQueue] = useState<string[]>([]);
const [current, setCurrent] = useState<string | null>(null);

const addMessage = (message: string) => {
  setQueue(prev => [...prev, message]);
};

useEffect(() => {
  if (!current && queue.length > 0) {
    setCurrent(queue[0]);
    setQueue(prev => prev.slice(1));
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

    <Snackbar
      open={!!current}
      onClose={handleClose}
      closeTimeout={3000}
    >
      {current}
    </Snackbar>
  </>
);`,
      },
    },
  },
  render: () => {
    const [queue, setQueue] = useState<string[]>([]);
    const [current, setCurrent] = useState<string | null>(null);
    const { handleClose, isClosing } = useSnackbarAnimation();

    const addMessage = (message: string) => {
      setQueue((prev) => [...prev, message]);
    };

    useEffect(() => {
      if (!current && queue.length > 0) {
        setCurrent(queue[0]);
        setQueue((prev) => prev.slice(1));
      }
    }, [current, queue]);

    return (
      <>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            size={ButtonSizeType.SMALL}
            variant={ButtonVariantType.PRIMARY}
            onClick={() => addMessage('First message')}
          >
            Message 1
          </Button>
          <Button
            size={ButtonSizeType.SMALL}
            variant={ButtonVariantType.PRIMARY}
            onClick={() => addMessage('Second message')}
          >
            Message 2
          </Button>
          <Button
            size={ButtonSizeType.SMALL}
            variant={ButtonVariantType.PRIMARY}
            onClick={() => addMessage('Third message')}
          >
            Message 3
          </Button>
        </div>

        <Snackbar
          closeTimeout={3000}
          open={!!current}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setCurrent(null))}
        >
          <div
            style={{
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              fontSize: '14px',
              fontWeight: 500,
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            {current}
          </div>
        </Snackbar>
      </>
    );
  },
};

/**
 * Snackbar with loading indicator
 */
export const WithLoading: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeTimeout={0}
>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <LoadingSpinner />
    <span>Processing your request...</span>
  </div>
</Snackbar>`,
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClose, isClosing } = useSnackbarAnimation();

    return (
      <>
        <Button
          size={ButtonSizeType.LARGE}
          variant={ButtonVariantType.PRIMARY}
          onClick={() => setIsOpen(true)}
        >
          Process Request
        </Button>

        <Snackbar
          closeTimeout={0}
          open={isOpen}
          popover={{
            ...basePopoverConfig,
            'data-snackbar-closing': isClosing.toString(),
          }}
          onClose={() => handleClose(() => setIsOpen(false))}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#E6F6F6',
              border: '1px solid #23779A',
              borderRadius: '4px',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              color: '#1A1A1A',
              display: 'flex',
              fontSize: '14px',
              fontWeight: 500,
              gap: '12px',
              minHeight: '48px',
              padding: '12px 16px',
            }}
          >
            <div
              style={{
                animation: 'spin 1s linear infinite',
                border: '2px solid #E6F6F6',
                borderRadius: '50%',
                borderTop: '2px solid #23779A',
                height: '20px',
                width: '20px',
              }}
            />
            <span style={{ flex: 1 }}>Processing your request...</span>
            <Icon
              color="#1A1A1A"
              height="20px"
              icon={ICONS.CLOSE}
              width="20px"
              onClick={() => handleClose(() => setIsOpen(false))}
            />
          </div>
        </Snackbar>

        <style>
          {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
        </style>
      </>
    );
  },
};
