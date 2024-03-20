import { syntheticSelect } from '../syntheticSelect/syntheticSelect';

const options = [
  { label: 'option I', value: 'option1' },
  { label: 'option II', value: 'option2' },
];
const selectedText = 'option I';
const selectedValue = 'option1';

describe('syntheticSelect tests', () => {
  it('should return a valid ref', () => {
    const { getRef } = syntheticSelect(options, selectedText);
    const ref = getRef();

    expect(ref.tagName).toBe('SELECT');
  });

  it('should return a synthetic select event', () => {
    const { clickOption } = syntheticSelect(options);

    const event = clickOption(selectedValue);

    expect(event.type).toBe('change');
  });
});
