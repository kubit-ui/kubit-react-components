import type { Meta, StoryObj } from '@storybook/react-vite';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { ModalControlled as Story } from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { ICONS } from '@/stories/assets/icons/icons';
import { ReplaceContent } from '@/stories/components/replaceContent/replaceContent';

import { argtypes } from './argtypes';

const { ModalVariantType } = KUBIT_VARIANTS;

const StoryWithHooks = (args) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ width: 'fit-content' }}>
      <button onClick={handleOpen}>Open Modal</button>
      <Story
        {...args}
        closeIcon={{ ...args.closeIcon, onClick: handleClose }}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['containment'],
  title: 'Components/Containment/Modal',
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  closeIcon: { icon: ICONS.CLOSE },
  content: <ReplaceContent>Sixth slide</ReplaceContent>,
  contentScrollArias: {
    'aria-label': 'Modal content scroll',
  },
  dragIcon: { icon: ICONS.DRAG },
  popover: {
    disableAutoFocusFirstDescendant: false,
  },
  title: { content: 'Modal title' },
  variant: ModalVariantType.DEFAULT,
};

/**
 * Basic modal with title and simple content. Click outside or press Escape to close.
 */
export const BasicModal: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        This is a basic modal with simple content.
      </div>
    ),
    title: { content: 'Basic Modal' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Basic Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        popover={{
          focusFirstDescendantAutomatically: true,
          variant: 'MODAL',
        }}
        contentScrollArias={{ 'aria-label': 'Modal content scroll' }}
      >
        <div style={{ padding: '20px' }}>
          This is a basic modal with simple content.
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Modal with footer containing action buttons.
 */
export const WithFooter: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>Modal content with footer actions.</div>
    ),
    footer: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          padding: '16px',
        }}
      >
        <button>Cancel</button>
        <button
          style={{
            background: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
          }}
        >
          Save
        </button>
      </div>
    ),
    title: { content: 'Modal with Footer' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Modal with Footer' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', padding: '16px' }}>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
        }
      >
        <div style={{ padding: '20px' }}>Modal content with footer actions.</div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Blocked modal that cannot be closed by clicking outside or pressing Escape.
 */
export const BlockedModal: StoryType = {
  args: {
    ...commonArgs,
    blocked: true,
    content: (
      <div style={{ padding: '20px' }}>
        <p>
          This modal is blocked and cannot be closed by clicking outside or
          pressing Escape.
        </p>
        <p>You must click the close button in the footer.</p>
      </div>
    ),
    footer: (
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}
      >
        <button
          style={{
            background: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
          }}
        >
          I Understand
        </button>
      </div>
    ),
    title: { content: 'Blocked Modal' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        blocked
        title={{ content: 'Blocked Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => setOpen(false)}>I Understand</button>
          </div>
        }
      >
        <div style={{ padding: '20px' }}>
          <p>This modal is blocked and cannot be closed by clicking outside or pressing Escape.</p>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Small modal with custom dimensions.
 */
export const SmallModal: StoryType = {
  args: {
    ...commonArgs,
    content: <div style={{ padding: '20px' }}>This is a small modal.</div>,
    maxWidth: '400px',
    minHeight: '200px',
    title: { content: 'Small Modal' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Small Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="400px"
        minHeight="200px"
      >
        <div style={{ padding: '20px' }}>This is a small modal.</div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Large modal with extensive content.
 */
export const LargeModal: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        <h3>Large Modal Content</h3>
        <p>This modal has custom dimensions for larger content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
    maxHeight: '600px',
    maxWidth: '800px',
    title: { content: 'Large Modal' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Large Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="800px"
        maxHeight="600px"
      >
        <div style={{ padding: '20px' }}>
          <h3>Large Modal Content</h3>
          <p>This modal has custom dimensions for larger content.</p>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Modal with scrollable content for long text.
 */
export const ScrollableContent: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        <h3>Terms and Conditions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
    footer: (
      <div style={{ padding: '16px', textAlign: 'right' }}>
        <button
          style={{
            background: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
          }}
        >
          Accept
        </button>
      </div>
    ),
    maxHeight: '500px',
    title: { content: 'Scrollable Content' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Scrollable Content' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxHeight="500px"
        contentScrollArias={{ 'aria-label': 'Modal content scroll' }}
        footer={
          <div style={{ padding: '16px', textAlign: 'right' }}>
            <button onClick={() => setOpen(false)}>Accept</button>
          </div>
        }
      >
        <div style={{ padding: '20px' }}>
          {/* Long scrollable content */}
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Confirmation dialog with yes/no actions.
 */
export const ConfirmationDialog: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        <p>Are you sure you want to delete this item?</p>
        <p style={{ color: '#dc3545', fontWeight: 'bold' }}>
          This action cannot be undone.
        </p>
      </div>
    ),
    footer: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          padding: '16px',
        }}
      >
        <button style={{ borderRadius: '4px', padding: '8px 16px' }}>
          Cancel
        </button>
        <button
          style={{
            background: '#dc3545',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
          }}
        >
          Delete
        </button>
      </div>
    ),
    maxWidth: '500px',
    title: { content: 'Confirm Deletion' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    console.log('Item deleted');
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Delete Item</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Confirm Deletion' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="500px"
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={handleConfirm}>Delete</button>
          </div>
        }
      >
        <div style={{ padding: '20px' }}>
          <p>Are you sure you want to delete this item?</p>
          <p style={{ color: '#dc3545', fontWeight: 'bold' }}>This action cannot be undone.</p>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Alert modal with single action button.
 */
export const AlertModal: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <p>Your changes have been saved successfully!</p>
      </div>
    ),
    footer: (
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <button
          style={{
            background: '#28a745',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 24px',
          }}
        >
          OK
        </button>
      </div>
    ),
    maxWidth: '400px',
    title: { content: 'Success' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Show Success</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Success' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="400px"
        footer={
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <button onClick={() => setOpen(false)}>OK</button>
          </div>
        }
      >
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
          <p>Your changes have been saved successfully!</p>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Form modal with input fields.
 */
export const FormModal: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <form id="user-form" style={{ padding: '20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="name"
            style={{ display: 'block', marginBottom: '4px' }}
          >
            Name
          </label>
          <input
            required
            id="name"
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '8px',
              width: '100%',
            }}
            type="text"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '4px' }}
          >
            Email
          </label>
          <input
            required
            id="email"
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '8px',
              width: '100%',
            }}
            type="email"
          />
        </div>
      </form>
    ),
    footer: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          padding: '16px',
        }}
      >
        <button
          style={{ borderRadius: '4px', padding: '8px 16px' }}
          type="button"
        >
          Cancel
        </button>
        <button
          form="user-form"
          style={{
            background: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
          }}
          type="submit"
        >
          Save
        </button>
      </div>
    ),
    maxWidth: '500px',
    title: { content: 'Add New User' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
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
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="500px"
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button type="submit" form="user-form">Save</button>
          </div>
        }
      >
        <form id="user-form" onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" required />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>
        </form>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Modal without close icon - must use footer action.
 */
export const WithoutCloseIcon: StoryType = {
  args: {
    ...commonArgs,
    closeIcon: undefined,
    content: (
      <div style={{ padding: '20px' }}>
        This modal has no close icon. Use the footer button to close.
      </div>
    ),
    footer: (
      <div style={{ padding: '16px', textAlign: 'right' }}>
        <button
          style={{
            background: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
          }}
        >
          Close
        </button>
      </div>
    ),
    title: { content: 'No Close Icon' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'No Close Icon' }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        footer={
          <div style={{ padding: '16px', textAlign: 'right' }}>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        }
      >
        <div style={{ padding: '20px' }}>
          This modal has no close icon. Use the footer button to close.
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Modal with custom close button configuration.
 */
export const WithCloseButton: StoryType = {
  args: {
    ...commonArgs,
    closeButton: {
      content: 'Close Modal',
      variant: 'PRIMARY',
    },
    content: (
      <div style={{ padding: '20px' }}>
        Modal with close button configuration.
      </div>
    ),
    title: { content: 'Custom Close Button' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Custom Close Button' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        closeButton={{
          content: 'Close Modal',
          variant: 'PRIMARY',
        }}
      >
        <div style={{ padding: '20px' }}>Modal with close button configuration.</div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Modal with nested list content.
 */
export const WithNestedContent: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        <h3>Features</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          <li>Feature 1: Easy to use interface</li>
          <li>Feature 2: Responsive design</li>
          <li>Feature 3: Accessibility support</li>
          <li>Feature 4: Customizable styling</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Benefits</h3>
        <ol style={{ listStyle: 'decimal', paddingLeft: '20px' }}>
          <li>Improved user experience</li>
          <li>Better accessibility</li>
          <li>Faster development</li>
        </ol>
      </div>
    ),
    maxWidth: '600px',
    title: { content: 'Nested Content' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>View Features</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Nested Content' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="600px"
      >
        <div style={{ padding: '20px' }}>
          <h3>Features</h3>
          <ul>
            <li>Feature 1: Easy to use interface</li>
            <li>Feature 2: Responsive design</li>
          </ul>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Responsive modal with custom dimensions for all devices.
 */
export const ResponsiveModal: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        <p>This modal adapts to all device sizes.</p>
        <p>Try resizing your browser window to see the effect.</p>
      </div>
    ),
    customHeightAllDevices: true,
    customWidthAllDevices: true,
    maxHeight: '80vh',
    maxWidth: '90vw',
    title: { content: 'Responsive Modal' },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{ content: 'Responsive Modal' }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
        maxWidth="90vw"
        maxHeight="80vh"
        customWidthAllDevices
        customHeightAllDevices
      >
        <div style={{ padding: '20px' }}>
          <p>This modal adapts to all device sizes.</p>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Modal with complex title configuration.
 */
export const WithComplexTitle: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div style={{ padding: '20px' }}>
        Modal with styled title configuration.
      </div>
    ),
    title: {
      content: 'Important Notice',
      id: 'custom-title-id',
      visible: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `import { Modal } from '@kubit/components';
import { ICONS } from '@/assets/icons';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={{
          content: 'Important Notice',
          id: 'custom-title-id',
          visible: true,
        }}
        closeIcon={{ icon: ICONS.CLOSE }}
        dragIcon={{ icon: ICONS.DRAG }}
        variant="DEFAULT"
      >
        <div style={{ padding: '20px' }}>Modal with styled title configuration.</div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};
