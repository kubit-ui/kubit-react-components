import { fireEvent, screen } from '@testing-library/react';
import { useRef } from 'react';

import { render } from '@/lib/tests/render/render';

import { useTooltip } from '../hooks/useTooltip';
import { TooltipControlled } from '../tooltipControlled';

const mockProps = {
  children: 'children',
  content: { content: 'content' },
  onBlur: vi.fn(),
  onClick: vi.fn(),
  onFocus: vi.fn(),
  onKeyDown: vi.fn(),
  onMouseDown: vi.fn(),
  onMouseUp: vi.fn(),
  onWrapperMouseEnter: vi.fn(),
  onWrapperMouseLeave: vi.fn(),
  variant: 'DEFAULT',
};

const TestTooltipControlled = () => {
  const labelRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const { hideTooltip, showTooltip } = useTooltip({
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
      onWrapperMouseEnter={handleMouseEnter}
      onWrapperMouseLeave={handleMouseLeave}
    />
  );
};

describe('Tooltip Controlled', () => {
  it('is possible to use the tooltip controlled and the hook useTooltip to implement custom behaviours', () => {
    const { container } = render(<TestTooltipControlled />);
    const label = screen.getByText(mockProps.children);

    fireEvent.mouseEnter(label);

    const content = screen.getByText(mockProps.content.content);
    expect(content).not.toBeNull();
    expect(container).toHTMLValidate();
  });
});
