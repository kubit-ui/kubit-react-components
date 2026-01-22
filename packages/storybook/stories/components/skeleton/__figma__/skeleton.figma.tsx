import figma from '@figma/code-connect';

import { Skeleton } from '../skeleton';

figma.connect(
  Skeleton,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5515%3A79935',
  {
    example: (props) => <Skeleton variant={props.variant} />,
    imports: ['import { Skeleton } from "@kubit-ui-web/react-components";'],
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
