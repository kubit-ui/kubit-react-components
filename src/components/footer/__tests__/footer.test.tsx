import * as React from 'react';

import { axe } from 'jest-axe';

import * as useMediaDevice from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { Footer } from '../footer';
import { FooterMobileColumnFlow, FooterPositionType } from '../types';

const mockBase = { variant: 'DEFAULT' };

describe('Footer component', () => {
  it('Should renders Footer with left, center, and right content', async () => {
    const { container, getByText, getByRole } = renderProvider(
      <Footer {...mockBase}>
        <div data-position={FooterPositionType.LEFT}>Left content</div>
        <div data-position={FooterPositionType.CENTER}>Center content</div>
        <div data-position={FooterPositionType.RIGHT}>Right content</div>
      </Footer>
    );

    expect(getByRole(ROLES.CONTENTINFO)).toBeInTheDocument();
    expect(getByText('Left content')).toBeInTheDocument();
    expect(getByText('Center content')).toBeInTheDocument();
    expect(getByText('Right content')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should renders Footer with its children', () => {
    const { getByText } = renderProvider(
      <Footer {...mockBase}>
        <div>Content</div>
      </Footer>
    );

    expect(getByText('Content')).toBeInTheDocument();
  });

  it('Should renders Footer with only left content', () => {
    const leftContent = <div data-position={FooterPositionType.LEFT}>Left content</div>;

    const { getByText, queryByText } = renderProvider(<Footer {...mockBase}>{leftContent}</Footer>);

    expect(getByText('Left content')).toBeInTheDocument();
    expect(queryByText('Center content')).toBeNull();
    expect(queryByText('Right content')).toBeNull();
  });

  it('Footer may set the content to have vertical flex direction (forceVertical)', async () => {
    const { container } = renderProvider(
      <Footer {...mockBase} forceVertical>
        <div data-position={FooterPositionType.LEFT}>Left content</div>
        <div data-position={FooterPositionType.CENTER}>Center content</div>
        <div data-position={FooterPositionType.RIGHT}>Right content</div>
      </Footer>
    );

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Elements group positions can be changed for MOBILE', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { getByText } = renderProvider(
      <Footer
        {...mockBase}
        footerMobileSortConfig={{
          column: FooterMobileColumnFlow.DEFAULT,
          firstContent: FooterPositionType.RIGHT,
          secondContent: FooterPositionType.CENTER,
          thirdContent: FooterPositionType.LEFT,
        }}
      >
        <div data-position={FooterPositionType.LEFT}>Left content</div>
        <div data-position={FooterPositionType.CENTER}>Center content</div>
        <div data-position={FooterPositionType.RIGHT}>Right content</div>
      </Footer>
    );

    const leftContent = getByText('Left content');
    const centerContent = getByText('Center content');

    // centerContent is before than leftContent
    expect(centerContent.compareDocumentPosition(leftContent)).toBe(4);
  });

  it('Elements inner group direction can be changed for MOBILE', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { getByText } = renderProvider(
      <Footer
        {...mockBase}
        footerMobileSortConfig={{
          column: FooterMobileColumnFlow.REVERSE,
        }}
      >
        <div data-position={FooterPositionType.LEFT}>Left content I</div>
        <div data-position={FooterPositionType.LEFT}>Left content II</div>
        <div data-position={FooterPositionType.CENTER}>Center content</div>
        <div data-position={FooterPositionType.RIGHT}>Right content</div>
      </Footer>
    );

    const leftContentI = getByText('Left content I');
    const leftContentII = getByText('Left content II');

    // leftContent if before than leftContentI
    expect(leftContentII.compareDocumentPosition(leftContentI)).toBe(4);
  });

  it('When simpleContainer no footer tag is created', () => {
    const { queryByRole } = renderProvider(
      <Footer {...mockBase} simpleContainer>
        <div data-position={FooterPositionType.LEFT}>Left content</div>
        <div data-position={FooterPositionType.CENTER}>Center content</div>
        <div data-position={FooterPositionType.RIGHT}>Right content</div>
      </Footer>
    );

    expect(queryByRole(ROLES.CONTENTINFO)).not.toBeInTheDocument();
  });
});
