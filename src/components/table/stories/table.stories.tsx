import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Table as Story } from '../table';
import { argtypes } from './argtypes';
import { mockBasicTable } from './mockBasic';
import { mockCustomizableTable } from './mockCustomizable';
import { mockTableWithDivider } from './mockDivider';
import { mockTableWithLineSeparatorAndCenterFooter } from './mockLineSeparatorAndFooter';
import { mockTableShowingLineSeparatorHeader } from './mockShowLineSeparatorHeader';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/Table',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/table',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3928-36782&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Table: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TableVariantType || {})[0] as string,
    headerVariant: Object.values(
      variantsObject[themeSelected].TableHeaderVariantType || {}
    )[0] as string,
    captionDescription: 'Table caption',
    ['aria-label']: 'ariaLabel table',
    tBodyScrollArias: { 'aria-label': 'ariaLabel tBody when scroll' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE],
    ...mockBasicTable,
  },
};

export const TableWithLineSeparator: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TableVariantType || {})[0] as string,
    headerVariant: Object.values(
      variantsObject[themeSelected].TableHeaderVariantType || {}
    )[0] as string,
    captionDescription: 'Table caption',
    ['aria-label']: 'ariaLabel table',
    formatListInMobile: true,
    formatSideBySideInList: true,
    tBodyScrollArias: { 'aria-label': 'ariaLabel tBody when scroll' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE],
    ...mockTableWithLineSeparatorAndCenterFooter,
  },
};

export const TableShowingLineSeparatorHeader: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TableVariantType || {})[0] as string,
    headerVariant: Object.values(
      variantsObject[themeSelected].TableHeaderVariantType || {}
    )[0] as string,
    captionDescription: 'Table caption',
    ['aria-label']: 'ariaLabel table',
    formatListInMobile: true,
    formatSideBySideInList: true,
    tBodyScrollArias: { 'aria-label': 'ariaLabel tBody when scroll' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE],
    ...mockTableShowingLineSeparatorHeader,
  },
};

export const TableWithDivider: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TableVariantType || {})[0] as string,
    headerVariant: Object.values(
      variantsObject[themeSelected].TableHeaderVariantType || {}
    )[0] as string,
    captionDescription: 'Table caption',
    ['aria-label']: 'ariaLabel table',
    tBodyScrollArias: { 'aria-label': 'ariaLabel tBody when scroll' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE],
    ...mockTableWithDivider,
  },
};

export const TableCustomizable: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TableVariantType || {})[0] as string,
    captionDescription: 'Table caption',
    ['aria-label']: 'ariaLabel table',
    lineSeparatorTopOnHeader: true,
    lineSeparatorBottomOnHeader: true,
    tBodyScrollArias: { 'aria-label': 'ariaLabel tBody when scroll' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE],
    ...mockCustomizableTable,
  },
};

export const TableWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TableVariantType || {})[0] as string,
    headerVariant: Object.values(
      variantsObject[themeSelected].TableHeaderVariantType || {}
    )[0] as string,
    captionDescription: 'Table caption',
    ['aria-label']: 'ariaLabel table',
    formatListInMobile: true,
    formatSideBySideInList: true,
    tBodyScrollArias: { 'aria-label': 'ariaLabel tBody when scroll' },
    ...mockBasicTable,
    ctv: {
      table: {
        background_color: 'red',
        padding: '10px',
      },
    },
  },
};
