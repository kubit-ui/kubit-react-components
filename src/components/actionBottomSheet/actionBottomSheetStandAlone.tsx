import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { Link } from '../link/link';
import {
  ActionBottomSheetActionStyled,
  ActionBottomSheetContentStyled,
  ActionBottomSheetControlStyled,
  ActionBottomSheetHeaderContentStyled,
  ActionBottomSheetHeaderStyled,
  ActionBottomSheetIconSyled,
  ActionBottomSheetStyled,
  ActionBottomSheetTitleSyled,
  DraggableIcon,
} from './actionBottomSheet.styled';
import { IActionBottomSheetStandAlone } from './types/actionBottomSheet';

const ActionBottomSheetStandAloneComponent = (
  {
    dataTestId = 'action-bottom-sheet',
    hasHeader = true,
    scrollableRef,
    shadowRef,
    ...props
  }: IActionBottomSheetStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  // Parent container Ref
  const actionBottomRef = React.useRef<HTMLDivElement | null>(null);

  // Expose the ref to the parent component
  React.useImperativeHandle(ref, () => {
    return actionBottomRef.current as HTMLDivElement;
  }, []);

  // Set the parent componente ref for the scrollableRef function
  React.useEffect(() => {
    scrollableRef(actionBottomRef.current);
  }, []);

  const isMobileOrTablet = [DeviceBreakpointsType.MOBILE, DeviceBreakpointsType.TABLET].includes(
    props.device
  );

  return (
    <ActionBottomSheetStyled
      ref={actionBottomRef}
      $height={props.height}
      data-testid={dataTestId}
      styles={props.styles.container}
    >
      {props.dragIcon && isMobileOrTablet && (
        <DraggableIcon ref={props.dragIconRef} data-drag-icon styles={props.styles}>
          <ElementOrIcon customIconStyles={props.styles.dragIcon} {...props.dragIcon} />
        </DraggableIcon>
      )}
      {hasHeader && (
        <>
          <ActionBottomSheetControlStyled ref={shadowRef} styles={props.styles.controlContainer}>
            <ActionBottomSheetActionStyled styles={props.styles.actionLinkContainer}>
              {props.actionLink && <Link {...props.actionLink} />}
            </ActionBottomSheetActionStyled>
            <ActionBottomSheetIconSyled styles={props.styles.closeIconContainer}>
              <ElementOrIcon customIconStyles={props.styles.closeIcon} {...props.closeIcon} />
            </ActionBottomSheetIconSyled>
          </ActionBottomSheetControlStyled>
          <ActionBottomSheetHeaderStyled styles={props.styles.header}>
            <ActionBottomSheetTitleSyled styles={props.styles}>
              <Text
                component={TextComponentType.H5}
                customTypography={props.styles.title}
                {...props.title}
              >
                {props.title?.content}
              </Text>
            </ActionBottomSheetTitleSyled>
            {props.headerContent && (
              <ActionBottomSheetHeaderContentStyled styles={props.styles}>
                {props.headerContent}
              </ActionBottomSheetHeaderContentStyled>
            )}
          </ActionBottomSheetHeaderStyled>
        </>
      )}
      <ActionBottomSheetContentStyled styles={props.styles.content}>
        {props.children}
      </ActionBottomSheetContentStyled>
    </ActionBottomSheetStyled>
  );
};

export const ActionBottomSheetStandAlone = React.forwardRef(ActionBottomSheetStandAloneComponent);
