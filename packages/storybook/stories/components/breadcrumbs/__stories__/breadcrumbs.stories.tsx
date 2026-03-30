import type { Meta, StoryObj } from '@storybook/react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { BreadCrumbs as BreadCrumbsStory } from '@kubit-ui-web/react-components';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const { BreadcrumbsVariant, LinkVariant, TextVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: BreadCrumbsStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['navigation'],
  title: 'Components/Navigation/Breadcrumb',
} satisfies Meta<typeof BreadCrumbsStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

/**
 * Basic breadcrumbs navigation with multiple levels.
 * Use this to show the current page's location within the site hierarchy.
 */
export const Basic: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      { id: 'home', name: 'Home', url: '/' },
      { id: 'products', name: 'Products', url: '/products' },
      { id: 'category', name: 'Electronics', url: '/products/electronics' },
      { name: 'Current Page', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { id: 'home', name: 'Home', url: '/' },
    { id: 'products', name: 'Products', url: '/products' },
    { id: 'category', name: 'Electronics', url: '/products/electronics' },
    { name: 'Current Page', url: '#' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Alternative breadcrumbs variant.
 * Use this for a different visual style in specific contexts.
 */
export const Alternative: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      { id: 'home', name: 'Home', url: '/' },
      { id: 'products', name: 'Products', url: '/products' },
      { name: 'Current Page', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    variant: BreadcrumbsVariant.ALTERNATIVE,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.ALTERNATIVE}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { id: 'home', name: 'Home', url: '/' },
    { id: 'products', name: 'Products', url: '/products' },
    { name: 'Current Page', url: '#' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Breadcrumbs with custom divider icon.
 * You can use any icon as a separator between crumbs.
 */
export const CustomDivider: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Electronics', url: '/products/electronics' },
      { name: 'Current', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_UP,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_UP}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Electronics', url: '/products/electronics' },
    { name: 'Current', url: '#' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Breadcrumbs with long text and character limit.
 * Text longer than minCharLimit will be truncated with ellipsis.
 */
export const WithLongText: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      {
        id: 'level-a',
        name: 'Level A with very long text exceeding 20 characters',
        url: '/',
      },
      {
        id: 'level-b',
        name: 'Medium Length Text',
        url: '/medium',
      },
      {
        name: 'Another very long breadcrumb text that should be truncated',
        url: '/long',
      },
      { name: 'Current Page', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    minCharLimit: 20,
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  minCharLimit={20}
  crumbs={[
    {
      id: 'level-a',
      name: 'Level A with very long text exceeding 20 characters',
      url: '/'
    },
    {
      id: 'level-b',
      name: 'Medium Length Text',
      url: '/medium'
    },
    {
      name: 'Another very long breadcrumb text that should be truncated',
      url: '/long'
    },
    { name: 'Current Page', url: '#' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Breadcrumbs with custom link styling.
 * You can customize the link variant and text appearance.
 */
export const CustomLinkStyle: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Current', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.HEADING_H4_EXTENDED,
      variant: LinkVariant.SECONDARY,
    },
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Current', url: '#' }
  ]}
  link={{
    variant: LinkVariant.SECONDARY,
    action: 'navigation',
    textVariant: TextVariantType.HEADING_H4_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Single level breadcrumb.
 * Use when there's only one navigation level to display.
 */
export const SingleLevel: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [{ name: 'Home Page', url: '/' }],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { name: 'Home Page', url: '/' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Deep navigation hierarchy breadcrumbs.
 * Shows multiple levels of nested navigation paths.
 */
export const DeepHierarchy: Story = {
  args: {
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      { id: 'home', name: 'Home', url: '/' },
      { id: 'shop', name: 'Shop', url: '/shop' },
      { id: 'electronics', name: 'Electronics', url: '/shop/electronics' },
      {
        id: 'computers',
        name: 'Computers',
        url: '/shop/electronics/computers',
      },
      {
        id: 'laptops',
        name: 'Laptops',
        url: '/shop/electronics/computers/laptops',
      },
      { name: 'Gaming Laptops', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { id: 'home', name: 'Home', url: '/' },
    { id: 'shop', name: 'Shop', url: '/shop' },
    { id: 'electronics', name: 'Electronics', url: '/shop/electronics' },
    { id: 'computers', name: 'Computers', url: '/shop/electronics/computers' },
    { id: 'laptops', name: 'Laptops', url: '/shop/electronics/computers/laptops' },
    { name: 'Gaming Laptops', url: '#' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
/>`,
      },
    },
  },
};

/**
 * Breadcrumbs with custom CSS classes.
 * Override default styling for specific use cases.
 */
export const WithCustomClasses: Story = {
  args: {
    additionalClasses: {
      breadcrumbs: 'custom-breadcrumbs-wrapper',
      crumb: 'custom-crumb-item',
      icondivider: 'custom-divider-icon',
      link: 'custom-link-style',
    },
    ['aria-label']: 'Breadcrumb navigation',
    crumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Current', url: '#' },
    ],
    dividerIcon: ICONS.CHEVRON_RIGHT,
    link: {
      action: 'navigation',
      textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      variant: LinkVariant.PRIMARY,
    },
    variant: BreadcrumbsVariant.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Current', url: '#' }
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED
  }}
  additionalClasses={{
    breadcrumbs: 'custom-breadcrumbs-wrapper',
    crumb: 'custom-crumb-item',
    icondivider: 'custom-divider-icon',
    link: 'custom-link-style'
  }}
/>`,
      },
    },
  },
};
