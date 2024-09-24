import * as React from 'react';

import { Button } from '@/components/button/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { ElementOrIllustration } from '@/components/elementOrIllustration/elementOrIllustration';
import { Tag } from '@/components/tag/tag';
import { Text, TextComponentType, TextDecorationType } from '@/components/text';
import { AriaLiveOptionType } from '@/types';

import { Link } from '../link';
// styles
import {
  ActioButtonWrapperStyled,
  ButtonSectionStyled,
  CloseButtonSectionStyled,
  ExtraActioButtonWrapperStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  MessageContentStyled,
  MessageHeaderStyled,
  MessageStyled,
  MessageTextStyled,
  ParentContainerStyled,
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
    <Tag option={''} status={''} variant={''} {...props.tag}>
      {props.tag?.content}
    </Tag>
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

  const buildTitle = () => {
    return typeof props.title?.content === 'string' ? (
      <MessageTextStyled
        aria-errormessage={props.ariaMessageId}
        extraPaddingGap={!!props.closeIcon}
        styles={props.styles.closeIcon}
      >
        <Text
          component={TextComponentType.PARAGRAPH}
          customTypography={props.styles.title}
          dataTestId={`${props.dataTestId}Title`}
          {...props.title}
        >
          {props.title.content}
        </Text>
      </MessageTextStyled>
    ) : (
      props.title?.content
    );
  };

  return (
    <ParentContainerStyled aria-live={ariaLive} styles={props.styles}>
      {props.open && (
        <MessageStyled
          ref={ref}
          as={props.messageContainerProps?.url ? props.linkComponent : 'div'}
          data-testid={`${props.dataTestId}Message`}
          id={props.id}
          role={props.role}
          styles={props.styles}
          target={props.messageContainerProps?.target}
          url={(props.messageContainerProps?.url || undefined) as string}
          onClick={props.messageContainerProps?.onClick}
        >
          {buildIconOrIllustration()}
          {props.closeIcon?.onClick && (
            <CloseButtonSectionStyled styles={props.styles}>
              <ElementOrIcon customIconStyles={props.styles.closeIcon} {...props.closeIcon} />
            </CloseButtonSectionStyled>
          )}
          <MessageHeaderStyled
            as={props.titleAndContentContainerProps?.url ? props.linkComponent : 'div'}
            isLargeMessage={isLargeMessage}
            role={props.titleAndContentRole}
            styles={props.styles}
            target={props.titleAndContentContainerProps?.target}
            url={(props.titleAndContentContainerProps?.url || undefined) as string}
            withIcon={!!props.closeIcon}
            onClick={props.titleAndContentContainerProps?.onClick}
          >
            {props.title && buildTitle()}
            {props.tag?.content && buildTag()}
            <MessageContentStyled isLargeMessage={isLargeMessage} styles={props.styles}>
              {buildContent()}
              {props.inlineLink?.content && (
                <Link
                  dataTestId={`${props.dataTestId}Link`}
                  decoration={TextDecorationType.UNDERLINE}
                  {...props.inlineLink}
                >
                  {props.inlineLink.content}
                </Link>
              )}
            </MessageContentStyled>
            {(props.extraActionButton || props.actionButton) && (
              <ButtonSectionStyled styles={props.styles}>
                {buildExtraActionButton()}
                {buildActionButton()}
              </ButtonSectionStyled>
            )}

            {props.link?.content && (
              <LinkContainerStyled styles={props.styles}>
                <Link
                  dataTestId={`${props.dataTestId}Link`}
                  decoration={TextDecorationType.UNDERLINE}
                  {...props.link}
                >
                  {props.link.content}
                </Link>
              </LinkContainerStyled>
            )}
            {props.links && props.links.length > 0 && (
              <LinksContainerStyled styles={props.styles}>
                {props.links.map((link, index) =>
                  link.content ? (
                    <LinkContainerStyled key={index} styles={props.styles}>
                      <Link
                        dataTestId={`${props.dataTestId}Link${index}`}
                        decoration={TextDecorationType.UNDERLINE}
                        {...link}
                      >
                        {link.content}
                      </Link>
                    </LinkContainerStyled>
                  ) : null
                )}
              </LinksContainerStyled>
            )}
          </MessageHeaderStyled>
        </MessageStyled>
      )}
    </ParentContainerStyled>
  );
};

export const MessageStandAlone = React.forwardRef(MessageStandAloneComponent);
