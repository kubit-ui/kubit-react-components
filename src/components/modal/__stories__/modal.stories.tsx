import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { ModalVariantType } from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { ReplaceContent } from '@/lib/storybook/components/replaceContent/replaceContent';

import { ModalControlled as Story } from '../modalControlled';
import { argtypes } from './argtypes';

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
  tags: ['autodocs', 'containment'],
  title: 'Components/Containment/Modal',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  closeIcon: { icon: ICONS.CLOSE },
  content: <ReplaceContent>Sixth slide</ReplaceContent>,
  contentScrollArias: {
    'aria-label': 'Modal content scroll',
  },
  dragIcon: { icon: ICONS.DRAG },
  popover: {
    focusFirstDescendantAutomatically: true,
    variant: 'MODAL',
  },
  title: { content: 'Modal title' },
  variant: ModalVariantType.DEFAULT,
};

export const Modal: Story = {
  args: {
    ...commonArgs,
  },
};
