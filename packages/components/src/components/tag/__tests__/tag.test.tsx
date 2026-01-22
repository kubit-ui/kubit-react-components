import { axe } from 'vitest-axe';

import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { render } from '@/lib/tests/render/render';

import { Tag } from '../tag';

const mockProps = {
  icon: { icon: ICONS.PLACEHOLDER },
  label: { content: 'LABEL' },
  variant: 'HEALTHY',
};

describe('Tag component', () => {
  it('Should render tag component', async () => {
    const { container, getByText } = render(<Tag {...mockProps} />);

    const tagLabel = getByText(mockProps.label.content);

    expect(tagLabel).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
