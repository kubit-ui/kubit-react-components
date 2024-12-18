import React from 'react';

import { isKeyEnterPressed, isKeySpacePressed } from '../../utils/keyboard/keyboard.utility';
import { PillControlled } from './pillControlled';
import { IPillUnControlled } from './types/pill';

/**
 * @deprecated Try the new PillV2 component
 */
export const PillUnControlled = ({
  initialState = false,
  focus,
  ...props
}: IPillUnControlled): React.JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [selected, setSelected] = React.useState(initialState);
  const setPillSelected = checked => {
    setSelected(checked);
  };

  React.useEffect(() => {
    if (focus) {
      ref.current?.focus();
    }
  }, [focus]);

  const handleOnKeyDown: (value: string) => React.KeyboardEventHandler<HTMLDivElement> =
    value => event => {
      if (isKeyEnterPressed(event.key) || isKeySpacePressed(event.key)) {
        event.preventDefault();
        props.onPillChange?.(true, value);
      }
    };

  return (
    <PillControlled
      {...props}
      ref={ref}
      selected={props.selected ?? selected}
      onKeyDown={handleOnKeyDown}
      onPillChange={props.onPillChange ?? setPillSelected}
    >
      {props.children}
    </PillControlled>
  );
};

export { PillUnControlled as Pill };
