import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputDecoration as Story } from '@kubit-ui-web/react-components';

import { Link } from '@/components/link/link';
import { LinkVariant } from '@/lib/designSystem/kubit/components/variants';

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
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['forms'],
  title: 'Components/Forms/InputDecoration',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };
