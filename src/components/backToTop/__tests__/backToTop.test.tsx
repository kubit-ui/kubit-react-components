// testing-library
import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '../../../tests/renderProvider/renderProvider.utility';
import { BackToTop } from '../index';

const mockProps = {
  variant: 'DEFAULT',
  icon: { icon: 'ARROW_ICON' },
};

describe('BackToTop component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render BackToTop component', () => {
    const scrollToMock = jest.fn();
    jest.spyOn(window, 'scrollTo').mockImplementation(scrollToMock);

    renderProvider(
      <div>
        <BackToTop {...mockProps} />
        <footer>footer</footer>
      </div>
    );

    const buttonBackToTop = screen.getByTestId('backToTopButton');
    expect(buttonBackToTop).toBeInTheDocument();

    fireEvent.click(buttonBackToTop);
    expect(scrollToMock).toHaveBeenCalled();
  });

  test('When scrollY is >= visibilityScrollOffset the button will be shown', () => {
    const scrollToMock = jest.fn();
    const ref = React.createRef<HTMLButtonElement>();
    jest.spyOn(window, 'scrollTo').mockImplementation(scrollToMock);
    window.scrollY = 2;
    const ref = React.createRef<HTMLButtonElement>();
    renderProvider(
      <div>
        <BackToTop {...mockProps} ref={ref} />
        <footer>footer</footer>
      </div>
    );

    const buttonBackToTop = screen.getByTestId('backToTopButton');
    expect(buttonBackToTop).toHaveStyle('display: flex');
  });
});
