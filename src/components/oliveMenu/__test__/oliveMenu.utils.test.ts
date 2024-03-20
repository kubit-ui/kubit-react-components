import { OliveMenuListOptions } from '../types';
import { getAriaControls } from '../utils';

const menuSection: OliveMenuListOptions[] = [
  {
    title: { content: 'label1' },
    id: '1',
    options: [
      {
        label: 'option 1',
        value: 1,
      },
      {
        label: 'option 2',

        value: 2,
      },
      {
        label: 'option 3',
        url: 'https://www.google.com/',
        ['aria-label']: 'link to google 1',
        value: 37,
      },
    ],
  },
  {
    title: { content: 'label2' },
    id: '2',
    options: [
      {
        label: 'option 1',
        value: 3,
      },
      {
        label: 'option 2',
        value: 56,
      },
      {
        label: 'option 3',
        url: 'https://www.google.com/',
        ['aria-label']: 'link to google 1',
        value: 6,
      },
    ],
  },
];

describe('Olive Menu utils', () => {
  test('Should get ariaControls', async () => {
    expect(getAriaControls(menuSection, 'ariaControls')).toStrictEqual(
      'ariaControls0 ariaControls1'
    );
  });
});
