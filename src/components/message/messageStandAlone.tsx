import { type ForwardedRef, forwardRef } from 'react';

import { Button } from '@/components/button/button';
import { Tag } from '@/components/tag/tag';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { classNames } from '@/lib/utils/classNames/classNames';
import { isString } from '@/lib/utils/is/isString';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { MessageStandAloneProps } from './types/message';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { Link } from '../link/link';

export const MessageStandAlone = forwardRef<
  HTMLDivElement,
  MessageStandAloneProps
>(
  (
    {
      actionButton,
      ariaLive = 'off',
      ariaMessageId,
      closeIcon,
      content,
      cssClasses,
      extraActionButton,
      id,
      infoIcon,
      inlineLink,
      linkComponent,
      links,
      maxContentLength = 246,
      messageContainerProps,
      open,
      role,
      tag,
      title,
      titleAndContentContainerProps,
      titleAndContentRole,
      ...props
    }: MessageStandAloneProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element | null => {
    const dataTestId = props['data-testid'] || 'message';
    const customProps = pickCustomAttributes(props);

    const processedContent = processText(content);
    const processedTitle = processText(title);

    const isLargeMessage =
      typeof processedContent.children === 'string' &&
      processedContent.children?.toString().length >= maxContentLength;

    const buildIconOrIllustration = () => {
      if (infoIcon?.icon) {
        return <ElementOrIcon className={cssClasses?.infoicon} {...infoIcon} />;
      }
      return null;
    };

    const buildActionButton = () =>
      actionButton?.content ? (
        <div className={cssClasses?.actionbuttoncontainer}>
          <Button
            additionalSizeClasses={
              actionButton?.variant ? undefined : cssClasses?.action_button
            }
            {...actionButton}
          >
            {actionButton?.content}
          </Button>
        </div>
      ) : null;

    const buildTag = () =>
      tag?.content ? (
        <Tag
          variant=""
          {...tag}
          label={{
            content: tag?.content,
          }}
        />
      ) : null;

    const buildExtraActionButton = () =>
      extraActionButton?.content ? (
        <div className={cssClasses?.extraactionbuttoncontainer}>
          <Button {...extraActionButton}>{extraActionButton?.content}</Button>
        </div>
      ) : null;

    const buildContent = () => {
      return typeof content === 'string' ? (
        <Text
          additionalClasses={{
            text: cssClasses?.description,
          }}
          component="p"
          {...processedContent}
        />
      ) : (
        processedContent.children
      );
    };

    const buildTitle = () => {
      return isString(processedTitle.children) ? (
        <div
          aria-errormessage={ariaMessageId}
          className={cssClasses?.titlecontainer}
        >
          <Text
            additionalClasses={{
              text: cssClasses?.title,
            }}
            component="p"
            {...processedTitle}
          />
        </div>
      ) : (
        processedTitle.children
      );
    };

    return (
      <div
        {...customProps}
        aria-live={ariaLive}
        className={cssClasses?.message}
      >
        {open && (
          <CustomComponent
            ref={ref}
            className={cssClasses?.container}
            component={messageContainerProps?.url ? linkComponent : 'div'}
            data-testid={dataTestId}
            id={id}
            role={role}
            target={messageContainerProps?.target}
            url={messageContainerProps?.url || undefined}
            onClick={messageContainerProps?.onClick}
          >
            {buildIconOrIllustration()}
            <CustomComponent
              className={classNames(cssClasses?.headercontainer, {
                [`${cssClasses?.headercontainerlargemessage}`]: isLargeMessage,
              })}
              component={
                titleAndContentContainerProps?.url ? linkComponent : 'div'
              }
              role={titleAndContentRole}
              target={titleAndContentContainerProps?.target}
              url={titleAndContentContainerProps?.url || undefined}
              onClick={titleAndContentContainerProps?.onClick}
            >
              {!!title && buildTitle()}
              {!!tag?.content && buildTag()}
              <div
                className={classNames(cssClasses?.contentcontainer, {
                  [`${cssClasses?.contentcontainerlargemessage}`]:
                    isLargeMessage,
                })}
              >
                {buildContent()}
                {!!inlineLink?.content && (
                  <Link
                    decoration="underline"
                    {...inlineLink}
                    url={inlineLink?.url || ''}
                  >
                    {inlineLink?.content || ''}
                  </Link>
                )}
              </div>
              {!!(extraActionButton || actionButton) && (
                <div className={cssClasses?.buttonsectioncontainer}>
                  {buildExtraActionButton()}
                  {buildActionButton()}
                </div>
              )}
              {!!(links && links.length > 0) && (
                <div className={cssClasses?.linkscontainer}>
                  {links?.map((link) =>
                    link.content ? (
                      <div
                        key={link.content}
                        className={cssClasses?.linkcontainer}
                      >
                        <Link decoration="underline" {...link}>
                          {link.content}
                        </Link>
                      </div>
                    ) : null,
                  )}
                </div>
              )}
            </CustomComponent>
            <ElementOrIcon className={cssClasses?.closeicon} {...closeIcon} />
          </CustomComponent>
        )}
      </div>
    );
  },
);
