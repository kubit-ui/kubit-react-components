import { ICONS } from '@/assets';

import { FunctionalitiesModuleSectionType } from '../types';

export const SECTIONS: FunctionalitiesModuleSectionType[] = [
  {
    tab: {
      content: 'Tab 1',
    },
    options: [
      // {
      //   label: 'option 0 (disabled)',
      //   disabled: true,
      //   value: '0',
      // },
    ],
  },
  {
    tab: { content: 'Tab 2', ['aria-label']: 'ariaLabelSecondTab' },
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2 (icon)',
        icon: { icon: ICONS.ICON_PLACEHOLDER },
        value: '2',
      },
      {
        label: 'option 3 (disabled)',
        value: '3',
        disabled: true,
      },
      {
        label: 'option 4 (link)',
        ['aria-label']: 'Link to google',
        url: 'https://www.google.com/',
        value: '4',
      },
      {
        label: 'option 5',
        value: '5',
      },
      {
        label: 'option 6',
        value: '6',
      },
      {
        label: 'option 7',
        value: '7',
      },
      {
        label: 'option 8',
        value: '8',
      },
      {
        label: 'option 9',
        value: '9',
      },
      {
        label: 'option 10',
        value: '10',
      },
      {
        label: 'option 11',
        value: '11',
      },
      {
        label: 'option 12',
        value: '12',
      },
      {
        label: 'option 13',
        value: '13',
      },
      {
        label: 'option 14',
        value: '14',
      },
      {
        label: 'option 15',
        value: '15',
      },
      {
        label: 'option 16',
        value: '16',
      },
    ],
  },
];
