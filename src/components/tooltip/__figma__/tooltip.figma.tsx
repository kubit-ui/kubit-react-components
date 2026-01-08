import figma from '@figma/code-connect';

import { Tooltip } from '../tooltipUnControlled';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5039%3A19267',
  {
    example: () => <Tooltip>Tooltip</Tooltip>,
    imports: ['import { Tooltip } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
