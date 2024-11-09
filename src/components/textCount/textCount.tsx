import React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { TextCountStandAlone } from './textCountStandAlone';
import { ITextCountControlled, ITextCountStandAlone } from './types/textCount';
import { TextCountPropsStylesType } from './types/textCountTheme';

const TEXT_COUNT_STYLES = 'TEXT_COUNT_STYLES';

const TextCountComponent = React.forwardRef(
  (
    { variant, ctv, ...props }: ITextCountControlled,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<TextCountPropsStylesType>(TEXT_COUNT_STYLES, variant, ctv);

    return <TextCountStandAlone {...props} ref={ref} styles={styles} />;
  }
);
TextCountComponent.displayName = 'TextCountComponent';

const TextCountBoundary = (
  props: ITextCountControlled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TextCountStandAlone {...(props as unknown as ITextCountStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <TextCountComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated This component has been deprecated and will be not exported in the next MAJOR release.
 * @description
 * TextCount component is a component that can be used to create a counter of characters.
 * @param {React.PropsWithChildren<ITextCountControlled>} props
 * @returns {JSX.Element}
 */
export const TextCount = React.forwardRef(TextCountBoundary);
