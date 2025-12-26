import type { Meta, StoryObj } from '@storybook/react';

import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';
import { InputDecorationVariantType } from '@/lib/designSystem/kubit/components/inputDecoration/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { LoaderStory as Loader } from '@/lib/storybook/assets/loader/loader';

import { NOTE_COLORS, Note } from '../../../lib/storybook/components/note/note';
import { Input as Story } from '../input';
import type { InputProps } from '../types/input';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Note
        heading="Input Component Structure"
        text={[
          <span key="input-components-description">
            Input is built with the following components: <i>InputLabel</i>,{' '}
            <i>InputDecoration</i> and <i>InputBase</i>.
          </span>,
          'You can see the code in the documentation section.',
        ]}
        theme={NOTE_COLORS.BLUE}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story {...args} />
      </div>
    </div>
  );
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/Input/Input',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: InputProps = {
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
  },
  type: 'text',
  variant: InputVariantType.STANDARD,
};

export const Input: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const Input = args => {
        return (
          <InputContainerStyled ref={ref}>
      {props.leftDecoration && <InputDecoration {...props.leftDecoration} />}
      <InputAndLabelContainerStyled $styles={props.styles}>
        {props.label && <InputLabel {...props.label} />}
        {props.inputProps && <InputBase {...props.inputProps} />}
      </InputAndLabelContainerStyled>
      {props.rightDecoration && <InputDecoration {...props.rightDecoration} />}
    </InputContainerStyled>
        );
      };`,
      },
    },
  },
};
export const InputWithLoader: Story = {
  args: {
    ...commonArgs,
    rightDecoration: {
      ...commonArgs.rightDecoration,
      decoration: {
        ...commonArgs.rightDecoration?.decoration,
        icon: <Loader />,
      },
      variant: InputDecorationVariantType.STANDARD,
    },
  },
};
