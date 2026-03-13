import type { Meta, StoryObj } from '@storybook/react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import {
  AccordionControlled,
  Accordion as AccordionUnControlled,
} from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: AccordionUnControlled,
  tags: ['containment'],
  title: 'Components/Containment/Accordion',
} satisfies Meta<typeof AccordionUnControlled>;

export default meta;

type Story = StoryObj<typeof meta>;

const { AccordionVariant } = KUBIT_VARIANTS;

const commonArgs = {
  children: 'Replace here your Content',
  dataTestId: 'accordion',
  defaultExpanded: false,
  header: 'Accordion Header',
  parameters: { docs: { source: { type: 'code' } } },
  variant: AccordionVariant.NEUTRAL,
};

/**
 * Basic uncontrolled accordion that manages its own state internally.
 * Click the header to expand/collapse the content.
 */
export const Uncontrolled: Story = {
  args: {
    ...commonArgs,
  },
  render: (args) => <AccordionUnControlled {...args} />,
};

/**
 * Controlled accordion where the parent component manages the expanded state.
 * This is useful when you need to control the accordion programmatically or
 * sync its state with other UI elements.
 */
export const Controlled = {
  render: (): JSX.Element => {
    const [expanded, setExpanded] = useState(false);

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <button
            style={{
              cursor: 'pointer',
              marginRight: '8px',
              padding: '8px 16px',
            }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Collapse' : 'Expand'} Accordion
          </button>
          <span>Current state: {expanded ? 'Expanded' : 'Collapsed'}</span>
        </div>
        <AccordionControlled
          expanded={expanded}
          header="Controlled Accordion"
          variant={AccordionVariant.NEUTRAL}
          onHeaderClick={() => setExpanded(!expanded)}
        >
          <p>
            This accordion is controlled by the parent component. You can toggle
            it using the button above or by clicking the header.
          </p>
        </AccordionControlled>
      </div>
    );
  },
};

/**
 * Example of multiple accordions where only one can be expanded at a time.
 * This pattern is useful for FAQ sections or settings panels.
 */
export const SingleExpansionGroup = {
  parameters: {
    docs: {
      source: {
        code: `const [expandedId, setExpandedId] = useState<string | null>(null);

const sections = [
  { id: 'section1', title: 'What is an Accordion?', content: '...' },
  { id: 'section2', title: 'When should I use it?', content: '...' },
  { id: 'section3', title: 'How does it improve UX?', content: '...' },
];

return (
  <div>
    {sections.map((section) => (
      <AccordionControlled
        key={section.id}
        expanded={expandedId === section.id}
        header={section.title}
        variant={AccordionVariant.NEUTRAL}
        onHeaderClick={() => {
          setExpandedId(expandedId === section.id ? null : section.id);
        }}
      >
        <p>{section.content}</p>
      </AccordionControlled>
    ))}
  </div>
);`,
      },
    },
  },
  render: (): JSX.Element => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const sections = [
      {
        content:
          'An accordion is a UI component that allows users to show and hide content sections by clicking on headers.',
        id: 'section1',
        title: 'What is an Accordion?',
      },
      {
        content:
          'Use accordions when you need to organize related information into collapsible sections to save space and improve content scanability.',
        id: 'section2',
        title: 'When should I use it?',
      },
      {
        content:
          'Accordions help reduce cognitive load by hiding secondary information until users need it, making interfaces cleaner and more focused.',
        id: 'section3',
        title: 'How does it improve UX?',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {sections.map((section) => (
          <AccordionControlled
            key={section.id}
            expanded={expandedId === section.id}
            header={section.title}
            variant={AccordionVariant.NEUTRAL}
            onHeaderClick={() => {
              setExpandedId(expandedId === section.id ? null : section.id);
            }}
          >
            <p style={{ padding: '16px' }}>{section.content}</p>
          </AccordionControlled>
        ))}
      </div>
    );
  },
};

/**
 * Example with rich content including formatted text, images, and nested elements.
 */
export const RichContent = {
  parameters: {
    docs: {
      source: {
        code: `<AccordionUnControlled
  header={
    <div>
      <span>User Profile Settings</span>
      <span>5 items</span>
    </div>
  }
  variant={AccordionVariant.NEUTRAL}
>
  <div>
    <h4>Profile Information</h4>
    <ul>
      <li>📧 Email Notifications</li>
      <li>🔒 Privacy Settings</li>
      <li>🔔 Push Notifications</li>
      <li>👤 Account Details</li>
      <li>🎨 Theme Preferences</li>
    </ul>
  </div>
</AccordionUnControlled>`,
      },
    },
  },
  render: (): JSX.Element => (
    <AccordionUnControlled
      header={
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>User Profile Settings</span>
          <span
            style={{
              backgroundColor: '#e0e0e0',
              borderRadius: '12px',
              fontSize: '12px',
              padding: '2px 8px',
            }}
          >
            5 items
          </span>
        </div>
      }
      variant={AccordionVariant.NEUTRAL}
    >
      <div style={{ padding: '16px' }}>
        <h4 style={{ marginTop: 0 }}>Profile Information</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            📧 Email Notifications
          </li>
          <li style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            🔒 Privacy Settings
          </li>
          <li style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            🔔 Push Notifications
          </li>
          <li style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            👤 Account Details
          </li>
          <li style={{ padding: '8px 0' }}>🎨 Theme Preferences</li>
        </ul>
      </div>
    </AccordionUnControlled>
  ),
};

/**
 * Nested accordions example showing hierarchical content organization.
 */
export const NestedAccordions = {
  parameters: {
    docs: {
      source: {
        code: `<AccordionUnControlled
  defaultExpanded={true}
  header="Main Category"
  variant={AccordionVariant.NEUTRAL}
>
  <div>
    <p>This is the main category content.</p>
    <AccordionUnControlled
      header="Subcategory 1"
      variant={AccordionVariant.STANDARD}
    >
      <p>Content for the first subcategory.</p>
    </AccordionUnControlled>
    <AccordionUnControlled
      header="Subcategory 2"
      variant={AccordionVariant.STANDARD}
    >
      <p>Content for the second subcategory.</p>
    </AccordionUnControlled>
  </div>
</AccordionUnControlled>`,
      },
    },
  },
  render: (): JSX.Element => (
    <AccordionUnControlled
      defaultExpanded
      header="Main Category"
      variant={AccordionVariant.NEUTRAL}
    >
      <div style={{ padding: '16px' }}>
        <p style={{ marginTop: 0 }}>
          This is the main category content. It contains nested subcategories
          below:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionUnControlled
            header="Subcategory 1"
            variant={AccordionVariant.STANDARD}
          >
            <p style={{ margin: 0, padding: '16px' }}>
              Content for the first subcategory with detailed information.
            </p>
          </AccordionUnControlled>
          <AccordionUnControlled
            header="Subcategory 2"
            variant={AccordionVariant.STANDARD}
          >
            <p style={{ margin: 0, padding: '16px' }}>
              Content for the second subcategory with more details.
            </p>
          </AccordionUnControlled>
        </div>
      </div>
    </AccordionUnControlled>
  ),
};

/**
 * Example simulating async content loading when accordion expands.
 */
export const AsyncContentLoading = {
  parameters: {
    docs: {
      source: {
        code: `const [expanded, setExpanded] = useState(false);
const [content, setContent] = useState<string>('');
const [loading, setLoading] = useState(false);

const handleExpand = () => {
  const newExpanded = !expanded;
  setExpanded(newExpanded);

  if (newExpanded && !content) {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setContent('Loaded content from API...');
      setLoading(false);
    }, 1500);
  }
};

return (
  <AccordionControlled
    expanded={expanded}
    header="Load Content Dynamically"
    variant={AccordionVariant.NEUTRAL}
    onHeaderClick={handleExpand}
  >
    <div>
      {loading ? (
        <p>Loading content...</p>
      ) : content ? (
        <p>{content}</p>
      ) : (
        <p>Click to load content</p>
      )}
    </div>
  </AccordionControlled>
);`,
      },
    },
  },
  render: (): JSX.Element => {
    const [expanded, setExpanded] = useState(false);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleExpand = (): void => {
      const newExpanded = !expanded;
      setExpanded(newExpanded);

      if (newExpanded && !content) {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
          setContent(
            'This content was loaded asynchronously from a simulated API call. In a real application, this would fetch data from your backend.',
          );
          setLoading(false);
        }, 1500);
      }
    };

    return (
      <AccordionControlled
        expanded={expanded}
        header="Load Content Dynamically"
        variant={AccordionVariant.NEUTRAL}
        onHeaderClick={handleExpand}
      >
        <div style={{ padding: '16px' }}>
          {loading ? (
            <div>
              <p>Loading content...</p>
              <div
                style={{
                  backgroundColor: '#e0e0e0',
                  borderRadius: '2px',
                  height: '4px',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    animation: 'loading 1s ease-in-out infinite',
                    backgroundColor: '#1976d2',
                    height: '100%',
                    width: '30%',
                  }}
                />
              </div>
            </div>
          ) : content ? (
            <p style={{ margin: 0 }}>{content}</p>
          ) : (
            <p style={{ margin: 0 }}>Click to load content</p>
          )}
        </div>
      </AccordionControlled>
    );
  },
};

/**
 * Accordion with callback handling to track expand/collapse events.
 */
export const WithCallbacks = {
  parameters: {
    docs: {
      source: {
        code: `const [log, setLog] = useState<string[]>([]);

const addLog = (message: string) => {
  setLog((prev) => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
};

return (
  <div>
    <AccordionUnControlled
      header="Accordion with Event Logging"
      variant={AccordionVariant.NEUTRAL}
      onExpandCollapse={(expanded) => {
        addLog(expanded ? 'Accordion expanded' : 'Accordion collapsed');
      }}
    >
      <p>Try expanding and collapsing this accordion to see the events.</p>
    </AccordionUnControlled>

    <div>
      <h4>Event Log:</h4>
      {log.length === 0 ? (
        <p>No events yet</p>
      ) : (
        <ul>
          {log.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);`,
      },
    },
  },
  render: (): JSX.Element => {
    const [log, setLog] = useState<string[]>([]);

    const addLog = (message: string): void => {
      setLog((prev) => [
        ...prev,
        `${new Date().toLocaleTimeString()}: ${message}`,
      ]);
    };

    return (
      <div>
        <AccordionUnControlled
          header="Accordion with Event Logging"
          variant={AccordionVariant.NEUTRAL}
          onExpandCollapse={(expanded) => {
            addLog(expanded ? 'Accordion expanded' : 'Accordion collapsed');
          }}
        >
          <p style={{ margin: 0, padding: '16px' }}>
            Try expanding and collapsing this accordion to see the events logged
            below.
          </p>
        </AccordionUnControlled>

        <div
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            marginTop: '16px',
            padding: '16px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>Event Log:</h4>
          {log.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>No events yet</p>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {log.map((entry) => (
                <li
                  key={entry}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    padding: '4px 0',
                  }}
                >
                  {entry}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
};

/**
 * Accordion with custom styling applied through additionalClasses.
 */
export const CustomStyling: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      accordion: 'custom-accordion-container',
      content: 'custom-accordion-content',
      header: 'custom-accordion-header',
      headerbutton: 'custom-accordion-button',
      innercontent: 'custom-accordion-inner',
    },
    header: 'Custom Styled Accordion',
  },
  render: (args) => <AccordionUnControlled {...args} />,
};
