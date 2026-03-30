import type { Placement } from '@floating-ui/dom';

// Available position types for the popover
export const placements: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
];

interface RadioGroupPositionsProps {
  anchorElRef: React.RefObject<HTMLDivElement>;
  handlePlacementChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placement: Placement;
}

export const RadioGroupPositions = ({
  anchorElRef,
  handlePlacementChange,
  placement,
}: RadioGroupPositionsProps): JSX.Element => {
  // Styles for main demo container
  const containerStyle = {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '20px',
    position: 'relative' as const,
  };

  // Styles for radio buttons area
  const radioGroupStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.03)',
    display: 'grid',
    gap: '0px',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    padding: '6px',
    position: 'relative' as const,
  };

  // Function to determine the position of each radio button in the grid

  const getRadioPosition = (
    p: Placement,
  ): { gridColumn: string; gridRow: string } => {
    switch (p) {
      case 'top-start':
        return { gridColumn: '2', gridRow: '1' };
      case 'top':
        return { gridColumn: '3', gridRow: '1' };
      case 'top-end':
        return { gridColumn: '4', gridRow: '1' };
      case 'right-start':
        return { gridColumn: '5', gridRow: '2' };
      case 'right':
        return { gridColumn: '5', gridRow: '3' };
      case 'right-end':
        return { gridColumn: '5', gridRow: '4' };
      case 'bottom-start':
        return { gridColumn: '2', gridRow: '5' };
      case 'bottom':
        return { gridColumn: '3', gridRow: '5' };
      case 'bottom-end':
        return { gridColumn: '4', gridRow: '5' };
      case 'left-start':
        return { gridColumn: '1', gridRow: '2' };
      case 'left':
        return { gridColumn: '1', gridRow: '3' };
      case 'left-end':
        return { gridColumn: '1', gridRow: '4' };
      default:
        return { gridColumn: '3', gridRow: '3' };
    }
  };

  return (
    <div style={containerStyle}>
      <div style={radioGroupStyle}>
        {placements.map((p) => (
          <div
            key={p}
            style={{
              ...getRadioPosition(p),
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <label
              style={{
                alignItems: 'center',
                backgroundColor: placement === p ? '#f5f5f5' : 'white',
                border:
                  placement === p ? '1px solid #1A1A1A' : '1px solid #e0e0e0',
                borderRadius: '4px',
                boxShadow:
                  placement === p ? '0 0 0 2px rgba(26, 26, 26, 0.1)' : 'none',
                cursor: 'pointer',
                display: 'flex',
                gap: '4px',
                padding: '4px 6px',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap' as const,
              }}
            >
              <input
                checked={placement === p}
                name="placement"
                style={{
                  accentColor: '#DF2B51',
                  cursor: 'pointer',
                  height: '14px',
                  width: '14px',
                }}
                type="radio"
                value={p}
                onChange={handlePlacementChange}
              />
              <span
                style={{
                  color: placement === p ? '#1A1A1A' : '#767676',
                  fontSize: '11px',
                  fontWeight: placement === p ? 500 : 400,
                }}
              >
                {p}
              </span>
            </label>
          </div>
        ))}
        {/* Anchor element */}
        <div
          style={{
            cursor: 'default',
            gridColumn: '3',
            gridRow: '3',
            pointerEvents: 'none',
            position: 'relative',
            transform: 'scale(1)',
            transition: 'all 0.2s ease',
          }}
        >
          <div
            ref={anchorElRef}
            style={{
              background: 'rgb(223, 43, 81)',
              border: '2px dashed black',
              padding: '36px 24px',
            }}
          >
            <p>AnchorEl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PopoverWithAnchorElementContentProps {
  placement: Placement;
}

export const PopoverWithAnchorElementContent = ({
  placement,
}: PopoverWithAnchorElementContentProps): React.ReactNode => (
  <div
    style={{
      background: '#767676',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.25)',
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      maxWidth: '180px',
      padding: '16px',
      position: 'relative',
      textAlign: 'center',
    }}
  >
    {placement}
  </div>
);
