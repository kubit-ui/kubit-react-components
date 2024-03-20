import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { PageControlAutomate } from '../index';

const mockProps = {
  variant: 'DEFAULT',
  leftArrow: {
    icon: { icon: 'ARROW_LEFT', altText: 'alt text left arrow' },
  },
  rightArrow: {
    icon: { icon: 'ARROW_RIGHT', altText: 'alt text right arrow' },
  },
  playStop: {
    icon: { icon: 'PLAY_BUTTON', altText: 'alt text play' },
    twistedIcon: { icon: 'STOP_BUTTON', altText: 'alt text stop' },
  },
  mediaProgressBar: {
    barsNum: 3,
    barProgressDuration: 2000,
    barsAriaLabels: ['aria-label-0', 'aria-label-1', 'aria-label-2'],
    clickableBars: true,
  },
  currentBar: 0,
};

describe('PageControlAutomate Component', () => {
  it('Render with a valid HTML structure', async () => {
    const mockHandleChangeIndicator = jest.fn();
    const { container } = renderProvider(
      <PageControlAutomate
        {...mockProps}
        mediaProgressBar={{ ...mockProps.mediaProgressBar, onBarChange: mockHandleChangeIndicator }}
      />
    );

    const leftArrow = screen.getByLabelText(mockProps.leftArrow.icon.altText);
    const rightArrow = screen.getByLabelText(mockProps.rightArrow.icon.altText);
    const mediaButtonPlay = screen.getByLabelText(mockProps.playStop.icon.altText);
    const indicator0 = screen.getByTestId('indicator-0');
    const indicatorProgress0 = screen.getByTestId('indicatorProgress-0');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
    expect(mediaButtonPlay).toBeInTheDocument();
    expect(indicator0).toBeInTheDocument();
    expect(indicatorProgress0).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When click on the rightArrow, handleChangeIndicator is called', () => {
    const mockHandleChangeIndicator = jest.fn();
    renderProvider(
      <PageControlAutomate
        {...mockProps}
        mediaProgressBar={{ ...mockProps.mediaProgressBar, onBarChange: mockHandleChangeIndicator }}
      />
    );

    const rightArrow = screen.getByLabelText(mockProps.rightArrow.icon.altText);

    fireEvent.click(rightArrow);
    expect(mockHandleChangeIndicator).toHaveBeenCalledWith(1);
  });

  it('When click on the leftArrow, handleChangeIndicator is called', () => {
    const mockHandleChangeIndicator = jest.fn();
    renderProvider(
      <PageControlAutomate
        {...mockProps}
        currentBar={1}
        mediaProgressBar={{ ...mockProps.mediaProgressBar, onBarChange: mockHandleChangeIndicator }}
      />
    );

    const leftArrow = screen.getByLabelText(mockProps.leftArrow.icon.altText);

    fireEvent.click(leftArrow);
    expect(mockHandleChangeIndicator).toHaveBeenCalledWith(0);
  });

  it('Clicking on the mediaButton will play/stop the animation, and a callback will be executed', () => {
    const onClickMediaButton = jest.fn();
    const playStopButton = {
      ...mockProps.playStop,
      onClick: onClickMediaButton,
    };
    renderProvider(<PageControlAutomate {...mockProps} playStop={playStopButton} />);
    const mediaButtonPlay = screen.getByLabelText(mockProps.playStop.icon.altText);

    fireEvent.click(mediaButtonPlay);
    const mediaButtonStop = screen.getByLabelText(mockProps.playStop.twistedIcon.altText);

    expect(mediaButtonStop).toBeInTheDocument();
    expect(onClickMediaButton).toHaveBeenCalled();
  });

  it('LeftArrow will be disabled in the first position', () => {
    renderProvider(<PageControlAutomate {...mockProps} currentBar={0} />);
    const leftArrow = screen.getByLabelText(mockProps.leftArrow.icon.altText);

    expect(leftArrow).toBeDisabled();
  });

  it('RightArrow will be disabled in the last position', () => {
    renderProvider(
      <PageControlAutomate {...mockProps} currentBar={mockProps.mediaProgressBar.barsNum - 1} />
    );
    const leftArrow = screen.getByLabelText(mockProps.rightArrow.icon.altText);

    expect(leftArrow).toBeDisabled();
  });
});
