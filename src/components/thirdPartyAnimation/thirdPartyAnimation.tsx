import * as React from 'react';

import lottie, { AnimationItem } from 'lottie-web';

import { useStyles } from '@/hooks/useStyles/useStyles';

import { ThirdPartyAnimationStandAlone } from './thirdPartyAnimationStandAlone';
import { IThirdPartyAnimation } from './types';

const THIRD_PARTY_ANIMATION_STYLES = 'THIRD_PARTY_ANIMATION_STYLES';

const ThirdPartyAnimationComponent = <V extends string | unknown>(
  { autoplay = true, loop = true, variant, ...props }: IThirdPartyAnimation<V>,
  ref: React.ForwardedRef<HTMLSpanElement | null>
): JSX.Element => {
  const [animation, setAnimation] = React.useState<AnimationItem>();
  const variantTheme = useStyles<{ thirdPartyAnimationData: object }, V>(
    THIRD_PARTY_ANIMATION_STYLES,
    variant
  );

  const { thirdPartyAnimationData } = variantTheme;
  const element = React.useRef<HTMLSpanElement>(null);

  React.useImperativeHandle(
    ref,
    () => {
      return element.current as HTMLSpanElement;
    },
    []
  );

  React.useEffect(() => {
    if (element.current) {
      animation?.destroy();

      const newAnimation = lottie.loadAnimation({
        autoplay,
        loop,
        animationData: thirdPartyAnimationData,
        container: element.current,
      });
      setAnimation(newAnimation);
    }

    return () => {
      animation?.destroy();
    };
  }, [thirdPartyAnimationData]);

  return <ThirdPartyAnimationStandAlone ref={element} {...props} />;
};

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release.
 *
 * ThirdPartyAnimation component is a component that can be used to create third-party animations.
 * @param {React.PropsWithChildren<IThirdPartyAnimation<V>>} props
 * @returns {JSX.Element}
 */
const ThirdPartyAnimation = React.forwardRef(ThirdPartyAnimationComponent) as <V>(
  props: React.PropsWithChildren<IThirdPartyAnimation<V>> & {
    ref?: React.ForwardedRef<HTMLSpanElement | null> | undefined | null;
  }
) => ReturnType<typeof ThirdPartyAnimationComponent>;

export { ThirdPartyAnimation };
