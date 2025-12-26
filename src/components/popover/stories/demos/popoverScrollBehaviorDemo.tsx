import {
  type CSSProperties,
  type ComponentProps,
  type FC,
  type ReactNode,
  useRef,
  useState,
} from 'react';

import { flip, size } from '@floating-ui/dom';

import { Text } from '@/components/text/text';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import {
  isKeyEnterPressed,
  isKeyEscapePressed,
  isKeySpacePressed,
} from '@/lib/utils/keyboard/keyboard';

import { Popover } from '../../popover';

interface SelectOption {
  value: string;
  label: string;
  color: string;
}

const colorOptions: SelectOption[] = [
  { color: '#ef4444', label: 'Red', value: 'red' },
  { color: '#f97316', label: 'Orange', value: 'orange' },
  { color: '#eab308', label: 'Yellow', value: 'yellow' },
  { color: '#22c55e', label: 'Green', value: 'green' },
  { color: '#06b6d4', label: 'Cyan', value: 'cyan' },
  { color: '#3b82f6', label: 'Blue', value: 'blue' },
  { color: '#a855f7', label: 'Purple', value: 'purple' },
  { color: '#ec4899', label: 'Pink', value: 'pink' },
  { color: '#800000', label: 'Maroon', value: 'maroon' },
  { color: '#000000', label: 'Black', value: 'black' },
  { color: '#ffffff', label: 'White', value: 'white' },
];

// Style constants
const STYLES = {
  COLORS: {
    active: '#adb5bd',
    border: '#e9ecef',
    hover: '#f8f9fa',
    placeholder: '#6c757d',
    primary: '#f8f9fa',
    secondary: '#e9ecef',
    white: 'white',
  },
  SIZES: {
    bottomBlock: '300px',
    contentBlock: '150px',
    dropdownMaxHeight: '320px',
    minSelectWidth: '100%',
  },
  SPACING: {
    large: '16px',
    medium: '12px',
    small: '8px',
    xlarge: '20px',
  },
} as const;

// Reusable components
interface ContentBlockProps {
  children: ReactNode;
  height?: string;
}

const ContentBlock: FC<ContentBlockProps> = ({
  children,
  height = STYLES.SIZES.contentBlock,
}) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: STYLES.COLORS.white,
      border: `1px solid ${STYLES.COLORS.border}`,
      borderRadius: STYLES.SPACING.medium,
      display: 'flex',
      height,
      justifyContent: 'center',
      padding: STYLES.SPACING.medium,
    }}
  >
    {children}
  </div>
);

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

const ContentSection: FC<ContentSectionProps> = ({ children, title }) => (
  <div>
    <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED} weight={600}>
      {title}
    </Text>
    <div
      style={{
        backgroundColor: STYLES.COLORS.primary,
        display: 'flex',
        flexDirection: 'column',
        gap: STYLES.SPACING.small,
        height: '100%',
        justifyContent: 'space-around',
        margin: `${STYLES.SPACING.medium} 0`,
        padding: STYLES.SPACING.xlarge,
      }}
    >
      {children}
    </div>
  </div>
);

interface ColorIndicatorProps {
  color: string;
}

const ColorIndicator: FC<ColorIndicatorProps> = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '50%',
      flexShrink: 0,
      height: STYLES.SPACING.large,
      width: STYLES.SPACING.large,
    }}
  />
);

// Custom hooks
const useKeyboardHandlers = (onToggle: () => void, onClose: () => void) => {
  const handleSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isKeyEnterPressed(e.key) || isKeySpacePressed(e.key)) {
      e.preventDefault();
      onToggle();
    }
    if (isKeyEscapePressed(e.key)) {
      onClose();
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    onSelect: () => void,
  ) => {
    if (isKeyEnterPressed(e.key) || isKeySpacePressed(e.key)) {
      e.preventDefault();
      onSelect();
    }
  };

  return { handleOptionKeyDown, handleSelectKeyDown };
};

/**
 * Component to demonstrate scroll behavior with Popover used as a dropdown
 *
 * This component showcases how the popover repositions itself when scrolling
 * occurs and there's not enough space below the anchor element. The floating-ui
 * library automatically handles the repositioning logic.
 */
export const ScrollBehaviorDemo = (
  args: ComponentProps<typeof Popover>,
): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const handleOptionSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const { handleOptionKeyDown, handleSelectKeyDown } = useKeyboardHandlers(
    handleToggle,
    handleClose,
  );

  const selectStyles: CSSProperties = {
    alignItems: 'center',
    backgroundColor: isOpen ? STYLES.COLORS.secondary : STYLES.COLORS.primary,
    borderColor: isOpen ? STYLES.COLORS.active : STYLES.COLORS.border,
    borderRadius: STYLES.SPACING.small,
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'default',
    display: 'flex',
    gap: STYLES.SPACING.small,
    minWidth: STYLES.SIZES.minSelectWidth,
    outline: 'none',
    padding: `${STYLES.SPACING.medium} ${STYLES.SPACING.large}`,
    position: 'relative',
    transition: 'all 0.2s ease',
    userSelect: 'none',
  };

  const optionStyles: CSSProperties = {
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    gap: STYLES.SPACING.small,
    outline: 'none',
    padding: `${STYLES.SPACING.small} ${STYLES.SPACING.medium}`,
    transition: 'background-color 0.15s ease',
  };

  const arrowStyles: CSSProperties = {
    fontSize: STYLES.SPACING.medium,
    marginLeft: 'auto',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: STYLES.SPACING.small,
      }}
    >
      {/* Header section */}
      <div>
        <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED} weight={700}>
          Popover Scroll Behavior Demo
        </Text>
        <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
          This demo shows how the popover automatically repositions when
          there&apos;s not enough space below the trigger element. Try scrolling
          the page while the dropdown is open to see the behavior in action.
        </Text>
      </div>

      {/* Top content section */}
      <ContentSection title="Scroll down to test the behavior">
        <ContentBlock>
          <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
            Content block - This content creates the scrollable area to
            demonstrate the popover repositioning behavior.
          </Text>
        </ContentBlock>
      </ContentSection>

      {/* Select component */}
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: STYLES.SPACING.small,
          minHeight: '120px',
          padding: `${STYLES.SPACING.xlarge} 0`,
        }}
      >
        <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED} weight={600}>
          Select a color (the dropdown will reposition on scroll)
        </Text>
        <div
          ref={selectRef}
          aria-controls="color-listbox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Select a color"
          role="combobox"
          style={selectStyles}
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={handleSelectKeyDown}
        >
          {selectedOption ? (
            <>
              <ColorIndicator color={selectedOption.color} />
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span style={{ color: STYLES.COLORS.placeholder }}>
              Select a color...
            </span>
          )}
          <span style={arrowStyles}>▼</span>
        </div>

        <Popover
          {...args}
          anchorElement={selectRef.current}
          disableAnimations={true}
          middlewares={[
            size({
              apply({ rects, elements }) {
                Object.assign(elements.floating.style, {
                  minWidth: `${rects.reference.width}px`,
                });
              },
            }),
            flip(),
          ]}
          open={isOpen}
          placement="bottom-start"
          onClose={handleClose}
        >
          <div
            aria-label="Color options"
            id="color-listbox"
            role="listbox"
            style={{
              backgroundColor: STYLES.COLORS.white,
              border: `1px solid ${STYLES.COLORS.border}`,
              borderRadius: STYLES.SPACING.small,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxHeight: STYLES.SIZES.dropdownMaxHeight,
              overflowY: 'auto',
              padding: '4px',
            }}
          >
            {colorOptions.map((option) => {
              const isSelected = selectedOption?.value === option.value;
              return (
                <div
                  key={option.value}
                  aria-selected={isSelected}
                  className="dropdown-option"
                  role="option"
                  style={{
                    ...optionStyles,
                    backgroundColor: isSelected
                      ? STYLES.COLORS.secondary
                      : 'transparent',
                  }}
                  tabIndex={0}
                  onClick={() => handleOptionSelect(option)}
                  onKeyDown={(e) =>
                    handleOptionKeyDown(e, () => handleOptionSelect(option))
                  }
                  onMouseDown={(e) => e.preventDefault()} // Prevent focus change that could delay closing
                >
                  <ColorIndicator color={option.color} />
                  <span>{option.label}</span>
                  {isSelected && (
                    <span style={{ fontSize: '14px', marginLeft: 'auto' }}>
                      ✓
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Popover>
      </div>

      {/* Bottom content section */}
      <ContentSection title="More content below">
        <ContentBlock height={STYLES.SIZES.bottomBlock}>
          <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
            Bottom content block - Keep scrolling to see how the popover
            repositions itself when space becomes limited.
          </Text>
        </ContentBlock>
      </ContentSection>
    </div>
  );
};
