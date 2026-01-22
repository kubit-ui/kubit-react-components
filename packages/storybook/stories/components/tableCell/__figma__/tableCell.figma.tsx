import figma from '@figma/code-connect';

import { TableCell } from '../tableCell';

figma.connect(
  TableCell,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5508%3A18611',
  {
    example: () => <TableCell>Content</TableCell>,
    imports: ['import { TableCell } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
