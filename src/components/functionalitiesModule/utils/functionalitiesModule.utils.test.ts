import { FunctionalitiesModuleSectionType } from '../types';
import { getDefaultTabSeleted } from './functionalitiesModule.utils';

describe('getDefaultTabSeleted utility', () => {
  it('should return undefined value', () => {
    const result = getDefaultTabSeleted(1, []);
    expect(result).toBe(0);
  });

  it('should return value', () => {
    const menuSection: FunctionalitiesModuleSectionType[] = [
      {
        tab: { content: 'label1' },
        options: [
          {
            label: 'option 1',

            value: 1,
          },
          {
            label: 'option 2',
            disabled: true,
            value: 2,
          },
        ],
      },
      {
        tab: { content: 'label2' },
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
            value: 4,
          },
        ],
      },
    ];
    const result = getDefaultTabSeleted(1, menuSection);
    expect(result).toBe(0);
  });
});
