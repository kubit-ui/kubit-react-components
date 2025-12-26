import type { Meta, StoryObj } from '@storybook/react-vite';

import { BreadcrumbsVariant } from '@/lib/designSystem/kubit/components/breadcrumbs/variants';
import { LinkVariant } from '@/lib/designSystem/kubit/components/link/variants';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { BreadCrumbs as BreadCrumbsStory } from '../breadcrumbs';
import type { BreadcrumbsProps } from '../types/breadcrumbs';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: BreadCrumbsStory,
  render: ({ ...args }) => {
    return <BreadCrumbsStory {...args} />;
  },
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/Breadcrumb',
} satisfies Meta<typeof BreadCrumbsStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: BreadcrumbsProps = {
  ['aria-label']: 'Navigation breadcrumb',
  crumbs: [
    {
      id: 'home',
      name: 'Home',
      url: '/',
    },
    {
      id: 'products',
      name: 'Products',
      url: '/products',
    },
    {
      id: 'category',
      name: 'Electronics',
      url: '/products/electronics',
    },
    {
      name: 'Current Page',
      url: '#',
    },
  ],
  dividerIcon: { icon: ICONS.CHEVRON_RIGHT },
  link: {
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    variant: LinkVariant.PRIMARY,
  },
  variant: BreadcrumbsVariant.DEFAULT,
};

export const Breadcrumb: Story = {
  args: {
    ...commonArgs,
  },
};

export const BreadcrumbWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      breadcrumbs: 'custom-breadcrumbs',
      crumb: 'custom-crumb',
      icondivider: 'custom-divider',
      link: 'custom-link',
    },
  },
};

export const BreadcrumbWithLongText: Story = {
  args: {
    ...commonArgs,
    crumbs: [
      {
        id: 'level-a',
        name: 'Level A con un texto largo de más de 20 caracteres',
        url: 'https://google.com',
      }, // Over 20 chars
      {
        id: 'level-b',
        name: 'Level B veinte chars',
        url: '#',
      }, // 20 chars
      {
        name: 'Level C veinte chars',
        url: '#',
      }, // 20 chars
      {
        name: 'Level D con un texto largo de más de 20 caracteres',
        url: '#',
      }, // Over 20 chars
      {
        name: 'Level E',
        url: '#',
      },
      {
        id: 'level-f',
        name: 'Level F con un texto largo de más de 20 caracteres',
        url: '#',
      }, // Over 20 chars
    ],
  },
};

export const BreadcrumbAlternative: Story = {
  args: {
    ...commonArgs,
    variant: BreadcrumbsVariant.ALTERNATIVE,
  },
};

export const BreadcrumbWithCustomDivider: Story = {
  args: {
    ...commonArgs,
    dividerIcon: { icon: ICONS.CHEVRON_UP },
  },
};

export const BreadcrumbWithMinCharLimit: Story = {
  args: {
    ...commonArgs,
    crumbs: [
      {
        name: 'Short',
        url: '/',
      },
      {
        name: 'Medium Length Text',
        url: '/products',
      },
      {
        name: 'Very Long Text That Exceeds The Minimum Character Limit',
        url: '/products/electronics',
      },
      {
        name: 'Current',
        url: '#',
      },
    ],
    minCharLimit: 15,
  },
};

export const BreadcrumbWithCustomLink: Story = {
  args: {
    ...commonArgs,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.HEADING_H4_EXTENDED,
      variant: LinkVariant.SECONDARY,
    },
  },
};

export const BreadcrumbSingleLevel: Story = {
  args: {
    ...commonArgs,
    crumbs: [
      {
        name: 'Home Page',
        url: '/',
      },
    ],
  },
};
