import figma from '@figma/code-connect';
import { PageControl } from '@kubit-ui-web/react-components';

figma.connect(
  PageControl,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5214%3A37733',
  {
    example: () => <PageControl currentPosition={0} pages={5} />,
    imports: ['import { PageControl } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
