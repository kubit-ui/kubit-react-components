// import { fireEvent } from '@testing-library/react';
// import { axe } from 'vitest-axe';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';
import { InputDecorationVariantType } from '@/lib/designSystem/kubit/components/inputDecoration/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { render } from '@/lib/tests/render/render';

import type { InputProps } from '../types/input';

import { Input } from '../input';

const mockProps: InputProps = {
  defaultValue: 'test',
  disabled: false,
  id: 'inputId',

  leftDecoration: {
    decoration: {
      altText: 'left icon',
      icon: ICONS.PLACEHOLDER,
      onClick: vi.fn(),
    },
    variant: InputDecorationVariantType.STANDARD,
  },
  placeholder: 'Placeholder',
  required: true,
  rightDecoration: {
    decoration: {
      altText: 'right icon',
      icon: ICONS.PLACEHOLDER,
      onClick: vi.fn(),
    },
    variant: InputDecorationVariantType.STANDARD,
  },
  type: 'text',
  variant: InputVariantType.STANDARD,
};

describe('Input Component', () => {
  it('Should display the component correctly', async () => {
    const { getByTestId } = render(<Input {...mockProps} />);
    const input = getByTestId('input-base');
    expect(input).toBeInTheDocument();
    // expect(input).toHaveAccessibleName(mockProps.label?.content as string);

    // const label = getByText(mockProps.label?.content as string);
    // expect(label).toBeInTheDocument();

    // const leftDecoration = getByRole('button', { name: 'left icon' });
    // fireEvent.click(leftDecoration);
    // expect(mockProps.leftDecoration?.decoration?.onClick).toHaveBeenCalled();

    // const rightDecoration = getByRole('button', { name: 'right icon' });
    // fireEvent.click(rightDecoration);
    // expect(mockProps.rightDecoration?.decoration?.onClick).toHaveBeenCalled();

    // const results = await axe(container);
    // expect(container).toHTMLValidate();
    // expect(results.violations).toHaveLength(0);
  });
});
