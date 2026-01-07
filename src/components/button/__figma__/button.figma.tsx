import figma from '@figma/code-connect';

import { Button } from '../button';

figma.connect(
  Button,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=4933%3A604',
  {
    example: (props) => (
      <Button loading={props.loading} size={props.size} variant={props.type}>
        {props.type}
      </Button>
    ),
    imports: ['import { Button } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {
      loading: figma.boolean('loading'),
      size: figma.enum('size', {
        Large: 'LARGE',
        Small: 'SMALL',
      }),
      state: figma.enum('state', {
        Default: 'DEFAULT',
        Disabled: 'DISABLED',
      }),
      type: figma.enum('variant', {
        Primary: 'PRIMARY',
        Secondary: 'SECONDARY',
        'Secondary alt': 'SECONDARY_ALT',
      }),
    },
  },
);
