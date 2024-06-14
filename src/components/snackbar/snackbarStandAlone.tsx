import * as React from 'react';

import { Button } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Link } from '@/components/link';
import { PopoverControlled as Popover } from '@/components/popover';
import { PopoverComponentType } from '@/components/popover/types';
import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text, TextComponentType } from '@/components/text';
import { POSITIONS, ROLES } from '@/types';

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
import { ISnackbarStandAlone } from './types';

const SnackbarStandAloneComponent = (
  { align = POSITIONS.TOP_CENTER_FIXED, ...props }: ISnackbarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const dataTestIdSecondaryAction = `${props.dataTestId}SecondaryAction`;

  const buildAction = () =>
    props.secondaryActionContent && (
      <SnackbarLinkWrapper styles={props.styles} withIcon={!!props.icon}>
        {(props.styles?.actionButton?.variant || props.secondaryActionButton?.variant) &&
        (props.styles?.actionButton?.size || props.secondaryActionButton?.size) ? (
          <Button
            aria-label={props.secondaryActionAriaLabel}
            dataTestId={dataTestIdSecondaryAction}
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
              dataTestId={dataTestIdSecondaryAction}
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

  const buildDescription = () =>
    props.description?.content &&
    (props.styles?.description?.font_variant || props.description.variant) && (
      <SnackbarDescriptionWrapper styles={props.styles}>
        <Text
          component={TextComponentType.PARAGRAPH}
          customTypography={props.styles?.description}
          dataTestId={`${props.dataTestId}Description`}
          {...props.description}
        >
          {props.description?.content}
        </Text>
      </SnackbarDescriptionWrapper>
    );

  return (
    <Popover
      autoWidth
      transparentBackground
      clickOverlayClose={false}
      component={PopoverComponentType.DIV}
      dataTestId={`${props.dataTestId}Popover`}
      focusLastElementFocusedAfterClose={false}
      focusScreenFirstDescendantAfterClose={false}
      open={props.open}
      pressEscapeClose={false}
      variant={props.styles?.popoverVariants?.[align]}
    >
      <SnackbarStyled
        ref={ref}
        styles={props.styles}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <SnackbarTextAndActionWrapper>
          <SnackbarTextWrapper
            data-testid={`${props.dataTestId}Alert`}
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
                  dataTestId={`${props.dataTestId}Title`}
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
            dataTestId={`${props.dataTestId}Icon`}
            onClick={e => props.onCloseButtonClick(false)(e)}
            {...props.closeIcon}
          />
        </ButtonWrapper>
      </SnackbarStyled>
    </Popover>
  );
};

export const SnackbarStandAlone = React.forwardRef(SnackbarStandAloneComponent);
