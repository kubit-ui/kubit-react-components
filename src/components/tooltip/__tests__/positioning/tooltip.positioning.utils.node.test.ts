import { getNodeName } from '@/components/tooltip/positioning/utils/node';

describe('Tooltip positioning - getNodeName', () => {
  it('returns the node name in lowercase when the input is a Node', () => {
    const node = document.createElement('div');

    const result = getNodeName(node);

    expect(result).toBe('div');
  });

  it('returns an empty string when the input is a Window', () => {
    const result = getNodeName(window);

    expect(result).toBe('');
  });

  it('returns an empty string when the node name is undefined', () => {
    const node = document.createElement('div');
    Object.defineProperty(node, 'nodeName', { value: undefined });

    const result = getNodeName(node);

    expect(result).toBe('');
  });
});
