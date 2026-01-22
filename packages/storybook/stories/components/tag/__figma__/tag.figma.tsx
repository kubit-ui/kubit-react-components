import figma from '@figma/code-connect';

import { Tag } from '../tag';

figma.connect(
  Tag,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=4980%3A9439',
  {
    example: (props) => <Tag label={props.type} variant={props.type} />,
    imports: ['import { Tag} from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {
      type: figma.enum('type', {
        DEPRECATED: 'DEPRECATED',
        DORMANT: 'DORMANT',
        HEALTHY: 'HEALTHY',
        Informative: 'INFORMATIVE',
        Issue: 'ISSUE',
      }),
    },
  },
);
