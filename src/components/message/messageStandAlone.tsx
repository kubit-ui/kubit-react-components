import * as React from 'react';

import { Button } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { ElementOrIllustration } from '@/components/elementOrIllustration';
import { Tag } from '@/components/tag';
import { Text, TextComponentType } from '@/components/text';
import { AriaLiveOptionType } from '@/types';

// styles
import {
  ActioButtonWrapperStyled,
  ButtonSectionStyled,
  CloseButtonSectionStyled,
  ExtraActioButtonWrapperStyled,
  MessageContentStyled,
  MessageHeaderStyled,
  MessageHeaderTitleStyled,
  MessageStyled,
  MessageTextStyled,
} from './message.styled';
import { IMessageStandAlone } from './types';

const MessageStandAloneComponent = (
  { maxContentLength = 246, ariaLive = AriaLiveOptionType.OFF, ...props }: IMessageStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element | null => {
  const isLargeMessage = (() =>
    typeof props.content.content === 'string' &&
    props.content.content.length >= maxContentLength)();

  const buildIconOrIllustration = () => {
    if (props.illustration?.illustration) {
      return (
        <ElementOrIllustration
          customIllustrationStyles={props.styles.illustration}
          {...props.illustration}
        />
      );
    } else if (props.infoIcon?.icon) {
      return <ElementOrIcon customIconStyles={props.styles.infoIcon} {...props.infoIcon} />;
    }
    return null;
  };

  const buildActionButton = () =>
    props.actionButton?.content &&
    (props.styles.actionButton?.size || props.actionButton?.size) && (
      <ActioButtonWrapperStyled styles={props.styles}>
        <Button
          dataTestId={`${props.dataTestId}ActionButton`}
          size={props.styles.actionButton?.size}
          {...props.actionButton}
        >
          {props.actionButton?.content}
        </Button>
      </ActioButtonWrapperStyled>
    );

  const buildTag = () => (
    <div>
      <Tag option={''} status={''} variant={''} {...props.tag}>
        {props.tag?.content}
      </Tag>
    </div>
  );

  const buildExtraActionButton = () =>
    props.extraActionButton?.content && (
      <ExtraActioButtonWrapperStyled styles={props.styles}>
        <Button {...props.extraActionButton}>{props.extraActionButton?.content}</Button>
      </ExtraActioButtonWrapperStyled>
    );

  const buildContent = () => {
    return typeof props.content.content === 'string' ? (
      <Text
        component={TextComponentType.PARAGRAPH}
        customTypography={props.styles.description}
        dataTestId={`${props.dataTestId}Description`}
        {...props.content}
      >
        {props.content.content}
      </Text>
    ) : (
      props.content.content
    );
  };

  return props.open ? (
    <MessageStyled
      ref={ref}
      aria-live={ariaLive}
      data-testid={`${props.dataTestId}Message`}
      id={props.id}
      role={props.role}
      styles={props.styles}
    >
      <MessageHeaderStyled>
        <MessageHeaderTitleStyled
          isLargeMessage={isLargeMessage}
          styles={props.styles}
          withIcon={!!props.closeIcon}
        >
          {buildIconOrIllustration()}
          <div>
            {props.title && (
              <MessageTextStyled
                aria-errormessage={props.ariaMessageId}
                extraPaddingGap={!!props.closeIcon}
                styles={props.styles.closeIcon}
              >
                <Text
                  component={TextComponentType.H2}
                  customTypography={props.styles.title}
                  dataTestId={`${props.dataTestId}Title`}
                  {...props.title}
                >
                  {props.title.content}
                </Text>
              </MessageTextStyled>
            )}
            {props.tag?.content && buildTag()}
            <MessageContentStyled isLargeMessage={isLargeMessage} styles={props.styles}>
              {buildContent()}
            </MessageContentStyled>
          </div>
        </MessageHeaderTitleStyled>
      </MessageHeaderStyled>
      <ButtonSectionStyled>
        {buildExtraActionButton()}
        {buildActionButton()}
        {props.closeIcon?.onClick && (
          <CloseButtonSectionStyled styles={props.styles}>
            <ElementOrIcon customIconStyles={props.styles.closeIcon} {...props.closeIcon} />
          </CloseButtonSectionStyled>
        )}
      </ButtonSectionStyled>
    </MessageStyled>
  ) : null;
};

export const MessageStandAlone = React.forwardRef(MessageStandAloneComponent);
