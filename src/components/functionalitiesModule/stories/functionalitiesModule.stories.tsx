import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { SummaryDetails } from '@/components/summaryDetails';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { FunctionalitiesModuleUnControlled as Story } from '../functionalitiesModuleUnControlled';
import { IFunctionalitiesModuleUnControlled } from '../types';
import { argtypes } from './argtypes';
import { SECTIONS } from './fixture';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/FunctionalitiesModule',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/functionalitiesModule',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3943-42654&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IFunctionalitiesModuleUnControlled = {
  variant: Object.values(
    variantsObject[themeSelected].FunctionalitiesModuleVariantType || {}
  )[0] as string,
  tabsContainerAriaLabel: 'options',
  tabsConfig: {
    variant: Object.values(variantsObject[themeSelected].TabsVariantType || {})[0] as string,
  },
  sections: SECTIONS,
  hasTitleSection: true,
  defaultSelectedValue: '2',
  trigger: {
    variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].ButtonSizeType || {})[0] as string,
    content: 'Options',
    icon: { icon: ICONS.ICON_PLACEHOLDER },
  },
  actionBottomSheet: {
    title: { content: 'Options' },
    closeIcon: { icon: ICONS.ICON_CLOSE, ['aria-label']: 'ariaLabelCloseIcon' },
  },
};

export const FunctionalitiesModule: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.FUNCTIONALITIES_MODULE],
  },
};

export const FunctionalitiesModuleWithContent: Story = {
  args: {
    ...commonArgs,
    sections: [
      {
        ...SECTIONS[0],
        optionsTitle: { content: 'Options Title' },
        optionsContent: (
          <div style={{ backgroundColor: 'red', padding: '3px' }}>
            <SummaryDetails
              description={{ content: 'description' }}
              icon={{ icon: ICONS.ICON_PLACEHOLDER }}
              title={{ content: 'Summary Details' }}
              variant="SMALL"
            >
              <ReplaceContent width="100%" />
            </SummaryDetails>
          </div>
        ),
      },
      {
        ...SECTIONS[1],
      },
    ],
  },
};

export const FunctionalitiesModuleWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      contentContainer: {
        padding: '2rem',
        background_color: 'pink',
      },
    },
  },
};
