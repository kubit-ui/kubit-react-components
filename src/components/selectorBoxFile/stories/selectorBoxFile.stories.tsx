import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { IconPositionType } from '@/components/button';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { SelectorBoxFile as Story } from '../selectorBoxFile';
import { ISelectorBoxFile, SelectorBoxFileStateType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';
const meta = {
  title: 'Components/Forms/SelectorBoxFile',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [filename, setFilename] = React.useState();
  const [success, setSuccess] = React.useState(false);

  const onClick = e => {
    if (success) {
      e.preventDefault();
      e.target.value = '';
      setFilename(undefined);
      setSuccess(false);
    }
  };

  const onchange = e => {
    if (e.target.files?.[0]?.name) {
      setFilename(e.target.files?.[0]?.name);
      setSuccess(true);
    }
  };

  return (
    <Story
      {...args}
      filename={filename}
      multiple={false}
      success={success}
      onChange={onchange}
      onClick={onClick}
    />
  );
};

const commonArgs: ISelectorBoxFile = {
  variant: Object.values(
    variantsObject[themeSelected].SelectorBoxFileVariantType || {}
  )[0] as string,
  loading: false,
  success: false,
  error: false,
  disabled: false,
  title: { content: 'Example of use' },
  subtitle: { content: 'You can select a file and delete it after adding' },
  description: { content: 'Description' },
  button: {
    content: 'Link description',
    icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'altText' },
    iconPosition: IconPositionType.LEFT,
  },
  tooltip: {
    title: { content: 'This is a tooltip title' },
    content: { content: 'This is a tooltip content' },
  },
  tooltipIcon: { icon: ICONS.ICON_PLACEHOLDER },
  fileExtension: ['pdf', 'jpeg'],
  containerBoxStateContent: {
    [SelectorBoxFileStateType.DEFAULT]: {
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      actionText: { content: 'Browse and select a file' },
      description: { content: 'and upload it here' },
    },
    [SelectorBoxFileStateType.LOADING]: {
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      actionText: { content: 'Cancel upload' },
    },
    [SelectorBoxFileStateType.SUCCESS]: {
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      actionText: { content: 'Delete file' },
      actionIcon: { icon: ICONS.ICON_PLACEHOLDER },
    },
    [SelectorBoxFileStateType.ERROR]: {
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      actionText: { content: 'Try again' },
      actionIcon: { icon: ICONS.ICON_PLACEHOLDER },
    },
    [SelectorBoxFileStateType.DISABLED]: {
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      actionText: { content: 'Browse and select a file' },
      description: { content: 'and upload it here' },
    },
  },
};

export const SelectorBoxFile: Story = {
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.SELECTOR_BOX_FILE],
  },
};

export const SelectorBoxFileWithCtv: Story = {
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  args: {
    ...commonArgs,
    ctv: {
      title: {
        color: 'red',
      },
    },
  },
};

const StoryWithHooksValidation = args => {
  const [filename, setFilename] = React.useState<string | undefined>(undefined);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onClick = e => {
    if (success) {
      e.preventDefault();
      e.target.value = '';
      setFilename(undefined);
      setSuccess(false);
    }
  };

  const isValidExtension = (file: File) => {
    if (file) {
      const validExtensions = ['pdf', 'jpeg', 'heic'];
      const fileExtension = file.type;
      if (fileExtension) {
        return validExtensions.some(substring => fileExtension.includes(substring));
      }
      // if extension is not available natively...
      const extension = file.name.split('.').pop();
      return extension ? validExtensions.includes(extension) : false;
    }
    return false;
  };

  const onChangeWithValidation = e => {
    setError(false);
    const file: File = e.target.files?.[0];
    if (file) {
      setFilename(file.name);
      if (isValidExtension(file)) {
        setSuccess(true);
      } else {
        setError(true);
      }
    }
  };

  return (
    <Story
      {...args}
      error={error}
      filename={filename}
      multiple={false}
      success={success}
      onChange={onChangeWithValidation}
      onClick={onClick}
    />
  );
};

export const SelectorBoxFileExtensionValidation: Story = {
  render: ({ ...args }) => <StoryWithHooksValidation {...args} />,
  args: {
    ...commonArgs,
    fileExtension: undefined,
    title: { content: 'Example for custom file extension handling' },
    subtitle: {
      content: 'Do not add fileExtension prop and use onChange to validate the file extension',
    },
    description: {
      content:
        'This way you can put whatever you want to check the file with onChange prop. \
      This is useful for some edge cases where extensions are not supported natively by the OS, \
      like it happens with .heic files for Windows. \
      This example allows .pdf, .jpeg and .heic files.',
    },
    errorMessage: {
      content: 'This is a custom error message that launches when error property is set to true',
    },
    maxSize: 20,
    errorMaxSizeMessage: { content: 'The error message for maxSize can still be displayed' },
  },
};
