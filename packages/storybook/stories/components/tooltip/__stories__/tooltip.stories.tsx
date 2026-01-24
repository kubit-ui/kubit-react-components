import {
  type POSITIONS,
  Tooltip as Story,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Story,
  parameters: {
    docs: {
      description: {
        component: `
        Tooltip component for displaying contextual information.

         ## Implementation

          This component uses [Floating UI](https://floating-ui.com/docs/platform) for intelligent positioning,
          ensuring that tooltips are displayed correctly even in space-constrained situations,
          automatically adapting itself to stay within the viewport and providing accurate positioning with respect to the
          reference element.

          ## Features

          - Adaptive positioning (top, bottom, left, right)
          - Overflow detection and automatic repositioning
          - Support for custom content
          - Integrated accessibility
        `,
      },
    },
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-25713&mode=dev',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/tooltip',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Feedback/Tooltip',
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const BasicTop: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Hover me',
    content: { content: 'Tooltip content' },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip positioned at the top of the trigger element.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{ content: 'Tooltip content' }}
>
  Hover me
</TooltipUnControlled>`,
      },
    },
  },
};

export const BasicBottom: StoryType = {
  args: {
    align: POSITIONS.BOTTOM,
    children: 'Hover me',
    content: { content: 'Bottom tooltip' },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned at the bottom.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.BOTTOM}
  content={{ content: 'Bottom tooltip' }}
>
  Hover me
</TooltipUnControlled>`,
      },
    },
  },
};

export const BasicLeft: StoryType = {
  args: {
    align: POSITIONS.LEFT,
    children: 'Hover me',
    content: { content: 'Left tooltip' },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned on the left side.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.LEFT}
  content={{ content: 'Left tooltip' }}
>
  Hover me
</TooltipUnControlled>`,
      },
    },
  },
};

export const BasicRight: StoryType = {
  args: {
    align: POSITIONS.RIGHT,
    children: 'Hover me',
    content: { content: 'Right tooltip' },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned on the right side.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.RIGHT}
  content={{ content: 'Right tooltip' }}
>
  Hover me
</TooltipUnControlled>`,
      },
    },
  },
};

export const WithLongContent: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Hover for long content',
    content: {
      content:
        'This is a longer tooltip content that demonstrates how the tooltip handles multiple lines of text and wraps appropriately.',
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with longer text content that wraps to multiple lines.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{
    content: 'This is a longer tooltip content that demonstrates how the tooltip handles multiple lines of text.'
  }}
>
  Hover for long content
</TooltipUnControlled>`,
      },
    },
  },
};

export const WithScrollableContent: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Hover for scrollable content',
    content: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    contentScrollArias: {
      'aria-label': 'Tooltip content scroll',
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with scrollable content for very long text.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{
    content: 'Very long content...'
  }}
  contentScrollArias={{ 'aria-label': 'Tooltip content scroll' }}
>
  Hover for scrollable content
</TooltipUnControlled>`,
      },
    },
  },
};

export const WithTriggerAsButton: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Button trigger',
    content: { content: 'Tooltip on button' },
    triggerAsButton: {
      'aria-label': 'Tooltip trigger button',
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip with trigger element styled as a button with proper ARIA attributes.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{ content: 'Tooltip on button' }}
  triggerAsButton={{ 'aria-label': 'Tooltip trigger button' }}
>
  Button trigger
</TooltipUnControlled>`,
      },
    },
  },
};

export const AsModal: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Hover for modal',
    content: { content: 'This tooltip behaves as a modal' },
    tooltipAsModal: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip configured to behave as a modal with focus trap.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{ content: 'This tooltip behaves as a modal' }}
  tooltipAsModal={true}
>
  Hover for modal
</TooltipUnControlled>`,
      },
    },
  },
};

export const Disabled: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Disabled tooltip',
    content: { content: 'This will not show' },
    disabled: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in disabled state will not appear on hover.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{ content: 'This will not show' }}
  disabled={true}
>
  Disabled tooltip
</TooltipUnControlled>`,
      },
    },
  },
};

export const WithCallback: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Hover me',
    content: { content: 'Tooltip with callback' },
    onOpenClose: (open: boolean) => {
      // eslint-disable-next-line no-console
      console.log('Tooltip open:', open);
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with callback to track open/close state.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{ content: 'Tooltip with callback' }}
  onOpenClose={(open) => console.log('Tooltip open:', open)}
>
  Hover me
</TooltipUnControlled>`,
      },
    },
  },
};

export const Tooltip: StoryType = {
  args: {
    align: POSITIONS.TOP,
    children: 'Hover me',
    content: { content: 'Tooltip content' },
    contentScrollArias: {
      'aria-label': 'Tooltip content scroll',
    },
    tooltipAsModal: false,
    triggerAsButton: {
      'aria-label': 'Tooltip trigger',
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete tooltip example with all features.',
      },
      source: {
        code: `<TooltipUnControlled
  variant='DEFAULT'
  align={POSITIONS.TOP}
  content={{ content: 'Tooltip content' }}
  contentScrollArias={{ 'aria-label': 'Tooltip content scroll' }}
  triggerAsButton={{ 'aria-label': 'Tooltip trigger' }}
  tooltipAsModal={false}
>
  Hover me
</TooltipUnControlled>`,
      },
    },
  },
};
