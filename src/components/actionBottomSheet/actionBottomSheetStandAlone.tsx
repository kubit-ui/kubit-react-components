import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { Link } from '../link';
import {
  ActionBottomSheetActionStyled,
  ActionBottomSheetContentStyled,
  ActionBottomSheetControlStyled,
  ActionBottomSheetHeaderContentStyled,
  ActionBottomSheetHeaderStyled,
  ActionBottomSheetIconSyled,
  ActionBottomSheetStyled,
  ActionBottomSheetTitleSyled,
} from './actionBottomSheet.styled';
import { IActionBottomSheetStandAlone } from './types';

const ActionBottomSheetStandAloneComponent = (
  { hasHeader = true, scrollableRef, shadowRef, ...props }: IActionBottomSheetStandAlone,
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

  return (
    <ActionBottomSheetStyled
      ref={actionBottomRef}
      $height={props.height}
      data-testid={`${props.dataTestId}Container`}
      styles={props.styles.container}
    >
      {hasHeader && (
        <>
          <ActionBottomSheetControlStyled ref={shadowRef} styles={props.styles.controlContainer}>
            <ActionBottomSheetActionStyled styles={props.styles.actionLinkContainer}>
              {props.actionLink && <Link {...props.actionLink} />}
            </ActionBottomSheetActionStyled>
            <ActionBottomSheetIconSyled styles={props.styles.closeIconContainer}>
              <ElementOrIcon
                customIconStyles={props.styles.closeIcon}
                dataTestId={`${props.dataTestId}Icon`}
                {...props.closeIcon}
              />
            </ActionBottomSheetIconSyled>
          </ActionBottomSheetControlStyled>
          <ActionBottomSheetHeaderStyled styles={props.styles.header}>
            <ActionBottomSheetTitleSyled styles={props.styles}>
              <Text
                component={TextComponentType.H5}
                customTypography={props.styles.title}
                dataTestId={`${props.dataTestId}Title`}
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
