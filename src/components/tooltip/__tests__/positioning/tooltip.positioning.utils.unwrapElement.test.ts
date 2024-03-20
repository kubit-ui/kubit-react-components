import { ClientRectObject, VirtualElement } from '@/components/tooltip/positioning/types';
import { unwrapElement } from '@/components/tooltip/positioning/utils/unwrapElement';

describe('Tooltip positioning - unwrapElement', () => {
  it('returns the contextElement when the element is a VirtualElement', () => {
    const virtualElement: VirtualElement = {
      contextElement: document.createElement('div'),
      getBoundingClientRect: function (): ClientRectObject {
        throw new Error('Function not implemented.');
      },
    };

    const result = unwrapElement(virtualElement);

    expect(result).toBe(virtualElement.contextElement);
  });

  it('returns the element itself when the element is not a VirtualElement', () => {
    const element = document.createElement('div');

    const result = unwrapElement(element);

    expect(result).toBe(element);
  });
});
