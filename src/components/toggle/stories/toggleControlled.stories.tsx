import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { ToggleVariant } from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { NOTE_COLORS, Note } from '@/lib/storybook/components/note/note';

import { ToggleControlled as ToggleControlledStory } from '../toggleControlled';
import { argtypes } from './argtypesControlled';

const meta = {
  argTypes: argtypes(),
  component: ToggleControlledStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'actions'],
  title: 'Components/Forms/Toggle/Controlled',
} satisfies Meta<typeof ToggleControlledStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Template for stories with state
const ControlledTemplate = (
  args: Parameters<typeof ToggleControlledStory>[0],
): JSX.Element => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleToggle = (newChecked: boolean): void => {
    setChecked(newChecked);
    args.onToggle?.(newChecked);
  };

  return (
    <ToggleControlledStory
      {...args}
      checked={checked}
      onToggle={handleToggle}
    />
  );
};

const commonArgs = {
  'aria-label': 'Toggle controlled default',
  checked: false,
  onToggle: (checked: boolean) => {
    // eslint-disable-next-line no-console
    console.log('Toggle changed:', checked);
  },
  variant: ToggleVariant.REGULAR,
};

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement => {
      return (
        <>
          <Note
            heading="Take into account"
            text={[
              <span key="note-span">
                This version is controlled. Change the value of the toggle using
                the checked prop
              </span>,
            ]}
            theme={NOTE_COLORS.LIGHT_BLUE}
          />
          <Story />
        </>
      );
    },
  ],
};

export const ConfiguredWithIcons: Story = {
  args: {
    ...commonArgs,
    'aria-label': 'Toggle with icons',
    leftIcon: { icon: ICONS.CLOSE },
    rightIcon: { icon: ICONS.CHECKMARK_THICK },
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement => {
      return (
        <>
          <Note
            heading="Take into account"
            text={[
              <span key="note-span-with-icons">
                This has icons and state management from outside the component,
                click on the toggle
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
    docs: {
      source: {
        code: `// Template for stories with state
const ControlledTemplate = (args: Parameters<typeof ToggleControlled>[0]): JSX.Element => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleToggle = (newChecked: boolean): void => {
    setChecked(newChecked);
    args.onToggle?.(newChecked);
  };

  return <ToggleControlled {...args} checked={checked} onToggle={handleToggle} />;
};`,
      },
    },
  },
  render: ControlledTemplate,
};
