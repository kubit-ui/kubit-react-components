import figma from '@figma/code-connect';

import { Carousel } from '../carousel';

figma.connect(
  Carousel,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5221%3A39877',
  {
    example: (props) => <Carousel elements={[]} variant={props.variant} />,
    imports: ['import { Carousel } from "@kubit-ui-web/react-components";'],
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
