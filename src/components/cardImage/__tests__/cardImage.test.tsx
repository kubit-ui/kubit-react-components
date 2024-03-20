import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types';

import { CardImage } from '../cardImage';

const mockProps = {
  variant: 'DEFAULT',
  altTextImage: 'altTextImage',
  image: {
    [DeviceBreakpointsType.DESKTOP]: '',
    [DeviceBreakpointsType.TABLET]: '',
    [DeviceBreakpointsType.MOBILE]: '',
  },
  title: { content: 'title' },
};

describe('CardImage component', () => {
  test('CardImage component', async () => {
    const { container } = renderProvider(<CardImage {...mockProps} />);

    const text = screen.getByText('title');

    expect(text).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  test('Should be render without altText', () => {
    const { ...restMock } = mockProps;
    renderProvider(<CardImage {...restMock} />);

    const text = screen.getByText('title');
    expect(text).toBeDefined();
  });
});
