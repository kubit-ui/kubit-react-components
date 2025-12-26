import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container as ContainerStory } from '../container';
import { argtypes } from './argtypes';

const meta: Meta<typeof ContainerStory> = {
  argTypes: argtypes(),
  component: ContainerStory,
  tags: ['autodocs', 'containment'],
  title: 'Components/Containment/Container',
};

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <replace-content>Replace here your Content</replace-content>,
  title: "I'm a container",
  variant: 'DEFAULT',
};

export const Container: Story = {
  args: {
    ...commonArgs,
  },
};

export const ContainerWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      container: 'custom-background',
    },
  },
};
