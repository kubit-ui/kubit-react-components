import figma from '@figma/code-connect';

import { VirtualKeyboard } from '../virtualKeyboard';

figma.connect(
  VirtualKeyboard,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5512%3A93516',
  {
    example: (props) => (
      <VirtualKeyboard
        icon={{ icon: 'ICON' }}
        variant={props.variant}
        onDigitButtonClick={() => undefined}
        onRemoveButtonClick={() => undefined}
      />
    ),
    imports: [
      'import { VirtualKeyboard } from "@kubit-ui-web/react-components";',
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
