import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import {
  ActionBottomSheetContentStyled,
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
  return (
    <ActionBottomSheetStyled
      ref={ref}
      $height={props.height}
      data-testid={`${props.dataTestId}Container`}
      styles={props.styles.container}
    >
      {hasHeader && (
        <ActionBottomSheetHeaderStyled ref={shadowRef} styles={props.styles.header}>
          <ActionBottomSheetIconSyled styles={props.styles.closeIconContainer}>
            <ElementOrIcon
              customIconStyles={props.styles.closeIcon}
              dataTestId={`${props.dataTestId}Icon`}
              {...props.closeIcon}
            />
          </ActionBottomSheetIconSyled>
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
      )}
      <ActionBottomSheetContentStyled ref={scrollableRef} styles={props.styles.content}>
        {props.children}
      </ActionBottomSheetContentStyled>
    </ActionBottomSheetStyled>
  );
};

export const ActionBottomSheetStandAlone = React.forwardRef(ActionBottomSheetStandAloneComponent);
