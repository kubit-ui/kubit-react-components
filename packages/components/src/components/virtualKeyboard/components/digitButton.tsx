import type { FC, MouseEventHandler } from 'react';

import { Text } from '@/components/text/text';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { VirtualKeyboardDigitButtonProps } from '../types/virtualKeyboard';

/**
 * DigitButton is a component that renders a button for a digit on the virtual keyboard.
 * It supports custom CSS classes and forwards the digit value on click.
 *
 * @param {VirtualKeyboardDigitButtonProps} props - The props for the digit button component.
 * @returns {JSX.Element} The rendered digit button component.
 */
export const DigitButton: FC<VirtualKeyboardDigitButtonProps> = ({
  cssClasses,
  digit,
  onClick,
  ...props
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(digit, event);
  };

  const dataTestId = props['data-testid'] || 'digit-button';
  const customProps = pickCustomAttributes(props);

  return (
    <button
      className={cssClasses?.digitbuttons}
      data-testid={dataTestId}
      type="button"
      onClick={handleClick}
      {...customProps}
    >
      <Text
        additionalClasses={{ text: cssClasses?.digittext }}
        component="span"
      >
        {digit}
      </Text>
    </button>
  );
};
