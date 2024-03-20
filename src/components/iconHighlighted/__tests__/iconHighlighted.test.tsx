import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { IconHighlighted } from '../iconHighlighted';
import { IconHighlightedSizeType } from '../types/size';
import { IconHighlightedType } from '../types/type';

const mockPropsInformative = {
  variant: 'ROUND',
  size: IconHighlightedSizeType.MEDIUM,
  type: IconHighlightedType.INFORMATIVE,
  altText: 'icon label',
  icon: 'ADD',
};

const mockPropsDecorative = {
  variant: 'ROUND',
  size: IconHighlightedSizeType.MEDIUM,
  type: IconHighlightedType.DECORATIVE,
  altText: 'icon label',
  icon: 'ADD',
};

describe('IconHighlighted Component', () => {
  it('Should render IconHighlighted with decorative icon', async () => {
    const { getByRole, container } = renderProvider(<IconHighlighted {...mockPropsInformative} />);

    const iconHighlighted = getByRole('img', { name: 'icon label', hidden: false });

    expect(iconHighlighted).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render IconHighlighted with informative icon', async () => {
    const { getByRole, container } = renderProvider(<IconHighlighted {...mockPropsDecorative} />);

    const iconHighlighted = getByRole('img', { hidden: true });

    expect(iconHighlighted).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
