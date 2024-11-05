import * as React from 'react';

import { TextCount } from '@/components/textCount/textCount';

import { InputControlled as Input } from '../input';
import { ScreenReaderOnly } from '../screenReaderOnly';
import { IInputCounterStandAlone } from './types';
import { getCharactersLength } from './utils';

export const InputCounterStandAloneComponent = <V extends string | unknown>(
  props: IInputCounterStandAlone<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined | null>
): JSX.Element => {
  const screenReaderCurrentCharactersId = 'screenReaderCurrentCharactersId';
  const renderTextCounter = (): React.ReactNode => {
    if (!props.styles?.[props.state]?.textCountVariant) {
      return null;
    }

    return (
      <TextCount
        currentCharacters={getCharactersLength(
          props.value,
          ref as React.MutableRefObject<HTMLInputElement>
        )}
        id={`${props.id}Counter`}
        leftColor={props.styles?.[props.state]?.textCountLeftColor}
        leftWeight={props.styles?.[props.state]?.textCountLeftWeight}
        maxLength={props.maxLength}
        rightColor={props.styles?.[props.state]?.textCountRightColor}
        rightWeight={props.styles?.[props.state]?.textCountRightWeight}
        screenReaderText={props.screenReaderTextCount}
        textVariant={props.styles?.[props.state]?.textCountTextVariant}
        variant={props.styles?.[props.state]?.textCountVariant as string}
        {...props.textCount}
      />
    );
  };

  return (
    <>
      <Input
        {...props}
        ref={ref}
        aria-describedby={props.showMessage ? screenReaderCurrentCharactersId : undefined}
        id={props.id}
        overrideStyles={props.styles}
        textCounter={renderTextCounter()}
        variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
      />
      <ScreenReaderOnly id={screenReaderCurrentCharactersId}>
        {props.screenReaderCurrentCharacters}
      </ScreenReaderOnly>
    </>
  );
};

const InputCounterStandAlone = React.forwardRef(InputCounterStandAloneComponent) as <
  V extends string | unknown,
>(
  props: IInputCounterStandAlone<V> & {
    ref?: React.ForwardedRef<HTMLInputElement | undefined>;
  }
) => JSX.Element;

export { InputCounterStandAlone };
