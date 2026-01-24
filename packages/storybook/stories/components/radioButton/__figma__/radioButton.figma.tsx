import figma from '@figma/code-connect';
import { RadioButton } from '@kubit-ui-web/react-components';

figma.connect(
  RadioButton,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=8560%3A102434',
  {
    example: () => <RadioButton />,
    imports: ['import { RadioButton } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
