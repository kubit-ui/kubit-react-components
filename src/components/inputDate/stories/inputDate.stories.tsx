import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { ERROR_EXECUTION } from '@/components/input/types';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { InputTypeType } from '@/types/inputType';
import { formatDateToUTC } from '@/utils';

import { InputDate as Story } from '../inputDate';
import { IInputDate } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputDate',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputDate',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-30000&mode=dev',
  },
  render: ({ ...args }) => (
    <div style={{ width: '50%' }}>
      <Story
        {...args}
        initialDate={args.initialDate && formatDateToUTC(args.initialDate)}
        initialSecondDate={args.initialSecondDate && formatDateToUTC(args.initialSecondDate)}
        maxDate={args.maxDate && formatDateToUTC(args.maxDate)}
        minDate={formatDateToUTC(args.minDate)}
      />
    </div>
  ),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputDate = {
  variant: Object.values(variantsObject[themeSelected].InputDateVariantType || {})[0] as string,
  dateSeparator: 'to',
  label: { content: 'label', requiredSymbol: '*' },
  format: 'DD-MM-YYYY',
  placeholder: 'Date',
  locale: 'en-EN',
  maxDate: formatDateToUTC(new Date()),
  minDate: formatDateToUTC(new Date('2023-07-05')),
  // initialDate: new Date('2024-07-10'),
  // initialSecondDate: new Date('05-01-2000'),
  defaultDate: new Date(),
  rightIcon: { icon: ICONS.ICON_PLACEHOLDER },
  closeIcon: { icon: ICONS.ICON_CLOSE },
  type: InputTypeType.TEXT,
  today: 'Today, ',
  errorMessage: { content: 'Error message' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'error' },
  hasRange: false,
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
  calendar: {
    configCalendar: {
      leftArrowIcon: { icon: ICONS.ICON_CHEVRON_LEFT, ['aria-label']: 'Previous month' },
      rightArrowIcon: { icon: ICONS.ICON_CHEVRON_RIGHT, ['aria-label']: 'Next month' },
      variantSelectorButton: Object.keys(
        variantsObject[themeSelected].ButtonVariantType || {}
      )[0] as string,
      sizeSelectorButton: Object.keys(
        variantsObject[themeSelected].ButtonSizeType || {}
      )[0] as string,
    },
  },
  configAccesibility: {
    openInputIconAriaLabel: 'show calendar',
    closeInputIconAriaLabel: 'close calendar',
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
    backToMonthAriaLabel: 'Back to month view',
  },
  disabledDates: [new Date('2020-01-01'), new Date('2020-01-05')],
  errorExecution: ERROR_EXECUTION.ON_BLUR,
};

export const InputDate: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_DATE],
  },
};

export const InputDateWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      EMPTY: {
        inputWrapperContainer: {
          background_color: 'pink',
          padding_left: '10px',
          padding_right: '10px',
          padding_bottom: '10px',
        },
      },
    },
  },
};
