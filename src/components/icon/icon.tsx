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

  const isLinearIcon =
    !!props.color || !!props.customIconStyles?.color || !!props.customIconStyles?.[device]?.color;

  const iconWithTitle = (
    <IconStandAlone {...props} ref={ref} altText="" icon={props.icon} linearIcon={isLinearIcon} />
  );

  const buildButton = (): JSX.Element => {
    const ariaProps = pickAriaProps(props);
    let iconElement = <></>;
    if (props.icon) {
      if (props.onClick) {
        iconElement = (
          <IconButtonStyled
            {...ariaProps}
            $customIconStyles={props.customIconStyles}
            $height={props.height}
            $width={props.width}
            aria-disabled={props.disabled}
            aria-label={props['aria-label'] || props.altText}
            disabled={props.disabled}
            tabIndex={tabIndex}
            type={ButtonType.BUTTON}
            onClick={props.onClick}
          >
            <ScreenReaderOnly>{props.screenReaderText}</ScreenReaderOnly>
            {iconWithTitle}
          </IconButtonStyled>
        );
      } else {
        iconElement = (
          <IconStandAlone {...props} ref={ref} icon={props.icon} linearIcon={isLinearIcon} />
        );
      }
      return iconElement;
    }
    return iconElement;
  };

  return buildButton();
};

export const IconBasic = React.forwardRef(IconBasicComponent);
