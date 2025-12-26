import type { Meta, StoryObj } from '@storybook/react-vite';

import { TooltipVariantType } from '@/lib/designSystem/kubit/components/tooltip/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { POSITIONS } from '@/lib/types/positions/positions';

import { TooltipUnControlled as Story } from '../tooltipUnControlled';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component: `
        Component.
          
         ## Implementation
          
          This component uses [Floating UI](https://floating-ui.com/docs/platform) for intelligent positioning, 
          ensuring that tooltips are displayed correctly even in space-constrained situations, 
          automatically adapting itself to stay within the viewport and providing accurate positioning with respect to the
          with respect to the reference element.
          
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
  tags: ['autodocs', 'feedback'],
  title: 'Components/Feedback/Tooltip',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

/* TO TEST THE BEHAVIOUR, REMOVE */

const StoryWithHooks = (args) => {
  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gap: '40px',
    gridTemplateAreas:
      '"top-left top top-right" "left center right" "bottom-left bottom bottom-right"',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    height: '500px',
    position: 'relative',
    width: '500px',
  };

  const itemStyle = {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  };

  // Clone args and change alignments based on position
  const createTooltipWithAlign = (position, align) => {
    const newArgs = { ...args, align };
    return (
      <div style={{ ...itemStyle, gridArea: position }}>
        <Story {...newArgs} />
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      {createTooltipWithAlign('top-left', POSITIONS.TOP)}
      {createTooltipWithAlign('top', POSITIONS.TOP)}
      {createTooltipWithAlign('top-right', POSITIONS.TOP)}

      {createTooltipWithAlign('left', POSITIONS.LEFT)}
      <div style={{ ...itemStyle, gridArea: 'center' }}>
        <Story {...args}>Center</Story>
      </div>
      {createTooltipWithAlign('right', POSITIONS.RIGHT)}

      {createTooltipWithAlign('bottom-left', POSITIONS.BOTTOM)}
      {createTooltipWithAlign('bottom', POSITIONS.BOTTOM)}
      {createTooltipWithAlign('bottom-right', POSITIONS.BOTTOM)}
    </div>
  );
};

const commonArgs = {
  align: POSITIONS.TOP,
  children: 'Hover me',
  content: { content: 'Tooltip content' },
  contentScrollArias: {
    'aria-label': 'Tooltip content scroll',
  },
  title: { content: 'Tootltip title' },
  tooltipAsModal: false,
  triggerAsButton: {
    'aria-label': 'Tooltip trigger',
  },
  variant: TooltipVariantType.DEFAULT,
};

export const Tooltip: Story = {
  args: {
    ...commonArgs,
  },
  render: (args) => <StoryWithHooks {...args} />,
};

export const TooltipComplex: Story = {
  args: {
    ...commonArgs,
    closeIcon: { altText: 'Close icon', icon: ICONS.PLACEHOLDER },
    tooltipAsModal: true,
    variant: TooltipVariantType.DEFAULT,
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
};
