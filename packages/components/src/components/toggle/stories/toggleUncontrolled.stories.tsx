import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToggleVariant } from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { NOTE_COLORS, Note } from '@/lib/storybook/components/note/note';

import { ToggleUncontrolled as ToggleUncontrolledStory } from '../toggleUnControlled';
import { argtypes } from './argtypesUncontrolled';

const meta = {
  argTypes: argtypes(),
  component: ToggleUncontrolledStory,
  decorators: [
    (Story: React.ComponentType): React.ReactElement => {
      return (
        <>
          <Note
            heading="Take into account"
            text={[
              <span key="note-span">
                Uncontrolled version handles state inside, use onChange callback
                to receive information about the state
              </span>,
            ]}
            theme={NOTE_COLORS.LIGHT_BLUE}
          />
          <Story />
        </>
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['actions'],
  title: 'Components/Forms/Toggle/Uncontrolled',
} satisfies Meta<typeof ToggleUncontrolledStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const commonArgs = {
  'aria-label': 'Toggle uncontrolled',
  defaultChecked: false,
  variant: ToggleVariant.REGULAR,
};

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export const WithIcons: Story = {
  args: {
    ...commonArgs,
    'aria-label': 'Uncontrolled toggle with icons',
    leftIcon: { icon: ICONS.CLOSE },
    rightIcon: { icon: ICONS.CHECKMARK_THICK },
  },
};
