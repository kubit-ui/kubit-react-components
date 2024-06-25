import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { IconHighlightedSizeType, IconHighlightedType } from '@/components/iconHighlighted';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { NavigationRow } from '../index';

const mockProps = {
  variant: 'DEFAULT',
  altText: 'NavigationRow',
  text: { content: 'text' },
  arrowIcon: { icon: 'RIGHTICON', altText: 'arrowIconAltText' },
};

describe('NavigationRow component', () => {
  it('Should show component', async () => {
    const { container } = renderProvider(<NavigationRow {...mockProps} />);
    const text = screen.getByText(mockProps.text.content);
    expect(text).toBeInTheDocument();
    const arrowIcon = screen.getByLabelText(mockProps.arrowIcon.altText);
    expect(arrowIcon).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should call onClick function when provided', async () => {
    const onClick = jest.fn();
    renderProvider(<NavigationRow {...mockProps} onClick={onClick} />);
    const navigationRow = screen.getByTestId('NavigationRow');
    await userEvent.click(navigationRow);
    expect(onClick).toHaveBeenCalled();
  });

  it('Should show component with description', () => {
    renderProvider(<NavigationRow {...mockProps} description={{ content: 'Description' }} />);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('Should show component with decorativeIcon', () => {
    renderProvider(
      <NavigationRow
        {...mockProps}
        decorativeIcon={{ icon: 'LEFTARROW', altText: 'decorativeIconAltText' }}
        description={{ content: 'Description' }}
      />
    );
    const decorativeIcon = screen.getByLabelText('decorativeIconAltText');
    expect(decorativeIcon).toBeDefined();
  });

  it('Should show component with iconHighlighted', () => {
    renderProvider(
      <NavigationRow
        {...mockProps}
        decorativeIcon={undefined}
        description={{ content: 'Description' }}
        iconHighlighted={{
          size: IconHighlightedSizeType.EXTRA_SMALL,
          icon: 'CLOSE',
          type: IconHighlightedType.INFORMATIVE,
          altText: 'Alt Text',
        }}
      />
    );
    const iconHighlighted = screen.getByRole('img', { name: 'Alt Text', hidden: false });
    expect(iconHighlighted).toBeDefined();
  });
});
