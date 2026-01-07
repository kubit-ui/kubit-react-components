import figma from '@figma/code-connect';

import { Tabs } from '../tabsUnControlled';

figma.connect(
  Tabs,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5557%3A41626',
  {
    example: (props) => <Tabs variant={props.variant} />,
    imports: ['import { Tabs } from "@kubit-ui-web/react-components";'],
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
