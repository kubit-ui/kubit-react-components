import figma from '@figma/code-connect';

import { Avatar } from '../avatar';

figma.connect(
  Avatar,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5344%3A31239',
  {
    example: (props) => <Avatar size={props.size} />,
    imports: ['import { Avatar } from "@kubit-ui-web/react-components";'],
    links: [
      {
        name: 'Github Link',
        url: 'Url',
      },
    ],
    props: {
      size: figma.enum('size', {
        Default: 'DEFAULT',
      }),
    },
  },
);
