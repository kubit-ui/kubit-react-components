import figma from '@figma/code-connect';

import { InputSignature } from '../inputSignatureUncontrolled';

figma.connect(
  InputSignature,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5476%3A39173&',
  {
    example: (props) => (
      <InputSignature
        placeholder={undefined}
        state="disabled"
        variant={props.variant}
      />
    ),
    imports: [
      'import { InputSignature } from "@kubit-ui-web/react-components";',
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
