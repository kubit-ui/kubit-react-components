import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { BackToTopUnControlled as Story } from '../backToTopUnControlled';
import { IBackToTopUncontrolled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const AuxContent = () => (
  <div style={{ background: '#d8d8d8', color: 'black', width: '100%' }}>
    <div style={{ height: '2000px', padding: '1rem' }}>Scroll to show the button</div>
    <footer
      style={{ background: 'red', color: 'black', width: '100%', height: '200px', padding: '1rem' }}
    >
      Footer
    </footer>
  </div>
);

const meta = {
  title: 'Components/Actions/BacktoTop',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/backToTop',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-9956&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => {
    return (
      <>
        <AuxContent />
        <Story {...args} />
      </>
    );
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IBackToTopUncontrolled = {
  variant: Object.values(variantsObject[themeSelected].BackToTopVariantsType || {})[0] as string,
  icon: { icon: ICONS.ICON_PLACEHOLDER },
};

export const BackToTop: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.BACK_TO_TOP],
  },
};

export const BackToTopWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      DEFAULT: {
        icon: {
          color: 'blue',
        },
      },
    },
  },
};
