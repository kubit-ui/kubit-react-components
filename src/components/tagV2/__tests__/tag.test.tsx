import * as React from 'react';

import { axe } from 'jest-axe';

import { ICONS } from '@/assets';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Tag } from '../tag';

const mockProps = {
  variant: 'HEALTHY',
  icon: { icon: ICONS.ICON_PLACEHOLDER },
  label: { content: 'LABEL' },
};

describe('Tag component', () => {
  it('Should render tag component', async () => {
    const { container, getByText } = renderProvider(<Tag {...mockProps} />);

    const tagLabel = getByText(mockProps.label.content);

    expect(tagLabel).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
