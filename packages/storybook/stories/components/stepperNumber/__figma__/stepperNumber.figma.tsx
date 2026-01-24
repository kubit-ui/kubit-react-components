import figma from '@figma/code-connect';
import { StepperNumber } from '@kubit-ui-web/react-components';

figma.connect(
  StepperNumber,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5236%3A62100',
  {
    example: () => <StepperNumber />,
    imports: [
      'import { StepperNumber } from "@kubit-ui-web/react-components";',
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
