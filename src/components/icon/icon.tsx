import React from 'react';

import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { pickAriaProps } from '@/utils/aria/aria';

import { ButtonType } from '../button/types/type';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
import { IconButtonStyled } from './icon.styled';
import { IconStandAlone } from './iconStandAlone';
import { IIcon } from './types/icon';

const IconBasicComponent = (
  { dataTestId = 'icon', ...props }: IIcon,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element | null => {
  const device = useMediaDevice();
  const ariaProps = pickAriaProps(props);
  const { disabled, altText, onClick, screenReaderText, ...iconProps } = props;

  const isLinearIcon =
    !!props.color || !!props.customIconStyles?.color || !!props.customIconStyles?.[device]?.color;

  if (!props.icon) {
    return <></>;
  }

  if (props.onClick) {
    return (
      <IconButtonStyled
        {...ariaProps}
        $customIconStyles={props.customIconStyles}
        $height={props.height}
        $width={props.width}
        aria-disabled={disabled}
        aria-label={props['aria-label'] || altText}
        data-testid={dataTestId}
        disabled={disabled}
        id={props.id}
        tabIndex={props.tabIndex}
        title={props.title || ''}
        type={ButtonType.BUTTON}
        onClick={onClick}
      >
        <ScreenReaderOnly>{screenReaderText}</ScreenReaderOnly>
        <IconStandAlone
          {...iconProps}
          ref={ref}
          dataTestId={undefined}
          id={undefined}
          linearIcon={isLinearIcon}
        />
      </IconButtonStyled>
    );
  }

  return (
    <IconStandAlone
      {...iconProps}
      ref={ref}
      altText={altText}
      dataTestId={dataTestId}
      linearIcon={isLinearIcon}
    />
  );
};

export const IconBasic = React.forwardRef(IconBasicComponent);

export { IconBasic as Icon };
