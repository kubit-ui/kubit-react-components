import figma from '@figma/code-connect';

import { Dot } from '../dot';

figma.connect(
  Dot,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5344%3A32673',
  {
    example: (props) => <Dot variant={props.variant} />,
    imports: ['import { Dot } from "@kubit-ui-web/react-components";'],
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
