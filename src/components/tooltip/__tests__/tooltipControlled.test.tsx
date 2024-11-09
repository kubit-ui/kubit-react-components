import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { useTooltip } from '../hooks/useTooltip';
import { TooltipControlled } from '../tooltipControlled';

const mockProps = {
  children: 'children',
  title: { content: 'title' },
  variant: 'DEFAULT',
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn(),
  onClick: jest.fn(),
  onKeyDown: jest.fn(),
  onMouseDown: jest.fn(),
  onMouseUp: jest.fn(),
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
