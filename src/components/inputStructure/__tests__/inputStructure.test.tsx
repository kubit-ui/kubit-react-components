import { fireEvent } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { InputStructure } from '@/components/inputStructure';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

const mockProps = {
  topContent: 'top',
  leftContent: 'left',
  bottomContent: 'bottom',
  rightContent: 'right',
  centerContent: 'center',
  onBlurStructure: jest.fn(),
  onFocusStructure: jest.fn(),
  dataTestIdParentContainer: 'parentId',
};

describe('InputStructure component', () => {
  test('Should show all content', async () => {
    const { getByText, container } = renderProvider(<InputStructure {...mockProps} />);

    expect(getByText('top')).toBeInTheDocument();
    expect(getByText('left')).toBeInTheDocument();
    expect(getByText('bottom')).toBeInTheDocument();
    expect(getByText('right')).toBeInTheDocument();
    expect(getByText('center')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  test('Check onBlur and onFocus', async () => {
    const { getByTestId, container } = renderProvider(<InputStructure {...mockProps} />);

    const inputStructure = getByTestId(mockProps.dataTestIdParentContainer);

    fireEvent.blur(inputStructure);
    expect(mockProps.onBlurStructure).toHaveBeenCalled();

    fireEvent.focus(inputStructure);
    expect(mockProps.onFocusStructure).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
