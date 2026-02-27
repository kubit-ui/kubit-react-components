import type { Meta, StoryObj } from '@storybook/react';

import { Text as Story } from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component:
          'Text component for rendering text content with consistent typography. Supports various semantic variants for headings, paragraphs, and captions with customizable styling options.',
      },
    },
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/text',
    layout: 'centered',
  },
  tags: ['resources'],
  title: 'Components/Resources/Text',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Default: Story = {
  args: {
    children: 'Default text content',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='DEFAULT'>Default text content</Text>",
      },
    },
  },
};

export const HeadingDisplay1Expanded: Story = {
  args: {
    children: 'Display Heading 1',
    variant: 'HEADING_DISPLAY_1_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='HEADING_DISPLAY_1_EXPANDED'>Display Heading 1</Text>",
      },
    },
  },
};

export const HeadingH1Expanded: Story = {
  args: {
    children: 'Heading 1',
    variant: 'HEADING_H1_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='HEADING_H1_EXPANDED'>Heading 1</Text>",
      },
    },
  },
};

export const HeadingH2Expanded: Story = {
  args: {
    children: 'Heading 2',
    variant: 'HEADING_H2_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='HEADING_H2_EXPANDED'>Heading 2</Text>",
      },
    },
  },
};

export const HeadingH3Expanded: Story = {
  args: {
    children: 'Heading 3',
    variant: 'HEADING_H3_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='HEADING_H3_EXPANDED'>Heading 3</Text>",
      },
    },
  },
};

export const HeadingH4Expanded: Story = {
  args: {
    children: 'Heading 4',
    variant: 'HEADING_H4_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='HEADING_H4_EXPANDED'>Heading 4</Text>",
      },
    },
  },
};

export const ParagraphLargeExpanded: Story = {
  args: {
    children:
      'This is a large paragraph with expanded styling for enhanced readability.',
    variant: 'PARAGRAPH_LARGE_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_LARGE_EXPANDED'>
  This is a large paragraph with expanded styling for enhanced readability.
</Text>`,
      },
    },
  },
};

export const ParagraphMediumExpanded: Story = {
  args: {
    children: 'This is a medium paragraph with standard text styling.',
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_MEDIUM_EXPANDED'>
  This is a medium paragraph with standard text styling.
</Text>`,
      },
    },
  },
};

export const ParagraphSmallExpanded: Story = {
  args: {
    children: 'This is a small paragraph for secondary information.',
    variant: 'PARAGRAPH_SMALL_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_SMALL_EXPANDED'>
  This is a small paragraph for secondary information.
</Text>`,
      },
    },
  },
};

export const ParagraphCaptionExpanded: Story = {
  args: {
    children: 'Caption text for images or additional context',
    variant: 'PARAGRAPH_CAPTION_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_CAPTION_EXPANDED'>
  Caption text for images or additional context
</Text>`,
      },
    },
  },
};

export const WithTextAlign: Story = {
  args: {
    align: 'center',
    children: 'This text is center aligned',
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_MEDIUM_EXPANDED' align='center'>
  This text is center aligned
</Text>`,
      },
    },
  },
};

export const WithTextTransform: Story = {
  args: {
    children: 'This text is uppercase',
    transform: 'uppercase',
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_MEDIUM_EXPANDED' transform='uppercase'>
  This text is uppercase
</Text>`,
      },
    },
  },
};

export const WithTruncate: Story = {
  args: {
    children:
      'This is a very long text that will be truncated with an ellipsis when it exceeds the available width',
    truncate: true,
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_MEDIUM_EXPANDED' truncate={true}>
  This is a very long text that will be truncated with an ellipsis when it exceeds the available width
</Text>`,
      },
    },
  },
};

export const WithMaxTruncatedLines: Story = {
  args: {
    children:
      'This is a long text that will be truncated after 2 lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    maxTruncatedLines: 2,
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_MEDIUM_EXPANDED' maxTruncatedLines={2}>
  This is a long text that will be truncated after 2 lines. Lorem ipsum dolor sit amet...
</Text>`,
      },
    },
  },
};

export const WithCustomComponent: Story = {
  args: {
    children: 'This renders as a span element',
    component: 'span',
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text variant='PARAGRAPH_MEDIUM_EXPANDED' component='span'>
  This renders as a span element
</Text>`,
      },
    },
  },
};

export const AsLink: Story = {
  args: {
    children: 'Click here to visit example.com',
    component: 'a',
    url: 'https://example.com',
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text
  variant='PARAGRAPH_MEDIUM_EXPANDED'
  component='a'
  url='https://example.com'
>
  Click here to visit example.com
</Text>`,
      },
    },
  },
};

export const WithAriaLabel: Story = {
  args: {
    ['aria-label']: 'Important notification text',
    children: 'This text has an aria-label for accessibility',
    variant: 'PARAGRAPH_MEDIUM_EXPANDED',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text
  variant='PARAGRAPH_MEDIUM_EXPANDED'
  aria-label='Important notification text'
>
  This text has an aria-label for accessibility
</Text>`,
      },
    },
  },
};

export const Text: Story = {
  args: {
    children: 'Text',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: "<Text variant='DEFAULT'>Text</Text>",
      },
    },
  },
};
