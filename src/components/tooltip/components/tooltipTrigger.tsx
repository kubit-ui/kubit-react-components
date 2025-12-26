import type {
  AriaAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from 'react';

interface TooltipTriggerProps {
  disabled?: boolean;
  childrenAsButton: boolean;
  ariaDescribedBy?: string;
  triggerAsButton?: Pick<
    AriaAttributes,
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-describedby'
    | 'aria-controls'
    | 'aria-expanded'
    | 'aria-pressed'
    | 'aria-disabled'
  >;

  onClick?: MouseEventHandler<HTMLElement>;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
  onMouseDown?: MouseEventHandler<HTMLElement>;
  onMouseUp?: MouseEventHandler<HTMLElement>;
}
export const TooltipTrigger = ({
  ariaDescribedBy,
  children,
  childrenAsButton,
  disabled,
  onClick,
  onKeyDown,
  onMouseDown,
  onMouseUp,
  triggerAsButton,
}: PropsWithChildren<TooltipTriggerProps>): ReactNode => {
  if (childrenAsButton) {
    return (
      <button
        aria-describedby={ariaDescribedBy}
        aria-disabled={disabled}
        className="kbt-tooltip__trigger-wrapper "
        {...triggerAsButton}
        disabled={disabled}
        type="button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {children}
      </button>
    );
  }
  return (
    <div
      className="kbt-tooltip__trigger-wrapper "
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );
};
