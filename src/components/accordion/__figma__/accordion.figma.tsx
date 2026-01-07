import figma from '@figma/code-connect';

import { Accordion } from '../accordionUnControlled';

figma.connect(
  Accordion,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5501%3A89639',
  {
    example: (props) => (
      <Accordion header="Header" variant={props.variant}>
        Content
      </Accordion>
    ),
    imports: ['import { Accordion } from "@kubit-ui-web/react-components";'],
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
