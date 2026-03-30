import figma from '@figma/code-connect';
import { ToggleUncontrolled } from '@kubit-ui-web/react-components';

figma.connect(
  ToggleUncontrolled,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5491%3A55326',
  {
    example: () => <ToggleUncontrolled />,
    imports: [
      'import { ToggleUncontrolled } from "@kubit-ui-web/react-components";',
    ],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {},
  },
);
