import figma from '@figma/code-connect';

import { Button } from '../button';

figma.connect(
  Button,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/WIP-Kubit-v.2.0.0?node-id=4933%3A604',
  {
    example: (props) => (
      <Button size={props.size} variant={props.type}>
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
      size: figma.enum('Size', {
        Big: 'BIG',
        Small: 'SMALL',
      }),
      state: figma.enum('State', {
        Default: 'DEFAULT',
        Disabled: 'DISABLED',
      }),
      type: figma.enum('Type', {
        Primary: 'PRIMARY',
        Secondary: 'SECONDARY',
        'Secondary alt': 'SECONDARY_ALT',
      }),
    },
  },
);
