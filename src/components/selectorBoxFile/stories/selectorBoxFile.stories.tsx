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
  render: ({ ...args }) => <StoryWithHooks {...args} />,
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
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.SELECTOR_BOX_FILE],
  },
};

export const SelectorBoxFileWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      title: {
        color: 'red',
      },
    },
  },
};
