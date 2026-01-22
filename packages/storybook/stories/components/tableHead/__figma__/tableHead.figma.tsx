import figma from '@figma/code-connect';

import { TableHead } from '../tableHead';

figma.connect(
  TableHead,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5484%3A82292',
  {
    example: (props) => <TableHead variant={props.variant} />,
    imports: ['import { TableHead } from "@kubit-ui-web/react-components";'],
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
