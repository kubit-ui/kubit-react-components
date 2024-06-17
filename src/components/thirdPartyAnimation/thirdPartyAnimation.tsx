import * as React from 'react';

import lottie, { AnimationItem } from 'lottie-web';

import { useStyles } from '@/hooks/useStyles/useStyles';

import { ThirdPartyAnimationStandAlone } from './thirdPartyAnimationStandAlone';
import { IThirdPartyAnimation } from './types';

const THIRD_PARTY_ANIMATION_STYLES = 'THIRD_PARTY_ANIMATION_STYLES';

const ThirdPartyAnimationComponent = <V extends string | unknown>(
  { autoplay = true, loop = true, variant, ...props }: IThirdPartyAnimation<V>,
  ref: React.ForwardedRef<HTMLDivElement | null>
): JSX.Element => {
  const [animation, setAnimation] = React.useState<AnimationItem>();
  const variantTheme = useStyles<{ thirdPartyAnimationData: object }, V>(
    THIRD_PARTY_ANIMATION_STYLES,
    variant
  );

  const { thirdPartyAnimationData } = variantTheme;
  const element = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => {
    return element.current as HTMLDivElement;
  }, []);

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

const ThirdPartyAnimation = React.forwardRef(ThirdPartyAnimationComponent) as <V>(
  props: React.PropsWithChildren<IThirdPartyAnimation<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement | null> | undefined | null;
  }
) => ReturnType<typeof ThirdPartyAnimationComponent>;

/**
 * @description
 * ThirdPartyAnimation component is a component that can be used to create a third party animation.
 * @param {React.PropsWithChildren<IThirdPartyAnimation<V>>} props
 * @returns {JSX.Element}
 */
export { ThirdPartyAnimation };
