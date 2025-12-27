import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { SelectorBoxFileVariantType } from '@/lib/designSystem/kubit/components/selectorBoxFile/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { LoaderStory as Loader } from '@/lib/storybook/assets/loader/loader';
import { POSITIONS } from '@/lib/types/positions/positions';
import { STATES } from '@/lib/types/states/states';

import type { SelectorBoxFileProps } from '../types/selectorBoxFile';

import { SelectorBoxFile as Story } from '../selectorBoxFile';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  const [filename, setFilename] = useState();
  const [success, setSuccess] = useState(false);

  const onClick = (e) => {
    if (success) {
      e.preventDefault();
      e.target.value = '';
      setFilename(undefined);
      setSuccess(false);
    }
  };

  const onchange = (e) => {
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

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => {
    return <StoryWithHooks {...args} loader={<Loader />} />;
  },
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/SelectorBoxFile',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: SelectorBoxFileProps = {
  button: {
    content: 'Link description',
    icon: { altText: 'altText', icon: ICONS.PLACEHOLDER },
    iconPosition: POSITIONS.LEFT,
  },
  containerBoxStateContent: {
    [STATES.DEFAULT]: {
      actionText: { content: 'Browse and select a file' },
      description: { content: 'and upload it here' },
      icon: { icon: ICONS.PLACEHOLDER },
    },
    [STATES.DISABLED]: {
      actionText: { content: 'Browse and select a file' },
      description: { content: 'and upload it here' },
      icon: { icon: ICONS.PLACEHOLDER },
    },
    [STATES.ERROR]: {
      actionIcon: { icon: ICONS.PLACEHOLDER },
      actionText: { content: 'Try again' },
      icon: { icon: ICONS.PLACEHOLDER },
    },
    [STATES.LOADING]: {
      actionText: { content: 'Cancel upload' },
      icon: { icon: ICONS.PLACEHOLDER },
    },
    [STATES.SUCCESS]: {
      actionIcon: { icon: ICONS.PLACEHOLDER },
      actionText: { content: 'Delete file' },
      icon: { icon: ICONS.PLACEHOLDER },
    },
  },
  description: { content: 'Description' },
  disabled: false,
  error: false,
  fileExtension: ['pdf', 'jpeg'],
  loading: false,
  subtitle: { content: 'You can select a file and delete it after adding' },
  success: false,
  title: { content: 'Example of use' },
  tooltip: {
    content: { content: 'This is a tooltip content' },
    title: { content: 'This is a tooltip title' },
  },
  tooltipIcon: { icon: ICONS.PLACEHOLDER },
  variant: SelectorBoxFileVariantType.DEFAULT,
};

export const SelectorBoxFile: Story = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
};

const StoryWithHooksValidation = (args) => {
  const [filename, setFilename] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onClick = (e) => {
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
        return validExtensions.some((substring) =>
          fileExtension.includes(substring),
        );
      }
      // if extension is not available natively...
      const extension = file.name.split('.').pop();
      return extension ? validExtensions.includes(extension) : false;
    }
    return false;
  };

  const onChangeWithValidation = (e) => {
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
  args: {
    ...commonArgs,
    description: {
      content:
        'This way you can put whatever you want to check the file with onChange prop. \
      This is useful for some edge cases where extensions are not supported natively by the OS, \
      like it happens with .heic files for Windows. \
      This example allows .pdf, .jpeg and .heic files.',
    },
    errorMaxSizeMessage: {
      content: 'The error message for maxSize can still be displayed',
    },
    errorMessage: {
      content:
        'This is a custom error message that launches when error property is set to true',
    },
    fileExtension: undefined,
    maxSize: 20,
    subtitle: {
      content:
        'Do not add fileExtension prop and use onChange to validate the file extension',
    },
    title: { content: 'Example for custom file extension handling' },
  },
  render: ({ ...args }) => <StoryWithHooksValidation {...args} />,
};
