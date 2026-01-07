import figma from '@figma/code-connect';

import { Chip } from '../chip';

figma.connect(
  Chip,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=9628%3A77616',
  {
    example: (props) => <Chip label="Chip" variant={props.variant} />,
    imports: ['import { Chip } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {
      variant: figma.enum('variant', {
        Default: 'DEFAULT',
      }),
    },
  },
);
