import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Text } from '@/components/text/text';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';
import { InputDecorationVariantType } from '@/lib/designSystem/kubit/components/inputDecoration/variants';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { InputProps } from '../types/input';

import { NOTE_COLORS, Note } from '../../../lib/storybook/components/note/note';
import { Icon } from '../../icon/icon';
import { InputBase } from '../../inputBase/inputBase';
import { InputDecoration } from '../../inputDecoration/inputDecoration';
import { Input as Story } from '../input';
import { argtypes } from './argtypes';

const StoryWithHooks = () => {
  const [marginLeft, _setMarginLeft] = useState('0');

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        justifyContent: 'center',
      }}
    >
      <Note
        heading="Input Component Examples"
        text={[
          'Different results can be obtained by using the different components that make up the input.',
          'This is an example including:',
          'InputLabel, InputBase and InputDecoration components',
          'a text and icon components for the messages',
          'You can see the code in the documentation section.',
        ]}
        theme={NOTE_COLORS.BLUE}
      />
      <div
        style={{
          alignItems: 'baseline',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            justifyContent: 'center',
            marginTop: '32px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '8px',
            }}
          >
            <InputBase
              additionalClasses={{ input_base: 'custom-input-base' }}
              variant={InputBaseVariantType.STANDARD}
            />
            <div
              style={{
                border: '1px solid black',
                display: 'flex',
              }}
            >
              <InputDecoration
                decoration={{
                  altText: 'alt text icon',
                  icon: ICONS.PLACEHOLDER,
                }}
                variant={InputDecorationVariantType.STANDARD}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginLeft: marginLeft,
            }}
          >
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                gap: '4px',
              }}
            >
              <Icon
                color="rgb(204, 0, 0)"
                height="16px"
                icon={ICONS.PLACEHOLDER}
                width="16px"
              />
              <Text color="rgb(204, 0, 0)" variant={TextVariantType.DEFAULT}>
                Error Message
              </Text>
            </div>
            <Text variant={TextVariantType.DEFAULT}>Help message</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/Input/InputComponentsExamples',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: InputProps = {
  ['aria-label']: 'inputLabelId',
  defaultValue: 'Default value',
  disabled: false,
  id: 'inputId',
  leftDecoration: {
    decoration: {
      altText: 'alt text icon',
      icon: ICONS.PLACEHOLDER,
      onClick: () => {
        return null;
      },
    },
    variant: InputDecorationVariantType.STANDARD,
  },
  placeholder: 'Placeholder',
  required: true,
  rightDecoration: {
    decoration: {
      altText: 'alt text icon',
      icon: ICONS.PLACEHOLDER,
      onClick: () => {
        return null;
      },
    },
    variant: InputDecorationVariantType.STANDARD,
  },
  type: 'text',
  variant: InputVariantType.STANDARD,
};

export const InputComponentsExamples: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: '',
      },
    },
  },
};
