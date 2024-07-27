import * as React from 'react';

import { Button } from '@/components/button/button';
import { IconPositionType } from '@/components/button/types/buttonIconPosition';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { ElementOrIllustration } from '@/components/elementOrIllustration/elementOrIllustration';
import { Link } from '@/components/link/link';
import { Text } from '@/components/text';
import { TextComponentType, TextDecorationType } from '@/components/text/types';

// styles
import {
  ActionSectionStyled,
  ButtonWrapperStyled,
  EmptyStateDescriptionWrapperStyled,
  EmptyStateStyled,
  EmptyStateTitleWrapperStyled,
  TextSectionStyled,
} from './emptyState.styled';
import { IEmptyStateStandAlone } from './types';

const EmptyStateStandAloneComponent = <V extends string | unknown>(
  props: IEmptyStateStandAlone<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const isHorizontalOrientation = props.variant === 'HORIZONTAL';

  const buildIconOrIllustration = () => {
    if (props.illustration) {
      return (
        <ElementOrIllustration
          customIllustrationStyles={props.styles?.illustration}
          {...props.illustration}
        />
      );
    } else if (props.icon?.icon) {
      return <ElementOrIcon customIconStyles={props.styles?.icon} {...props.icon} />;
    }
    return null;
  };

  return (
    <EmptyStateStyled
      ref={ref}
      data-testid={`${props.dataTestId}EmptyState`}
      isHorizontalOrientation={isHorizontalOrientation}
      styles={props.styles}
    >
      {buildIconOrIllustration()}
      <TextSectionStyled styles={props.styles}>
        {props.title?.content && (
          <EmptyStateTitleWrapperStyled styles={props.styles}>
            <Text
              component={TextComponentType.STRONG}
              customTypography={props.styles?.title}
              dataTestId={`${props.dataTestId}Title`}
              {...props.title}
            >
              {props.title.content}
            </Text>
          </EmptyStateTitleWrapperStyled>
        )}
        <EmptyStateDescriptionWrapperStyled styles={props.styles}>
          {typeof props.subtitle.content === 'string' ? (
            <Text
              component={TextComponentType.PARAGRAPH}
              customTypography={props.styles?.subtitle}
              dataTestId={`${props.dataTestId}Description`}
              {...props.subtitle}
            >
              {props.subtitle.content}
            </Text>
          ) : (
            props.subtitle.content
          )}
        </EmptyStateDescriptionWrapperStyled>
      </TextSectionStyled>
      <ActionSectionStyled styles={props.styles}>
        {props.button?.content && (
          <ButtonWrapperStyled styles={props.styles}>
            <Button
              dataTestId={`${props.dataTestId}Button`}
              iconPosition={IconPositionType.LEFT}
              size={props.styles?.buttonSize}
              {...props.button}
            >
              {props.button.content}
            </Button>
          </ButtonWrapperStyled>
        )}
        {props.link?.content && (
          <div>
            <Link
              dataTestId={`${props.dataTestId}Link`}
              decoration={TextDecorationType.UNDERLINE}
              {...props.link}
            >
              {props.link.content}
            </Link>
          </div>
        )}
      </ActionSectionStyled>
    </EmptyStateStyled>
  );
};

const EmptyStateStandAlone = React.forwardRef(EmptyStateStandAloneComponent) as <
  V extends string | unknown,
>(
  props: IEmptyStateStandAlone<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { EmptyStateStandAlone };
