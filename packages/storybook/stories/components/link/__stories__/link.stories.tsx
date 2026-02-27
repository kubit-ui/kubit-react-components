import type { Meta, StoryObj } from '@storybook/react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Link as LinkComponent } from '@kubit-ui-web/react-components';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const { LinkVariant, TextVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: LinkComponent,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/link',
    layout: 'centered',
  },
  tags: ['actions'],
  title: 'Components/Actions/Link',
} satisfies Meta<typeof LinkComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  children: 'Link Text',
  url: 'https://example.com',
  variant: LinkVariant.PRIMARY,
};

export const Basic: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY">
  Link Text
</Link>`,
      },
    },
  },
};

export const PrimaryVariant: StoryType = {
  args: {
    ...commonArgs,
    variant: LinkVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY">
  Primary Link
</Link>`,
      },
    },
  },
};

export const SecondaryVariant: StoryType = {
  args: {
    ...commonArgs,
    children: 'Secondary Link',
    variant: LinkVariant.SECONDARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="SECONDARY">
  Secondary Link
</Link>`,
      },
    },
  },
};

export const SecondaryAltVariant: StoryType = {
  args: {
    ...commonArgs,
    children: 'Secondary Alt Link',
    variant: LinkVariant.SECONDARY_ALT,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="SECONDARY_ALT">
  Secondary Alt Link
</Link>`,
      },
    },
  },
};

export const WithIconLeft: StoryType = {
  args: {
    ...commonArgs,
    children: 'Link with Icon',
    icon: {
      altText: 'User icon',
      icon: ICONS.PLACEHOLDER,
    },
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link
  url="https://example.com"
  variant="PRIMARY"
  icon={{ icon: ICONS.USER, altText: 'User icon' }}
  iconPosition="left"
>
  Link with Icon
</Link>`,
      },
    },
  },
};

export const WithIconRight: StoryType = {
  args: {
    ...commonArgs,
    children: 'Link with Icon',
    icon: {
      altText: 'Arrow icon',
      icon: ICONS.PLACEHOLDER,
    },
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link
  url="https://example.com"
  variant="PRIMARY"
  icon={{ icon: ICONS.ARROW_RIGHT, altText: 'Arrow icon' }}
  iconPosition="right"
>
  Link with Icon
</Link>`,
      },
    },
  },
};

export const ExternalLink: StoryType = {
  args: {
    ...commonArgs,
    children: 'External Link',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link
  url="https://example.com"
  variant="PRIMARY"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
</Link>`,
      },
    },
  },
};

export const Disabled: StoryType = {
  args: {
    ...commonArgs,
    children: 'Disabled Link',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY" disabled>
  Disabled Link
</Link>`,
      },
    },
  },
};

export const WithCustomColor: StoryType = {
  args: {
    ...commonArgs,
    children: 'Custom Color Link',
    color: '#e74c3c',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY" color="#e74c3c">
  Custom Color Link
</Link>`,
      },
    },
  },
};

export const WithCustomWeight: StoryType = {
  args: {
    ...commonArgs,
    children: 'Bold Link',
    weight: 700,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY" weight={700}>
  Bold Link
</Link>`,
      },
    },
  },
};

export const WithUnderline: StoryType = {
  args: {
    ...commonArgs,
    children: 'Underlined Link',
    decoration: 'underline',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY" decoration="underline">
  Underlined Link
</Link>`,
      },
    },
  },
};

export const WithoutDecoration: StoryType = {
  args: {
    ...commonArgs,
    children: 'No Decoration',
    decoration: 'none',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY" decoration="none">
  No Decoration
</Link>`,
      },
    },
  },
};

export const WithAriaLabel: StoryType = {
  args: {
    ...commonArgs,
    ['aria-label']: 'Navigate to example page',
    children: 'Accessible Link',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link
  url="https://example.com"
  variant="PRIMARY"
  aria-label="Navigate to example page"
>
  Accessible Link
</Link>`,
      },
    },
  },
};

export const WithAriaCurrent: StoryType = {
  args: {
    ...commonArgs,
    ['aria-current']: 'page',
    children: 'Current Page',
  },
  parameters: {
    docs: {
      source: {
        code: `<Link url="https://example.com" variant="PRIMARY" aria-current="page">
  Current Page
</Link>`,
      },
    },
  },
};

export const NavigationMenu: StoryType = {
  args: {
    children: 'Link',
    url: '#',
  },
  parameters: {
    docs: {
      source: {
        code: `<nav>
  <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', padding: 0 }}>
    <li>
      <Link url="/" variant="PRIMARY" aria-current="page">
        Home
      </Link>
    </li>
    <li>
      <Link url="/products" variant="PRIMARY">
        Products
      </Link>
    </li>
    <li>
      <Link url="/about" variant="PRIMARY">
        About
      </Link>
    </li>
    <li>
      <Link url="/contact" variant="PRIMARY">
        Contact
      </Link>
    </li>
  </ul>
</nav>`,
      },
    },
  },
  render: () => (
    <nav>
      <ul
        style={{ display: 'flex', gap: '24px', listStyle: 'none', padding: 0 }}
      >
        <li>
          <LinkComponent
            aria-current="page"
            url="/"
            variant={LinkVariant.PRIMARY}
          >
            Home
          </LinkComponent>
        </li>
        <li>
          <LinkComponent url="/products" variant={LinkVariant.PRIMARY}>
            Products
          </LinkComponent>
        </li>
        <li>
          <LinkComponent url="/about" variant={LinkVariant.PRIMARY}>
            About
          </LinkComponent>
        </li>
        <li>
          <LinkComponent url="/contact" variant={LinkVariant.PRIMARY}>
            Contact
          </LinkComponent>
        </li>
      </ul>
    </nav>
  ),
};

export const FooterLinks: StoryType = {
  args: {
    children: 'Link',
    url: '#',
  },
  parameters: {
    docs: {
      source: {
        code: `<footer>
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Link url="/terms" variant="SECONDARY_ALT">
      Terms of Service
    </Link>
    <Link url="/privacy" variant="SECONDARY_ALT">
      Privacy Policy
    </Link>
    <Link url="/cookies" variant="SECONDARY_ALT">
      Cookie Policy
    </Link>
    <Link url="/sitemap" variant="SECONDARY_ALT">
      Sitemap
    </Link>
  </div>
</footer>`,
      },
    },
  },
  render: () => (
    <footer>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LinkComponent url="/terms" variant={LinkVariant.SECONDARY_ALT}>
          Terms of Service
        </LinkComponent>
        <LinkComponent url="/privacy" variant={LinkVariant.SECONDARY_ALT}>
          Privacy Policy
        </LinkComponent>
        <LinkComponent url="/cookies" variant={LinkVariant.SECONDARY_ALT}>
          Cookie Policy
        </LinkComponent>
        <LinkComponent url="/sitemap" variant={LinkVariant.SECONDARY_ALT}>
          Sitemap
        </LinkComponent>
      </div>
    </footer>
  ),
};

export const LinksWithIcons: StoryType = {
  args: {
    children: 'Link',
    url: '#',
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <Link
    url="/profile"
    variant="PRIMARY"
    icon={{ icon: ICONS.USER, altText: 'User' }}
    iconPosition="left"
  >
    My Profile
  </Link>

  <Link
    url="/settings"
    variant="PRIMARY"
    icon={{ icon: ICONS.SETTINGS, altText: 'Settings' }}
    iconPosition="left"
  >
    Settings
  </Link>

  <Link
    url="/logout"
    variant="SECONDARY"
    icon={{ icon: ICONS.LOGOUT, altText: 'Logout' }}
    iconPosition="left"
  >
    Logout
  </Link>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <LinkComponent
        icon={{ altText: 'User', icon: ICONS.PLACEHOLDER }}
        iconPosition="left"
        url="/profile"
        variant={LinkVariant.PRIMARY}
      >
        My Profile
      </LinkComponent>

      <LinkComponent
        icon={{ altText: 'Settings', icon: ICONS.PLACEHOLDER }}
        iconPosition="left"
        url="/settings"
        variant={LinkVariant.PRIMARY}
      >
        Settings
      </LinkComponent>

      <LinkComponent
        icon={{ altText: 'Logout', icon: ICONS.PLACEHOLDER }}
        iconPosition="left"
        url="/logout"
        variant={LinkVariant.SECONDARY}
      >
        Logout
      </LinkComponent>
    </div>
  ),
};

export const ExternalLinksWithSecurity: StoryType = {
  args: {
    children: 'Link',
    url: '#',
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <Link
    url="https://github.com/example"
    target="_blank"
    rel="noopener noreferrer"
    variant="PRIMARY"
    icon={{ icon: ICONS.EXTERNAL, altText: 'External link' }}
    iconPosition="right"
  >
    View on GitHub
  </Link>

  <Link
    url="https://docs.example.com"
    target="_blank"
    rel="noopener noreferrer"
    variant="PRIMARY"
    icon={{ icon: ICONS.EXTERNAL, altText: 'External link' }}
    iconPosition="right"
  >
    Documentation
  </Link>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <LinkComponent
        icon={{ altText: 'External link', icon: ICONS.PLACEHOLDER }}
        iconPosition="right"
        rel="noopener noreferrer"
        target="_blank"
        url="https://github.com/example"
        variant={LinkVariant.PRIMARY}
      >
        View on GitHub
      </LinkComponent>

      <LinkComponent
        icon={{ altText: 'External link', icon: ICONS.PLACEHOLDER }}
        iconPosition="right"
        rel="noopener noreferrer"
        target="_blank"
        url="https://docs.example.com"
        variant={LinkVariant.PRIMARY}
      >
        Documentation
      </LinkComponent>
    </div>
  ),
};

export const BreadcrumbNavigation: StoryType = {
  args: {
    children: 'Link',
    url: '#',
  },
  parameters: {
    docs: {
      source: {
        code: `<nav aria-label="Breadcrumb">
  <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, alignItems: 'center' }}>
    <li>
      <Link url="/" variant="SECONDARY">
        Home
      </Link>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <Link url="/products" variant="SECONDARY">
        Products
      </Link>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <Link url="/products/laptop" variant="SECONDARY" aria-current="page">
        Laptop
      </Link>
    </li>
  </ol>
</nav>`,
      },
    },
  },
  render: () => (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '8px',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          <LinkComponent url="/" variant={LinkVariant.SECONDARY}>
            Home
          </LinkComponent>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <LinkComponent url="/products" variant={LinkVariant.SECONDARY}>
            Products
          </LinkComponent>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <LinkComponent
            aria-current="page"
            url="/products/laptop"
            variant={LinkVariant.SECONDARY}
          >
            Laptop
          </LinkComponent>
        </li>
      </ol>
    </nav>
  ),
};

export const VariantComparison: StoryType = {
  args: {
    children: 'Link',
    url: '#',
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
  <div>
    <h4>Primary Variant</h4>
    <Link url="/primary" variant="PRIMARY">
      Primary Link
    </Link>
  </div>

  <div>
    <h4>Secondary Variant</h4>
    <Link url="/secondary" variant="SECONDARY">
      Secondary Link
    </Link>
  </div>

  <div>
    <h4>Secondary Alt Variant</h4>
    <Link url="/secondary-alt" variant="SECONDARY_ALT">
      Secondary Alt Link
    </Link>
  </div>
</div>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div>
        <h4
          style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}
        >
          Primary Variant
        </h4>
        <LinkComponent url="/primary" variant={LinkVariant.PRIMARY}>
          Primary Link
        </LinkComponent>
      </div>

      <div>
        <h4
          style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}
        >
          Secondary Variant
        </h4>
        <LinkComponent url="/secondary" variant={LinkVariant.SECONDARY}>
          Secondary Link
        </LinkComponent>
      </div>

      <div>
        <h4
          style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}
        >
          Secondary Alt Variant
        </h4>
        <LinkComponent url="/secondary-alt" variant={LinkVariant.SECONDARY_ALT}>
          Secondary Alt Link
        </LinkComponent>
      </div>
    </div>
  ),
};
