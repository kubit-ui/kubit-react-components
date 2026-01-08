import figma from '@figma/code-connect';

import { Button } from '../button';

const FIGMA_URL =
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=4933%3A604';

const BUTTON_IMPORTS = [
  'import { Button } from "@kubit-ui-web/react-components";',
];

const BUTTON_LINKS = [
  {
    name: 'GitHub Repository',
    url: 'https://github.com/santander-group-ods/ods-odswpa-web-ui-components',
  },
  {
    name: 'Storybook Documentation',
    url: 'https://kubit.santander.com/storybook',
  },
];

const BUTTON_PROPS = {
  disabled: figma.enum('state', {
    Default: false,
    Disabled: true,
  }),
  loading: figma.boolean('loading'),
  size: figma.enum('size', {
    Large: 'LARGE',
    Small: 'SMALL',
  }),
  variant: figma.enum('variant', {
    Primary: 'PRIMARY',
    Secondary: 'SECONDARY',
    'Secondary alt': 'SECONDARY_ALT',
  }),
};

/**
 * Button component with icon on the left
 * Used when you need to emphasize an action with a leading icon
 */
figma.connect(Button, FIGMA_URL, {
  example: (props) => (
    <Button
      disabled={props.disabled}
      icon={{ icon: 'icon' }}
      iconPosition="left"
      loading={props.loading}
      size={props.size}
      variant={props.variant}
    >
      Button Text
    </Button>
  ),
  imports: BUTTON_IMPORTS,
  links: BUTTON_LINKS,
  props: BUTTON_PROPS,
  variant: { 'icon L': true },
});

/**
 * Button component with icon on the right
 * Used when you need to emphasize an action with a trailing icon
 */
figma.connect(Button, FIGMA_URL, {
  example: (props) => (
    <Button
      disabled={props.disabled}
      icon={{ icon: 'icon' }}
      iconPosition="right"
      loading={props.loading}
      size={props.size}
      variant={props.variant}
    >
      Button Text
    </Button>
  ),
  imports: BUTTON_IMPORTS,
  links: BUTTON_LINKS,
  props: BUTTON_PROPS,
  variant: { 'icon R': true },
});

/**
 * Button component without icon
 * The standard button variant for most use cases
 */
figma.connect(Button, FIGMA_URL, {
  example: (props) => (
    <Button
      disabled={props.disabled}
      loading={props.loading}
      size={props.size}
      variant={props.variant}
    >
      Button Text
    </Button>
  ),
  imports: BUTTON_IMPORTS,
  links: BUTTON_LINKS,
  props: BUTTON_PROPS,
  variant: { 'icon L': false, 'icon R': false },
});
