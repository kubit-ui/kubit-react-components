import type { Meta, StoryObj } from '@storybook/react-vite';

import { NabVar as Story } from '../navBar';

const meta = {
  component: Story,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/NavBar',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const leftItems = [
  <a key="home" href="#home">
    Home
  </a>,
  <a key="about" href="#about">
    About
  </a>,
];

const centerItems = [
  <a key="services" href="#services">
    Services
  </a>,
];

const rightItems = [
  <a key="contact" href="#contact">
    Contact
  </a>,
  <a key="login" href="#login">
    Login
  </a>,
];

const commonArgs = {
  centerItems,
  component: 'header' as const,
  direction: 'horizontal' as const,
  focusOrder: ['left' as const, 'center' as const, 'right' as const],
  leftItems,
  rightItems,
  variant: 'DEFAULT',
};

export const NabVar: Story = {
  args: {
    ...commonArgs,
  },
};
