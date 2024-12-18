import React from 'react';

import { Button } from '@/components/button/button';
import { Link } from '@/components/link/link';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { POSITIONS } from '../../types/positions/positions';
import { ROLES } from '../../types/role/role';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { PopoverControlled as Popover } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
// styles
import {
  ButtonWrapper,
  SnackbarDescriptionWrapper,
  SnackbarIconTitleContainerWrapper,
  SnackbarLinkWrapper,
  SnackbarNoStatusContentWrapper,
  SnackbarStyled,
  SnackbarTextAndActionWrapper,
  SnackbarTextWrapper,
  SnackbarTitleWrapper,
} from './snackbar.styled';
import { ISnackbarStandAlone } from './types/snackbar';

const SnackbarStandAloneComponent = (
  { align = POSITIONS.TOP_CENTER_FIXED, dataTestId = 'snackbar', ...props }: ISnackbarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const buildAction = () =>
    props.secondaryActionContent && (
      <SnackbarLinkWrapper styles={props.styles} withIcon={!!props.icon}>
        {(props.styles?.actionButton?.variant || props.secondaryActionButton?.variant) &&
        (props.styles?.actionButton?.size || props.secondaryActionButton?.size) ? (
          <Button
            aria-label={props.secondaryActionAriaLabel}
            size={props.styles?.actionButton?.size}
            variant={props.styles?.actionButton?.variant}
            onClick={props.onSecondaryActionClick}
            {...props.secondaryActionButton}
          >
            {props.secondaryActionContent}
          </Button>
        ) : (
          (props.styles?.link?.variant || props.secondaryActionLink?.variant) && (
            <Link
              aria-label={props.secondaryActionAriaLabel}
              decoration={props.styles?.link?.decoration}
              url={''}
              variant={props.styles?.link?.variant || ''}
              onClick={props.onSecondaryActionClick}
              {...props.secondaryActionLink}
            >
              {props.secondaryActionContent}
            </Link>
          )
        )}
      </SnackbarLinkWrapper>
    );

  const buildDescription = () => {
    const { content, ...restDescriptionProps } = props.description || {};

    return (
      content &&
      (props.styles?.description?.font_variant || props.description?.variant) && (
        <SnackbarDescriptionWrapper styles={props.styles}>
          <Text
            component={TextComponentType.PARAGRAPH}
            customTypography={props.styles?.description}
            {...restDescriptionProps}
          >
            {content}
          </Text>
        </SnackbarDescriptionWrapper>
      )
    );
  };

  return (
    <Popover
      autoWidth
      transparentBackground
      clickOverlayClose={false}
      component={PopoverComponentType.DIV}
      focusLastElementFocusedAfterClose={false}
      focusScreenFirstDescendantAfterClose={false}
      open={props.open}
      pressEscapeClose={false}
      variant={props.styles?.popoverVariants?.[align]}
      {...props.popover}
    >
      <SnackbarStyled
        ref={ref}
        data-testid={dataTestId}
        styles={props.styles}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <SnackbarTextAndActionWrapper>
          <SnackbarTextWrapper
            data-testid={`${dataTestId}-alert`}
            role={ROLES.ALERT}
            styles={props.styles}
          >
            <SnackbarIconTitleContainerWrapper styles={props.styles}>
              {props.icon && (
                <ElementOrIcon customIconStyles={props.styles?.icon} {...props.icon} />
              )}
              <SnackbarTitleWrapper>
                <Text
                  component={TextComponentType.PARAGRAPH}
                  customTypography={props.styles?.title}
                  {...props.title}
                >
                  {/* Put here in order to NVDA read altIcon when opening the snackbar. */}
                  <ScreenReaderOnly>{props.icon?.altText}</ScreenReaderOnly>
                  {props.title.content}
                </Text>
              </SnackbarTitleWrapper>
            </SnackbarIconTitleContainerWrapper>
            <SnackbarNoStatusContentWrapper styles={props.styles} withIcon={!!props.icon}>
              {buildDescription()}
            </SnackbarNoStatusContentWrapper>
          </SnackbarTextWrapper>
          {buildAction()}
        </SnackbarTextAndActionWrapper>
        <ButtonWrapper>
          <ElementOrIcon
            customIconStyles={props.styles?.closeIcon}
            onClick={e => props.onCloseButtonClick(false)(e)}
            {...props.closeIcon}
          />
        </ButtonWrapper>
      </SnackbarStyled>
    </Popover>
  );
};

export const SnackbarStandAlone = React.forwardRef(SnackbarStandAloneComponent);
