import figma from '@figma/code-connect';

import { Input } from '../input';

figma.connect(
  Input,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5138%3A17082',
  {
    example: (props) => <Input variant={props.variant} />,
    imports: ['import { Container } from "@kubit-ui-web/react-components";'],
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
