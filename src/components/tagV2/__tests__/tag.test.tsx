import React from 'react';

import { axe } from 'jest-axe';

import { ICONS } from '@/assets/storybook/icons/icons';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TagV2 as Tag } from '../tag';

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
