import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from '@/components/link/link';
import {
  InputBaseVariantType,
  LinkVariant,
} from '@/lib/designSystem/kubit/components/variants';

import { InputBase as Story } from '../inputBase';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <p>
        For examples and details on the usage of this component, see the &nbsp;
        <Link
          url="/?path=/story/components-forms-input-inputcomponentsexamples--input-components-examples"
          variant={LinkVariant.PRIMARY}
        >
          Input component
        </Link>
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story {...args} />
      </div>
    </div>
  );
};
const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        // eslint-disable-next-line quotes
        component: `The component extends the interfaces **InputHTMLAttributes**, **AriaAttributes** (react types)`,
      },
    },
    figmaUrl: '',
    githubUrl: '',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/InputBase',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  additionalClasses: {
    input_base: 'custom-border custom-padding',
  },
  defaultValue: 'test',
  id: 'inputId',
  placeholder: 'Placeholder',
  type: 'text',
  variant: InputBaseVariantType.STANDARD,
};

export const InputBase: Story = {
  args: {
    ...commonArgs,
  },
};
