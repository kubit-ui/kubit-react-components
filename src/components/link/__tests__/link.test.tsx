import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Link } from '../link';
import type { LinkProps } from '../types/link';

const mockProps: LinkProps = {
  alignCenter: true,
  ['aria-describedby']: 'Awesome link',
  ['aria-label']: 'I am link',
  children: 'Navigate to',
  color: '#333',
  'data-testid': 'Link',
  decoration: 'none',
  draggable: false,
  icon: { altText: 'link icon', icon: 'CHEVRON_UP' },
  iconPosition: 'left',
  target: '_blank',
  url: '#',
  variant: 'PRIMARY',
};

describe('Link Component', () => {
  it('Should have a correct structure', async () => {
    const { container, getByText } = render(
      <Link {...mockProps}>{mockProps.children}</Link>,
    );

    const link = getByText(mockProps.children as string);
    const results = await axe(container);

    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
    expect(link).not.toBeNull();
  });
});
