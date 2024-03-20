import * as React from 'react';

import { axe } from 'jest-axe';

import { TextDecorationType } from '@/components/text';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Link } from '../link';
import { LinkPositionType, LinkTargetType } from '../types';

const mockProps = {
  ['aria-label']: 'I am link',
  ['aria-describedby']: 'Awesome link',
  children: 'Navigate to',
  color: '#333',
  dataTestId: 'Link',
  decoration: TextDecorationType.NONE,
  icon: { icon: 'CHEVRON_UP', altText: 'link icon' },
  iconPosition: LinkPositionType.LEFT,
  target: LinkTargetType.BLANK,
  url: '#',
  alignCenter: true,
  draggable: false,
  variant: 'PRIMARY',
};

describe('Link Component', () => {
  it('Should have a correct structure', async () => {
    const { getByText, container } = renderProvider(<Link {...mockProps} />);

    const link = getByText(mockProps.children);
    const results = await axe(container);

    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
    expect(link).toBeInTheDocument();
  });
});
