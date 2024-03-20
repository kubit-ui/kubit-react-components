import * as React from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';

const C_BLACK = 'black';
const C_RED = 'red';

export const UseClickOutsideSample = (): JSX.Element => (
  <div
    style={{
      height: 300,
      width: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <WithHookComponent />
  </div>
);

const WithHookComponent = () => {
  const ref = React.useRef(null);
  const [backgroundColor, setBackgroundColor] = React.useState(C_BLACK);
  const onClickOutside = React.useCallback(
    () => setBackgroundColor(prevState => (prevState === C_BLACK ? C_RED : C_BLACK)),
    [setBackgroundColor]
  );
  useClickOutside(ref, onClickOutside);
  return (
    <div
      ref={ref}
      style={{
        height: 100,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        backgroundColor,
      }}
    >
      Click outside me
    </div>
  );
};
