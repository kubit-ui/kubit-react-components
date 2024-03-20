import * as React from 'react';

import { DecorativeElement } from '@/components/decorativeElement';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text';
import { useId } from '@/hooks';

import { NavigationCardInfo } from './fragments';
import { buildProps } from './helpers';
import {
  NavigationCardDecorativeContainer,
  NavigationCardInfoContentStyled,
  NavigationCardLeftContentStyled,
  NavigationCardRightContentStyled,
  NavigationCardStyled,
} from './navigationCard.styled';
import { INavigationCardStandAlone } from './types';

const NavigationCardStandaloneComponent = (
  props: INavigationCardStandAlone,
  ref: React.ForwardedRef<HTMLAnchorElement> | undefined | null
): JSX.Element => {
  const infoId = useId('infoId');

  const { marginRight, additionalProps } = buildProps(
    props.styles,
    props.decorative,
    props.device,
    props.dataTestId
  );

  return (
    // Can not be spread -> styled component breaks
    <NavigationCardStyled
      ref={ref}
      aria-disabled={props['aria-disabled']}
      as={props.component}
      className={props.className}
      dataTestId={props.dataTestId}
      draggable={props.draggable}
      role={props.role}
      styles={props.styles}
      target={props.target}
      url={props.url}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <>
        {props.decorative && (
          <NavigationCardDecorativeContainer marginRight={marginRight} styles={props.styles}>
            <DecorativeElement additionalProps={additionalProps} element={props.decorative} />
          </NavigationCardDecorativeContainer>
        )}
        <NavigationCardInfoContentStyled
          id={infoId}
          isExpanded={props.styles.containerExpandedContent}
        >
          <NavigationCardLeftContentStyled isExpanded={props.styles.containerExpandedContent}>
            <NavigationCardInfo
              dataTestId={props.dataTestId}
              description={props.description}
              device={props.device}
              styles={props.styles}
              tag={props.tag}
              title={props.title}
            />
          </NavigationCardLeftContentStyled>
          <NavigationCardRightContentStyled aria-hidden={true} styles={props.styles}>
            {props.styles.containerExpandedContent && (
              <Text customTypography={props.styles.arrowIconText} {...props.arrowIconText}>
                {props.arrowIconText?.content}
              </Text>
            )}
            <ElementOrIcon
              customIconStyles={props.styles.arrowIcon}
              dataTestId={`${props.dataTestId}ArrowIcon`}
              {...props.arrowIcon}
            />
          </NavigationCardRightContentStyled>
        </NavigationCardInfoContentStyled>
      </>
    </NavigationCardStyled>
  );
};

export const NavigationCardStandalone = React.forwardRef(NavigationCardStandaloneComponent);
