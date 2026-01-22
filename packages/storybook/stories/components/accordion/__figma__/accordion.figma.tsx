import figma from '@figma/code-connect';

import { Accordion } from '../accordionUnControlled';

figma.connect(
  Accordion,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5501%3A89639',
  {
    example: () => (
      <Accordion header="Header" variant="DEFAULT">
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
    props: {},
  },
);
