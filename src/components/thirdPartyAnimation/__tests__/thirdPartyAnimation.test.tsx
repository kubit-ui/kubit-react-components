import { screen } from '@testing-library/react';
import * as React from 'react';

import lottie from 'lottie-web';

import { renderProvider } from '../../../tests/renderProvider/renderProvider.utility';
import { ThirdPartyAnimation } from '../index';

// mocks
jest.mock('lottie-web', () => ({
  __esModule: true,
  default: {
    loadAnimation: jest.fn(),
  },
}));

const mockProps = {
  ['aria-label']: 'animation',
  dataTestId: 'animation-component',
  height: '125px',
  variant: 'LOADER_PRIMARY',
  width: '125px',
  ref: jest.fn(),
};

describe('ThirdPartyAnimation component', () => {
  it('load animation should have been called', () => {
    renderProvider(<ThirdPartyAnimation {...mockProps} />);

    const thirdPartyAnimation = screen.getByTestId('animation-component');

    expect(lottie.loadAnimation).toHaveBeenCalled();
    expect(thirdPartyAnimation).toBeDefined();
  });

  it('ThirdPartyAnimation component without no mandatory props', () => {
    const mockProps = {
      ['aria-label']: 'animation',
      dataTestId: 'animation-component',
      height: '125px',
      width: '125px',
      variant: 'LOADER_PRIMARY',
    };

    renderProvider(<ThirdPartyAnimation {...mockProps} />);

    const animation = screen.getByTestId('animation-component');

    expect(lottie.loadAnimation).toHaveBeenCalled();
    expect(animation).toBeDefined();
  });
});
