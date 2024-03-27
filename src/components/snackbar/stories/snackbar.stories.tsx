import type { Meta as MetaSR, StoryObj } from '@storybook/react';
import * as React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { SnackbarUnControlled as Story } from '../snackbarUnControlled';
import { SnackbarMessageType } from '../types/snackbarType';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Feedback/Snackbar',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/snackbar',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-25667&mode=dev',
  },
} satisfies MetaSR<typeof Story>;

const StoryWithHooks = args => {
  const [isOpen, setIsOpen] = React.useState(args.open);
  return (
    <>
      <button style={{ padding: '10px', backgroundColor: 'green' }} onClick={() => setIsOpen(true)}>
        Open snackbar
      </button>
      <Story {...args} open={isOpen} onOpenClose={setIsOpen} />
      <p style={{ marginTop: '10px' }}>
        <strong>Note: </strong>Snackbar does not have an internal state. In order to open or close
        it, &quot;isOpen&quot; prop must be used. Moreover &quot;onHandleOpen&quot; function will be
        called when snackbar should close, either because the close icon has been clicked, or
        because the &quot;closeTimeout&quot; time for displaying the snackbar has expired.
      </p>
    </>
  );
};

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Snackbar: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].SnackbarVariant || {})[0] as string,
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    open: true,
    title: { content: 'Snackbar message' },
    secondaryActionLink: { url: 'https://www.google.es' },
    type: SnackbarMessageType.INFORMATIVE,
    description: { content: 'This is the description' },
    closeIcon: { icon: ICONS.ICON_PLACEHOLDER },
    secondaryActionContent: 'Link',
    themeArgs: themesObject[themeSelected][STYLES_NAME.SNACKBAR],
  },
  parameters: {
    docs: {
      source: {
        code: `const StoryWithHooks = args => {
        const [isOpen, setIsOpen] = React.useState(args.open);
        return (
          <>
            <button style={{ padding: '10px', backgroundColor: 'green' }} onClick={() => setIsOpen(true)}>
              Open snackbar
            </button>
            <Story {...args} open={isOpen} onOpenClose={setIsOpen} />
            <p style={{ marginTop: '10px' }}>
              <strong>Note: </strong>Snackbar does not have an internal state. In order to open or close
              it, &quot;isOpen&quot; prop must be used. Moreover &quot;onHandleOpen&quot; function will be
              called when snackbar should close, either because the close icon has been clicked, or
              because the &quot;closeTimeout&quot; time for displaying the snackbar has expired.
            </p>
          </>
      };`,
      },
    },
  },
};

export const SnackbarWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].SnackbarVariant || {})[0] as string,
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    open: true,
    title: { content: 'Snackbar message' },
    secondaryActionLink: { url: 'https://www.google.es' },
    type: SnackbarMessageType.INFORMATIVE,
    description: { content: 'This is the description' },
    closeIcon: { icon: ICONS.ICON_PLACEHOLDER },
    ctv: {
      [SnackbarMessageType.INFORMATIVE]: {
        container: {
          background_color: 'pink',
        },
      },
    },
  },
};
