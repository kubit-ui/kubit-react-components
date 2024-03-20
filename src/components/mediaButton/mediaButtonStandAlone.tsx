import * as React from 'react';

import { ButtonType } from '../button';
//components
import { ElementOrIcon } from '../elementOrIcon';
import { Loader } from '../loader';
// styles
import { ButtonStyled, ContainerStyled } from './mediaButton.styled';
import { IMediaButtonStandAlone } from './types/mediaButton';

//constants
const TRANSITION_DURATION = '0.4s';

const FIRST_ICON_TWISTED_TRANSFORM_VALUE = 'rotateY(180deg) rotateZ(90deg)';
const FIRST_ICON_NOT_TWISTED_TRANSFORM_VALUE = 'rotateY(0deg) rotateZ(0deg)';
const SECOND_ICON_NOT_TWISTED_TRANSFORM_VALUE = 'rotateY(0deg) rotateZ(0deg)';
const SECOND_ICON_TWISTED_TRANSFORM_VALUE = 'rotateY(-180deg) rotateZ(-90deg)';

// eslint-disable-next-line complexity
const MediaButtonStandaloneComponent = (
  props: IMediaButtonStandAlone,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): React.JSX.Element => {
  const iconSize = props.styles?.buttonContainer?.width;
  const iconColor = props.disabled
    ? props.styles?.icon?.disabled?.color
    : props.styles?.icon?.color;

  const { ['aria-label']: iconAriaLabel, altText: iconAltText, ...icon } = props.icon;
  const {
    ['aria-label']: twistedIconAriaLabel,
    altText: twistedIconAltText,
    ...twistedIcon
  } = props.twistedIcon ?? {};

  const ariaLabel = props.twisted
    ? twistedIconAriaLabel ?? twistedIconAltText
    : iconAriaLabel ?? iconAltText;

  // When 'twisted' changes, We turn around the icon combined with the css property backface-visibility=hidden in the file icon.styled.ts
  const iconTwistAnimationTransformValue = props.twisted
    ? FIRST_ICON_TWISTED_TRANSFORM_VALUE
    : FIRST_ICON_NOT_TWISTED_TRANSFORM_VALUE;
  const twistedIconTwistAnimationTransformValue = props.twisted
    ? SECOND_ICON_NOT_TWISTED_TRANSFORM_VALUE
    : SECOND_ICON_TWISTED_TRANSFORM_VALUE;

  return (
    <ContainerStyled
      ref={ref}
      aria-label={ariaLabel}
      disabled={props.disabled}
      hasBackground={props.hasBackground}
      loading={props.loading}
      styles={props.styles}
      tabIndex={props.tabIndex}
      twistedIcon={!!twistedIcon}
      type={ButtonType.BUTTON}
      onClick={props.onClick}
    >
      <ButtonStyled styles={props.styles}>
        {props.loading && (props.styles?.loader?.variant || props.loader?.variant) ? (
          <Loader variant={props.styles?.loader?.variant} width={iconSize} {...props.loader} />
        ) : (
          <>
            <ElementOrIcon
              color={iconColor}
              height={iconSize}
              tabIndex={props.twisted ? -1 : 0}
              transitionDuration={TRANSITION_DURATION}
              twistAnimationTransformValue={twistedIcon ? iconTwistAnimationTransformValue : null}
              width={iconSize}
              {...icon}
            />
            {twistedIcon && (
              <ElementOrIcon
                color={props.styles?.iconToTransition?.color}
                height={iconSize}
                tabIndex={props.twisted ? 0 : -1}
                transitionDuration={TRANSITION_DURATION}
                twistAnimationTransformValue={twistedIconTwistAnimationTransformValue}
                width={iconSize}
                {...twistedIcon}
              />
            )}
          </>
        )}
      </ButtonStyled>
    </ContainerStyled>
  );
};

/**
 * @description
 * MediaButton component is used to show a button with an icon.
 * @param {React.PropsWithChildren<IMediaButtonStandAlone>} props
 * @returns {JSX.Element}
 */
export const MediaButtonStandalone = React.forwardRef(MediaButtonStandaloneComponent);
