import type { Meta, StoryObj } from '@storybook/react';

import { Card as CardStory } from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { argtypes } from './argtypes';

const meta: Meta<typeof CardStory> = {
  argTypes: argtypes(),
  component: CardStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['containment'],
  title: 'Components/Containment/Card',
};

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

/**
 * Complete card with header, content, and footer.
 * Default variant with all sections populated.
 */
export const Complete: Story = {
  args: {
    content:
      'This is the card content area where you can add any information or components you need.',
    footer: 'Card footer information',
    header: 'Card Title',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="DEFAULT"
  header="Card Title"
  content="This is the card content area where you can add any information or components you need."
  footer="Card footer information"
/>`,
      },
    },
  },
};

/**
 * Card with only header and content.
 * Footer section is omitted.
 */
export const HeaderAndContent: Story = {
  args: {
    content: 'Main content of the card without a footer section.',
    header: 'Card Title',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="DEFAULT"
  header="Card Title"
  content="Main content of the card without a footer section."
/>`,
      },
    },
  },
};

/**
 * Card with only content.
 * Minimal card with just the main content area.
 */
export const ContentOnly: Story = {
  args: {
    content: 'This card only has content, no header or footer.',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="DEFAULT"
  content="This card only has content, no header or footer."
/>`,
      },
    },
  },
};

/**
 * Primary variant card.
 * Alternative styling for primary actions or emphasis.
 */
export const Primary: Story = {
  args: {
    content: 'This card uses the PRIMARY variant for emphasis.',
    footer: 'Primary footer',
    header: 'Primary Card',
    variant: 'PRIMARY',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="PRIMARY"
  header="Primary Card"
  content="This card uses the PRIMARY variant for emphasis."
  footer="Primary footer"
/>`,
      },
    },
  },
};

/**
 * Secondary variant card.
 * Alternative styling for secondary content.
 */
export const Secondary: Story = {
  args: {
    content: 'This card uses the SECONDARY variant.',
    footer: 'Secondary footer',
    header: 'Secondary Card',
    variant: 'SECONDARY',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="SECONDARY"
  header="Secondary Card"
  content="This card uses the SECONDARY variant."
  footer="Secondary footer"
/>`,
      },
    },
  },
};

/**
 * Card with selected state.
 * Visual feedback for selected or active cards.
 */
export const Selected: Story = {
  args: {
    content: 'This card is in a selected state.',
    header: 'Selected Card',
    state: 'SELECTED',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="DEFAULT"
  header="Selected Card"
  content="This card is in a selected state."
  state="SELECTED"
/>`,
      },
    },
  },
};

/**
 * Clickable card with interaction.
 * Cards can handle click events for navigation or selection.
 */
export const Clickable: Story = {
  args: {
    content: 'Click this card to see the interaction.',
    header: 'Clickable Card',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="DEFAULT"
  header="Clickable Card"
  content="Click this card to see the interaction."
  onClick={() => handleClick()}
/>`,
      },
    },
  },
  render: (args) => (
    <CardStory
      {...args}
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log('Card clicked!');
      }}
    />
  ),
};

/**
 * Interactive selectable card.
 * Example of a card that toggles selection state on click.
 */
export const InteractiveSelection: Story = {
  args: {
    content: 'Click to toggle selection state.',
    header: 'Selectable Card',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState(false);

<Card
  variant="DEFAULT"
  header="Selectable Card"
  content="Click to toggle selection state."
  state={selected ? 'SELECTED' : undefined}
  onClick={() => setSelected(!selected)}
/>`,
      },
    },
  },
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <CardStory
        {...args}
        state={selected ? 'SELECTED' : undefined}
        onClick={() => setSelected(!selected)}
      />
    );
  },
};

/**
 * Card with custom content.
 * Shows how to pass React nodes for complex layouts.
 */
export const WithCustomContent: Story = {
  args: {
    content: (
      <div>
        <p>
          <strong>Product Name</strong>
        </p>
        <p>$99.99</p>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    ),
    footer: <button style={{ padding: '8px 16px' }}>Add to Cart</button>,
    header: (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Product</span>
        <span>★★★★☆</span>
      </div>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card
  variant="DEFAULT"
  header={
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>Product</span>
      <span>★★★★☆</span>
    </div>
  }
  content={
    <div>
      <p><strong>Product Name</strong></p>
      <p>$99.99</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </div>
  }
  footer={
    <button>Add to Cart</button>
  }
/>`,
      },
    },
  },
};

/**
 * Card group showing multiple cards together.
 * Common pattern for lists or grids of cards.
 */
export const CardGroup: Story = {
  args: {
    content: 'Card 1 content',
    header: 'Card 1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
  <Card
    variant="DEFAULT"
    header="Card 1"
    content="First card content"
  />
  <Card
    variant="PRIMARY"
    header="Card 2"
    content="Second card content"
  />
  <Card
    variant="SECONDARY"
    header="Card 3"
    content="Third card content"
  />
</div>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '800px',
      }}
    >
      <CardStory
        content="First card content"
        header="Card 1"
        variant="DEFAULT"
      />
      <CardStory
        content="Second card content"
        header="Card 2"
        variant="PRIMARY"
      />
      <CardStory
        content="Third card content"
        header="Card 3"
        variant="SECONDARY"
      />
    </div>
  ),
};
