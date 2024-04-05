import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { useMediaDevice } from '@/hooks/index';
import { pickAriaProps } from '@/utils/aria/aria';

import { ButtonType } from '../button';
import { IconButtonStyled } from './icon.styled';
import { IconStandAlone } from './iconStandAlone';
import { IIcon } from './types';

const IconBasicComponent = (
  { tabIndex = 0, ...props }: IIcon,
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
        data-testid={iconProps.dataTestId}
        disabled={disabled}
        type={ButtonType.BUTTON}
        onClick={onClick}
      >
        <ScreenReaderOnly>{screenReaderText}</ScreenReaderOnly>
        <IconStandAlone {...iconProps} ref={ref} dataTestId={undefined} linearIcon={isLinearIcon} />
      </IconButtonStyled>
    );
  }

  return <IconStandAlone {...iconProps} ref={ref} altText={altText} linearIcon={isLinearIcon} />;
};

export const IconBasic = React.forwardRef(IconBasicComponent);
