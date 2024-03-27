import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { additionalInfoAction } from '../../input/components/stories/stories';
import { TextArea as Story } from '../textArea';
import { ITextArea } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/TextArea',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/textArea',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [value, setValue] = React.useState(undefined);

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: '300px' }}>
      <Story {...args} value={value} onChange={onChange} />
    </div>
  );
};

const commonArgs: ITextArea = {
  variant: Object.values(variantsObject[themeSelected].TextAreaVariantType || {})[0] as string,
  label: { content: 'label', requiredSymbol: '*' },
  additionalInfo: additionalInfoAction(themeSelected),
  errorMessage: { content: 'errorMessage' },
  placeholder: 'placeholder',
  maxLength: 100,
  helpMessage: { content: 'helpMessage' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER },
  title: { content: 'Title' },
  screenReaderTextCount: 'Example of screen reader text count',
};

export const TextArea: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TEXTAREA],
  },
};

export const TextAreaWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      EMPTY: {
        label: {
          color: 'red',
        },
      },
    },
  },
};
