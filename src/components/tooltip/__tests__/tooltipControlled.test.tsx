import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { useTooltip } from '../hooks';
import { TooltipControlled } from '../tooltipControlled';

window.matchMedia = windowMatchMedia();

const mockProps = {
  children: 'children',
  title: { content: 'title' },
  variant: 'DEFAULT',
};

describe('Tooltip Controlled', () => {
  it('is possible to use the tooltip controlled and the hook useTooltip to implement custom behaviours', () => {
    renderProvider(<TestTooltipControlled />);
    const label = screen.getByText(mockProps.children);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title.content);
    expect(title).toBeInTheDocument();
  });
});

const TestTooltipControlled = () => {
  const labelRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const { showTooltip, hideTooltip } = useTooltip({
    labelRef,
    tooltipRef,
    variant: mockProps.variant,
  });

  const handleMouseEnter = () => {
    showTooltip();
  };

  const handleMouseLeave = () => {
    hideTooltip();
  };

  return (
    <TooltipControlled
      {...mockProps}
      labelRef={labelRef}
      tooltipAsModal={false}
      tooltipRef={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
