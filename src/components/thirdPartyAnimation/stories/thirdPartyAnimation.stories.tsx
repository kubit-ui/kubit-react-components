import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ThirdPartyAnimation as Story } from '../thirdPartyAnimation';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/ThirdPartyAnimation',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const ThirdPartyAnimation: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].ThirdPartyAnimationVariantType || {}
    )[0] as string,
    ['aria-label']: 'animation',
    height: '125px',
    width: '125px',
    themeArgs: themesObject[themeSelected][STYLES_NAME.THIRD_PARTY_ANIMATION],
  },
};
