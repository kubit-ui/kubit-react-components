import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Footer } from '@/components/footer/footer';
import { PopoverControlled as Popover } from '@/components/popover';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks';

import {
  DrawerContentStyled,
  DrawerFooterStyled,
  DrawerNavigationStyled,
  DrawerStyled,
  DrawerTitleContentFooterContainerStyled,
  DrawerTitleStyled,
} from './drawer.styled';
import { IDrawerStandAlone } from './types';

const DrawerStandAloneComponent = (
  {
    blocked = false,
    shadowRef,
    footerRef,
    contentRef,
    titleComponent = TextComponentType.H3,
    ...props
  }: IDrawerStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueTitleId = useId('drawer-title');
  const titleIdFinal = props.title?.id ?? uniqueTitleId;
  const position = props.styles[props.level]?.containerPosition;

  return (
    <Popover
      aria-label={!props.title?.content ? `${props.popover?.['aria-label']}` : undefined}
      aria-labelledby={props.title?.content ? titleIdFinal : undefined}
      aria-modal={props.open}
      clickOverlayClose={!blocked}
      dataTestId={`${props.dataTestId}Popover`}
      hasBackDrop={true}
      open={props.open}
      trapFocusInsideModal={true}
      variant={position}
      {...props.popover}
    >
      <DrawerStyled
        ref={ref}
        data-testid={`${props.dataTestId}Drawer`}
        position={position}
        styles={props.styles}
      >
        {!blocked && (
          <DrawerNavigationStyled level={props.level} styles={props.styles}>
            <ElementOrIcon
              customIconStyles={props.styles.icon}
              {...props.closeIcon}
              dataTestId={`${props.dataTestId}CloseIcon`}
            />
          </DrawerNavigationStyled>
        )}
        <DrawerTitleContentFooterContainerStyled blocked={blocked} styles={props.styles}>
          <DrawerTitleStyled
            ref={shadowRef}
            as={Text as unknown as React.ElementType}
            component={titleComponent as unknown as TextComponentType}
            customTypography={props.styles.title}
            dataTestId={`${titleIdFinal}Title`}
            id={titleIdFinal}
            {...props.title}
          >
            {props.title?.content}
          </DrawerTitleStyled>
          <DrawerContentStyled ref={contentRef} styles={props.styles}>
            {props.children}
          </DrawerContentStyled>
          {props.footer?.content && props.styles.footer?.variant && (
            <DrawerFooterStyled
              ref={footerRef}
              as={Footer as unknown as React.ElementType}
              customFooterStyles={props.styles}
              variant={props.styles.footer?.variant}
              {...props.footer}
            >
              {props.footer.content}
            </DrawerFooterStyled>
          )}
        </DrawerTitleContentFooterContainerStyled>
      </DrawerStyled>
    </Popover>
  );
};

export const DrawerStandAlone = React.forwardRef(DrawerStandAloneComponent);
