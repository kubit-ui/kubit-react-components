import figma from '@figma/code-connect';
import { BreadCrumbs } from '@kubit-ui-web/react-components';

figma.connect(
  BreadCrumbs,
  'https://www.figma.com/design/d027dSfOwbUvUNQWn7H4ix/Kubit-v.2.0.0--beta-?node-id=5236%3A15241',
  {
    example: (props) => <BreadCrumbs crumbs={[]} variant={props.variant} />,
    imports: ['import { BreadCrumbs } from "@kubit-ui-web/react-components";'],
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
