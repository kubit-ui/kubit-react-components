import figma from '@figma/code-connect';

import { Link } from '../link';

figma.connect(
  Link,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=4942%3A7621',
  {
    example: (props) => (
      <Link url="#" variant={props.variant}>
        Link
      </Link>
    ),
    imports: ['import { Link } from "@kubit-ui-web/react-components";'],
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
