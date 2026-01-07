import figma from '@figma/code-connect';

import { TableRow } from '../tableRow';

figma.connect(
  TableRow,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5508%3A22142',
  {
    example: (props) => <TableRow variant={props.variant} />,
    imports: ['import { TableRow } from "@kubit-ui-web/react-components";'],
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
