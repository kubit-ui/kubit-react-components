import React from 'react';

import { DecorativeElement } from '@/components/decorativeElement/decorativeElementStandAlone';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';

import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { NavigationCardInfo } from './fragments/navigationCardInfo';
import { buildProps } from './helpers/buildProps';
import {
  NavigationCardDecorativeContainer,
  NavigationCardInfoContentStyled,
  NavigationCardLeftContentStyled,
  NavigationCardRightContentStyled,
  NavigationCardStyled,
} from './navigationCard.styled';
import { INavigationCardStandAlone } from './types/navigationCard';

const NavigationCardStandaloneComponent = (
  { dataTestId = 'navigation-card', type = ButtonType.BUTTON, ...props }: INavigationCardStandAlone,
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement> | undefined | null
): JSX.Element => {
  const infoId = useId('infoId');

  const { marginRight, additionalProps } = buildProps(
    props.styles,
    props.decorative,
    props.device,
    dataTestId
  );

  const innerContainersComponent = props.url ? 'div' : 'span';

  return (
    // Can not be spread -> styled component breaks
    <NavigationCardStyled
      ref={ref as any}
      aria-disabled={props['aria-disabled']}
      as={props.url ? props.component : 'button'}
      className={props.className}
      dataTestId={dataTestId}
      draggable={props.draggable}
      role={props.role}
      styles={props.styles}
      target={props.target}
      type={props.url ? undefined : type}
      url={props.url}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <>
        {props.decorative && (
          <NavigationCardDecorativeContainer
            as={innerContainersComponent}
            marginRight={marginRight}
            styles={props.styles}
          >
            <DecorativeElement additionalProps={additionalProps} element={props.decorative} />
          </NavigationCardDecorativeContainer>
        )}
        <NavigationCardInfoContentStyled
          as={innerContainersComponent}
          id={infoId}
          isExpanded={props.styles.containerExpandedContent}
        >
          <NavigationCardLeftContentStyled
            as={innerContainersComponent}
            isExpanded={props.styles.containerExpandedContent}
          >
            <NavigationCardInfo
              description={props.description}
              device={props.device}
              innerContainersComponent={innerContainersComponent}
              styles={props.styles}
              tag={props.tag}
              title={props.title}
            />
          </NavigationCardLeftContentStyled>
          <NavigationCardRightContentStyled
            aria-hidden={true}
            as={innerContainersComponent}
            styles={props.styles}
          >
            {props.styles.containerExpandedContent && (
              <Text
                component={TextComponentType.SPAN}
                customTypography={props.styles.arrowIconText}
                {...props.arrowIconText}
              >
                {props.arrowIconText?.content}
              </Text>
            )}
            <ElementOrIcon customIconStyles={props.styles.arrowIcon} {...props.arrowIcon} />
          </NavigationCardRightContentStyled>
        </NavigationCardInfoContentStyled>
      </>
    </NavigationCardStyled>
  );
};

export const NavigationCardStandalone = React.forwardRef(NavigationCardStandaloneComponent);
