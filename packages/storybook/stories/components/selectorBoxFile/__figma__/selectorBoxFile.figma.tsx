import figma from '@figma/code-connect';

import { STATES } from '@/lib/types/states/states';

import { SelectorBoxFile } from '../selectorBoxFile';

figma.connect(
  SelectorBoxFile,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5104%3A11052',
  {
    example: () => (
      <SelectorBoxFile
        containerBoxStateContent={
          {
            [STATES.DEFAULT]: {
              actionText: { content: 'Browse and select a file' },
              description: { content: 'and upload it here' },
              icon: { icon: 'UPLOAD_FILE' },
            },
          } as never
        }
      />
    ),
    imports: [
      'import { SelectorBoxFile } from "@kubit-ui-web/react-components";',
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
