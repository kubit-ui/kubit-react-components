import * as React from 'react';

import { Link } from '@/components/link/link';
import { LinkPositionType } from '@/components/link/types/position';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { ROLES } from '@/types/role';

import {
  CardImageContentStyled,
  CardImageImageStyled,
  CardImageLinkStyled,
  CardImageStyled,
  CardImageSubTitleStyled,
  CardImageTesxtContainerStyled,
  CardImageTitleStyled,
} from './cardImage.styled';
import { ICardImageStandAlone } from './types';

const CardImageStandAloneComponent = (
  { ...props }: ICardImageStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <CardImageStyled
      ref={ref}
      as={props.as}
      styles={props.styles}
      tabIndex={0}
      onClick={props.onClick}
    >
      <CardImageImageStyled
        // avoid aria-label empty string
        aria-label={props.imageAltText ? props.imageAltText : undefined}
        image={props.image[props.device]}
        role={props.imageAltText ? ROLES.IMG : undefined}
        styles={props.styles}
      />
      <CardImageContentStyled styles={props.styles}>
        <CardImageTesxtContainerStyled styles={props.styles}>
          <CardImageTitleStyled
            as={Text as unknown as React.ElementType}
            component={TextComponentType.H3}
            customTypography={props.styles.title}
            {...props.title}
          >
            {props.title.content}
          </CardImageTitleStyled>
          <CardImageSubTitleStyled
            as={Text as unknown as React.ElementType}
            customTypography={props.styles.description}
            {...props.description}
          >
            {props.description?.content}
          </CardImageSubTitleStyled>
        </CardImageTesxtContainerStyled>
        {props.link && (
          <CardImageLinkStyled styles={props.styles}>
            <Link iconPosition={LinkPositionType.RIGHT} {...props.link}>
              {props.link.content}
            </Link>
          </CardImageLinkStyled>
        )}
      </CardImageContentStyled>
    </CardImageStyled>
  );
};

export const CardImageStandAlone = React.forwardRef(CardImageStandAloneComponent);
