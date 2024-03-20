import * as React from 'react';

import { pickAriaProps } from '@/utils/aria/aria';

import { ElementOrIcon } from '../elementOrIcon';
import { Loader } from '../loader';
import { ButtonLoaderStyled, ButtonStyled } from './button.styled';
import { ButtonStateType, IButtonStandAlone } from './types';

export const ButtonStandAloneStructure = (props: IButtonStandAlone): JSX.Element => {
  const getHeightSize = () =>
    props.sizeStyles?.icon?.height ?? props.styles?.[props.state]?.icon?.height;
  const getWidthSize = () =>
    props.sizeStyles?.icon?.width ?? props.styles?.[props.state]?.icon?.width;

  return (
    <>
      {props.loading && props.loader ? (
        <>
          {typeof props.loader === 'object' && 'variant' in props.loader ? (
            <ButtonLoaderStyled>
              <Loader {...props.loader} width={getWidthSize()} />
            </ButtonLoaderStyled>
          ) : (
            <ButtonLoaderStyled>{props.loader as React.ReactNode}</ButtonLoaderStyled>
          )}
        </>
      ) : (
        <>
          <ElementOrIcon
            linearIcon
            color={props.styles?.[props.state]?.icon?.color}
            height={getHeightSize()}
            width={getWidthSize()}
            {...props.icon}
          />

          {props.children}
        </>
      )}
    </>
  );
};

const ButtonStandAloneComponent = (
  props: IButtonStandAlone,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);

  return (
    <ButtonStyled
      {...ariaProps}
      ref={ref}
      $fullWidth={props.fullWidth}
      $ghostText={
        React.Children.toArray(props.children)[0]
          ? React.Children.toArray(props.children)[0]?.toString()
          : ''
      }
      $iconPosition={props.iconPosition}
      $loading={props.loading}
      $sizeStyles={props.sizeStyles}
      $state={props.state}
      $styles={props.styles}
      alignText={props.alignText}
      data-testid={props.dataTestId}
      disabled={props.state === ButtonStateType.DISABLED}
      form={props.form}
      minWidth={props.minWidth}
      tabIndex={props.tabIndex}
      type={props.type}
      onClick={props.onClick}
    >
      <ButtonStandAloneStructure
        icon={props.icon}
        loader={props.loader}
        loading={props.loading}
        sizeStyles={props.sizeStyles}
        state={props.state}
        styles={props.styles}
      >
        {props.children}
      </ButtonStandAloneStructure>
    </ButtonStyled>
  );
};

/**
 * Represents the standalone button component.
 * @see {@link https://kubit.es/standalone-components/button/button-standalone/}
 *
 * @function ButtonStandAlone
 * @category StandAlone Components
 * @param {React.PropsWithChildren<IButtonStandAlone>} props - The props for the component.
 * @param {React.ForwardedRef<HTMLButtonElement>} ref - The ref for the component.
 * @returns {JSX.Element} - The JSX element representing the button component.
 *
 */
export const ButtonStandAlone = React.forwardRef(ButtonStandAloneComponent);
