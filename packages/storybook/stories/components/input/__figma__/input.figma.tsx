import figma from '@figma/code-connect';
import { Input } from '@kubit-ui-web/react-components';

figma.connect(
  Input,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5138%3A17082',
  {
    example: () => <Input />,
    imports: ['import { Input } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
