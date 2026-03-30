import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import type { InputBaseProps } from '../types/inputBase';

import { InputBase } from '../inputBase';

const mockProps: InputBaseProps = {
  defaultValue: 'test',
  placeholder: 'Placeholder',
  type: 'text',
  variant: 'STANDARD',
};

describe('Input Base Component', () => {
  it('Should display the component correctly', async () => {
    const { container, getByRole } = render(<InputBase {...mockProps} />);

    const input = getByRole('textbox');
    expect(input).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
