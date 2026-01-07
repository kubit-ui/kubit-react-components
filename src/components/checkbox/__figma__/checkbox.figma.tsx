import figma from '@figma/code-connect';

import { CheckboxUnControlled } from '../checkboxUnControlled';

figma.connect(
  CheckboxUnControlled,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5073%3A6889',
  {
    example: (props) => <CheckboxUnControlled variant={props.variant} />,
    imports: [
      'import { CheckboxUnControlled } from "@kubit-ui-web/react-components";',
    ],
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
