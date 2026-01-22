import figma from '@figma/code-connect';

import { Snackbar } from '../snackbar';

figma.connect(
  Snackbar,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5024%3A5275',
  {
    example: () => <Snackbar>Snackbar</Snackbar>,
    imports: ['import { Snackbar } from "@kubit-ui-web/react-components";'],
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
