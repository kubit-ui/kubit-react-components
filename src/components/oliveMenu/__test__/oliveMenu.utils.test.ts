import { OliveMenuListOptions } from '../types/oliveMenu';
import { getAriaControls } from '../utils/getAriaControls';

const menuSection: OliveMenuListOptions[] = [
  {
    title: { content: 'label1' },
    id: 'number1',
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
    id: 'number2',
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

const menuSectionWithoutId: OliveMenuListOptions[] = [
  {
    title: { content: 'label1' },
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
    expect(getAriaControls(menuSection, 'ariaControls')).toStrictEqual([
      'ariaControls0number1',
      'ariaControls1number2',
    ]);
  });
  test('Should get ariaControls without id', async () => {
    expect(getAriaControls(menuSectionWithoutId, 'ariaControls')).toStrictEqual([
      'ariaControls0',
      'ariaControls1',
    ]);
  });
});
