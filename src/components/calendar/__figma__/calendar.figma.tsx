import figma from '@figma/code-connect';

import { Calendar } from '../calendar';

figma.connect(
  Calendar,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5096%3A15046',
  {
    example: (props) => (
      <Calendar
        configCalendar={{
          leftArrowIcon: { icon: 'ICON' },
          rightArrowIcon: { icon: 'ICON' },
        }}
        minDate={new Date()}
        open={true}
        variant={props.variant}
      />
    ),
    imports: ['import { Calendar } from "@kubit-ui-web/react-components";'],
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
