// testing-library
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { BackToTopUnControlled as BackToTop } from '../backToTopUnControlled';

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

    const buttonBackToTop = screen.getByTestId('back-to-top');
    expect(buttonBackToTop).toBeInTheDocument();

    fireEvent.click(buttonBackToTop);
    expect(scrollToMock).toHaveBeenCalled();
  });

  test('When scrollY is >= visibilityScrollOffset the button will be shown', () => {
    const scrollToMock = jest.fn();
    const ref = React.createRef<HTMLButtonElement>();
    jest.spyOn(window, 'scrollTo').mockImplementation(scrollToMock);
    window.scrollY = 2;
    renderProvider(
      <div>
        <BackToTop {...mockProps} ref={ref} />
        <footer>footer</footer>
      </div>
    );

    const buttonBackToTop = screen.getByTestId('back-to-top');
    expect(buttonBackToTop).toHaveStyle('display: flex');
  });
});
