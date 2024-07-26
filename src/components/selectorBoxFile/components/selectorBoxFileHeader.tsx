import * as React from 'react';

import { Button } from '@/components/button/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import {
  HeaderDescriptionWrapperStyled,
  HeaderSubtitleTooltipWrapperStyled,
  HeaderTitleSubtitleWrapperStyled,
} from '../selectorBoxFile.styled';
import {
  SelectorBoxFileButtonType,
  SelectorBoxFilePropsStylesType,
  SelectorBoxFileTextType,
  SelectorBoxFileTooltipType,
} from '../types';
// internal components
import { SelectorBoxFileTooltip } from './selectorBoxFileTooltip';

interface ISelectorBoxHeader {
  title?: SelectorBoxFileTextType;
  subtitle?: SelectorBoxFileTextType;
  description?: SelectorBoxFileTextType;
  headerId: string;
  button?: SelectorBoxFileButtonType;
  styles: SelectorBoxFilePropsStylesType;
  tooltip?: SelectorBoxFileTooltipType;
  tooltipIcon?: IElementOrIcon;
}

export const SelectorBoxFileHeader = (props: ISelectorBoxHeader): JSX.Element | null => {
  return (
    <>
      <HeaderTitleSubtitleWrapperStyled id={props.headerId} styles={props.styles}>
        {props.title ? (
          <Text
            component={TextComponentType.H5}
            customTypography={props.styles.title}
            {...props.title}
          >
            {props.title.content}
          </Text>
        ) : null}
        {props.subtitle ? (
          <HeaderSubtitleTooltipWrapperStyled>
            <Text customTypography={props.styles.subtitle} {...props.subtitle}>
              {props.subtitle.content}
            </Text>
            <SelectorBoxFileTooltip
              styles={props.styles}
              tooltip={props.tooltip}
              tooltipIcon={props.tooltipIcon}
            />
          </HeaderSubtitleTooltipWrapperStyled>
        ) : null}
      </HeaderTitleSubtitleWrapperStyled>
      {(props.description || props.button) && (
        <HeaderDescriptionWrapperStyled styles={props.styles}>
          <Text customTypography={props.styles.description} {...props.description}>
            {props.description?.content}
          </Text>
          {(props.styles.button?.size || props.button?.size) &&
            (props.styles.button?.variant || props.button?.variant) && (
              <Button
                iconPosition={props.styles.button?.iconPosition}
                size={props.styles.button?.size}
                variant={props.styles.button?.variant}
                {...props.button}
              >
                {props.button?.content}
              </Button>
            )}
        </HeaderDescriptionWrapperStyled>
      )}
    </>
  );
};
