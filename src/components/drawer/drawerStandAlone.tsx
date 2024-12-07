import React from 'react';

import { Footer } from '@/components/footer/footer';
import { useId } from '@/hooks/useId/useId';

import { ROLES } from '../../types/role/role';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { PopoverControlled } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { Text } from '../text/text';
import { TextComponentType } from '../text/types/component';
import {
  DrawerContentStyled,
  DrawerFooterStyled,
  DrawerNavigationStyled,
  DrawerStyled,
  DrawerTitleContentFooterContainerStyled,
  DrawerTitleStyled,
} from './drawer.styled';
import { IDrawerStandAlone } from './types/drawer';

const DrawerStandAloneComponent = (
  {
    blocked = false,
    titleComponent = TextComponentType.H3,
    dataTestId = 'drawer',
    ...props
  }: IDrawerStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueTitleId = useId('drawer-title');
  const titleIdFinal = props.title?.id ?? uniqueTitleId;
  const position = props.styles[props.level]?.containerPosition;

  return (
    <PopoverControlled
      aria-labelledby={props.title?.content ? titleIdFinal : undefined}
      aria-modal={props.open}
      clickOverlayClose={!blocked}
      component={PopoverComponentType.DIV}
      hasBackDrop={true}
      open={props.open}
      role={ROLES.DIALOG}
      trapFocusInsideModal={true}
      variant={position}
      {...props.popover}
    >
      <DrawerStyled ref={ref} data-testid={dataTestId} position={position} styles={props.styles}>
        {!blocked && (
          <DrawerNavigationStyled level={props.level} styles={props.styles}>
            <ElementOrIcon customIconStyles={props.styles.icon} {...props.closeIcon} />
          </DrawerNavigationStyled>
        )}
        <DrawerTitleContentFooterContainerStyled blocked={blocked} styles={props.styles}>
          <DrawerTitleStyled
            data-drawer-title
            as={Text}
            component={titleComponent as unknown as TextComponentType}
            customTypography={props.styles.title}
            id={titleIdFinal}
            {...props.title}
          >
            {props.title?.content}
          </DrawerTitleStyled>
          <DrawerContentStyled
            data-drawer-content
            aria-label={
              props.contentHasScroll ? props.contentScrollArias?.['aria-label'] : undefined
            }
            aria-labelledby={
              props.contentHasScroll ? props.contentScrollArias?.['aria-labelledby'] : undefined
            }
            role={props.contentHasScroll ? ROLES.REGION : undefined}
            styles={props.styles}
            tabIndex={props.contentHasScroll ? 0 : undefined}
          >
            {props.children}
          </DrawerContentStyled>
          {props.footer?.content && (props.styles.footer?.variant || props.footer.variant) && (
            <DrawerFooterStyled
              data-drawer-footer
              as={Footer}
              customFooterStyles={props.styles}
              variant={props.styles.footer?.variant}
              {...props.footer}
            >
              {props.footer.content}
            </DrawerFooterStyled>
          )}
        </DrawerTitleContentFooterContainerStyled>
      </DrawerStyled>
    </PopoverControlled>
  );
};

export const DrawerStandAlone = React.forwardRef(DrawerStandAloneComponent);
