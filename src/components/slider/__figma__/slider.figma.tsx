import figma from '@figma/code-connect';

import { Slider } from '../slider';

figma.connect(
  Slider,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=10252%3A21480',
  {
    example: (props) => <Slider variant={props.variant} />,
    imports: ['import { Slider } from "@kubit-ui-web/react-components";'],
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
