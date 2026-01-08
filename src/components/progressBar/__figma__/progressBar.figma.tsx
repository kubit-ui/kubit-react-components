import figma from '@figma/code-connect';

import { ProgressBar } from '../progressBar';

figma.connect(
  ProgressBar,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5501%3A87528',
  {
    example: () => <ProgressBar />,
    imports: ['import { ProgressBar } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
