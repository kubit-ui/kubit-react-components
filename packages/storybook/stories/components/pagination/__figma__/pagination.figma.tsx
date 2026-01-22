import figma from '@figma/code-connect';

import { Pagination } from '../pagination';

figma.connect(
  Pagination,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5236%3A16195',
  {
    example: () => <Pagination currentStep={1} maxStepsNumber={5} />,
    imports: ['import { Pagination } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
