import figma from '@figma/code-connect';

import { Container } from '../container';

figma.connect(
  Container,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/WIP-Kubit-v.2.0.0?node-id=4982%3A13715',
  {
    example: (props) => <Container variant={props.type} />,
    imports: ['import { Container } from "@kubit-ui-web/react-components";'],
    props: {
      type: figma.enum('Type', {
        Alt: 'ALTERNATIVE',
        Default: 'DEFAULT',
        Secondary: 'SECONDARY',
      }),
    },
  },
);
