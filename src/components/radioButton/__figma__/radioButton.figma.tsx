import figma from '@figma/code-connect';

import { RadioButton } from '../radioButton';

figma.connect(
  RadioButton,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=8560%3A102434',
  {
    example: (props) => <RadioButton variant={props.variant} />,
    imports: ['import { RadioButton } from "@kubit-ui-web/react-components";'],
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
