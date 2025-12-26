import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioButtonVariantType } from '@/lib/designSystem/kubit/components/radioButton/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { RadioButton as Story } from './../radioButton';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/radioButtonGroup/components/radioButton',
    layout: 'centered',
  },
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/RadioButton',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  checked: false,
  label: { content: 'This is a radio button' },
  name: 'example',
  subTitle: { content: 'This is a subtitle' },
  value: 'value',
  variant: RadioButtonVariantType.DEFAULT,
};

export const RadioButton: Story = {
  args: {
    ...commonArgs,
  },
};
// Interactive story with multiple radio buttons
const MultipleRadioButtonsTemplate = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const options = [
    {
      label: 'Option 1',
      subTitle: 'First option with description',
      value: 'option1',
    },
    {
      label: 'Option 2',
      subTitle: 'Second option with description',
      value: 'option2',
    },
    {
      label: 'Option 3',
      value: 'option3',
    },
    {
      disabled: true,
      label: 'Disabled Option',
      subTitle: 'This option is disabled',
      value: 'disabled',
    },
    {
      error: true,
      errorIcon: { altText: 'Error', icon: ICONS.CLOSE },
      errorMessage: 'This option has an error',
      label: 'Option with Error',
      value: 'error',
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <h3>Select your preferred option:</h3>
      {options.map((option) => (
        <Story
          key={option.value}
          checked={selectedValue === option.value}
          disabled={option.disabled}
          error={option.error}
          errorIcon={option.errorIcon}
          errorMessage={option.errorMessage}
          label={{ content: option.label }}
          name="multiple-options"
          subTitle={option.subTitle ? { content: option.subTitle } : undefined}
          value={option.value}
          variant={RadioButtonVariantType.DEFAULT}
          onChange={handleChange}
        />
      ))}
      {selectedValue && (
        <div
          style={{
            backgroundColor: '#F0F0F0',
            borderRadius: '4px',
            marginTop: '16px',
            padding: '8px',
          }}
        >
          <strong>Selected value:</strong> {selectedValue}
        </div>
      )}
    </div>
  );
};
export const MultipleRadioButtons = {
  args: {},
  render: (): JSX.Element => <MultipleRadioButtonsTemplate />,
};
// Story showcasing different variants if available
export const VariousStates = {
  args: {},
  render: (): JSX.Element => (
    <div
      style={{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '600px',
      }}
    >
      <div>
        <h4>Basic States</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Story
            checked={false}
            label={{ content: 'Unchecked' }}
            name="states-basic"
            value="unchecked"
            variant={RadioButtonVariantType.DEFAULT}
          />
          <Story
            checked={true}
            label={{ content: 'Checked' }}
            name="states-basic"
            value="checked"
            variant={RadioButtonVariantType.DEFAULT}
          />
        </div>
      </div>
      <div>
        <h4>Disabled States</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Story
            checked={false}
            disabled={true}
            label={{ content: 'Disabled Unchecked' }}
            name="states-disabled"
            value="disabled-unchecked"
            variant={RadioButtonVariantType.DEFAULT}
          />
          <Story
            checked={true}
            disabled={true}
            label={{ content: 'Disabled Checked' }}
            name="states-disabled"
            value="disabled-checked"
            variant={RadioButtonVariantType.DEFAULT}
          />
        </div>
      </div>
      <div>
        <h4>With Subtitles</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Story
            checked={false}
            label={{ content: 'Option with subtitle' }}
            name="states-subtitle"
            subTitle={{ content: 'Additional information about this option' }}
            value="with-subtitle"
            variant={RadioButtonVariantType.DEFAULT}
          />
          <Story
            checked={true}
            label={{ content: 'Selected with subtitle' }}
            name="states-subtitle"
            subTitle={{ content: 'This option is currently selected' }}
            value="selected-subtitle"
            variant={RadioButtonVariantType.DEFAULT}
          />
        </div>
      </div>
      <div>
        <h4>Error States</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Story
            checked={false}
            error={true}
            errorIcon={{ altText: 'Error', icon: ICONS.CLOSE }}
            errorMessage="This option has validation errors"
            label={{ content: 'Option with error' }}
            name="states-error"
            value="error-option"
            variant={RadioButtonVariantType.DEFAULT}
          />
        </div>
      </div>
    </div>
  ),
};
