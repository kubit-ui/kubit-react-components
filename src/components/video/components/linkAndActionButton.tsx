import * as React from 'react';

import { Button } from '@/components/button/button';
import { LinkTargetType } from '@/components/link';
import { Text, TextDecorationType } from '@/components/text';
import { GenericLinkType } from '@/provider/genericComponents';

import { LinkAndActionButtonAlignment, VideoButtonType } from '../types';
import { VideoStyleType } from '../types/videoTheme';
import { BottomContainerStyled, LinkContainerStyled } from '../video.styled';

interface ILinkAndActionButton {
  styles: VideoStyleType;
  linkUrl?: string;
  componentLink?: GenericLinkType;
  linkText?: string;
  linkTarget?: LinkTargetType;
  actionButton?: VideoButtonType;
  linkAndActionButtonAlignment?: LinkAndActionButtonAlignment;
  onLinkClick?: React.MouseEventHandler<HTMLElement>;
}

export const LinkAndActionButton = ({
  linkTarget = LinkTargetType.BLANK,
  ...props
}: ILinkAndActionButton): JSX.Element | null => {
  return props.linkText || props.actionButton ? (
    <BottomContainerStyled
      linkAndActionButtonAlignment={props.linkAndActionButtonAlignment}
      styles={props.styles}
    >
      {(props.styles.actionButton?.size || props.actionButton?.size) &&
        (props.styles.actionButton?.variant || props.actionButton?.variant) && (
          <Button
            size={props.styles.actionButton?.size}
            variant={props.styles.actionButton?.variant}
            {...props.actionButton}
          >
            {props.actionButton?.content}
          </Button>
        )}
      {props.linkUrl && (
        <LinkContainerStyled styles={props.styles}>
          <Text
            component={props.componentLink}
            customTypography={props.styles.link}
            decoration={TextDecorationType.UNDERLINE}
            target={linkTarget}
            url={props.linkUrl}
            onClick={props.onLinkClick}
          >
            {props.linkText}
          </Text>
        </LinkContainerStyled>
      )}
    </BottomContainerStyled>
  ) : null;
};
