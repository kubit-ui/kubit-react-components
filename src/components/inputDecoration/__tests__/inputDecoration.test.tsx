import { axe } from 'vitest-axe';

import { InputDecorationVariantType } from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { render } from '@/lib/tests/render/render';

import type { InputDecorationProps } from '../types/inputDecoration';

import { InputDecoration } from '../inputDecoration';

const mockProps: InputDecorationProps = {
  decoration: {
    altText: 'alt text icon',
    icon: ICONS.PLACEHOLDER,
    onClick: () => {
      return null;
    },
  },
  disabled: true,
  variant: InputDecorationVariantType.STANDARD,
};

describe('Input Decoration Component', () => {
  it('Should display the component correctly', async () => {
    const { container, getByRole } = render(<InputDecoration {...mockProps} />);

    const decoration = getByRole('button', { name: 'alt text icon' });
    expect(decoration).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should return null without icon', async () => {
    const { container } = render(
      <InputDecoration {...mockProps} decoration={undefined} />,
    );

    expect(container).toBeEmptyDOMElement();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
