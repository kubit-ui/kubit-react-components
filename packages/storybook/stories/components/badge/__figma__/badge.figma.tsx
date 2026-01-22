import figma from '@figma/code-connect';

import { Badge } from '../badge';

figma.connect(
  Badge,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5097%3A8796',
  {
    example: (props) => (
      <Badge icon={{ icon: 'ICON' }} variant={props.variant} />
    ),
    imports: ['import { Badge } from "@kubit-ui-web/react-components";'],
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
