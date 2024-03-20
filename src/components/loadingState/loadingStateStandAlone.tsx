import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text, TextComponentType } from '@/components/text';
import { ThirdPartyAnimation } from '@/components/thirdPartyAnimation';

import {
  DescriptionWrapperStyled,
  LoadingStateStyled,
  TitleWrapperStyled,
} from './loadingState.styled';
import { ILoadingStateStandAlone, LoadingStateStateStylesType } from './types';

const LoadingStateStandAloneComponent = (
  {
    description,
    hideText = false,
    styles,
    title,
    screenReaderText,
    state,
    dataTestId,
    ...props
  }: React.PropsWithChildren<ILoadingStateStandAlone>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const stateStyles: LoadingStateStateStylesType | undefined = styles.states?.[state];
  const hasTitle = title && !hideText;

  return (
    <LoadingStateStyled ref={ref}>
      {stateStyles?.thirdPartyAnimation?.height &&
        stateStyles?.thirdPartyAnimation?.variant &&
        stateStyles?.thirdPartyAnimation?.width && (
          <ThirdPartyAnimation
            aria-label={props['aria-label']}
            dataTestId={`${dataTestId}Animation`}
            height={stateStyles.thirdPartyAnimation.height}
            variant={stateStyles.thirdPartyAnimation.variant}
            width={stateStyles.thirdPartyAnimation.width}
          />
        )}
      {hasTitle && (
        <TitleWrapperStyled styles={styles}>
          <Text customTypography={styles.title} dataTestId={`${dataTestId}Title`} {...title}>
            {title.content}
          </Text>
        </TitleWrapperStyled>
      )}
      {description && !hideText && (
        <DescriptionWrapperStyled styles={styles}>
          <Text
            component={TextComponentType.PARAGRAPH}
            customTypography={styles.description}
            dataTestId={`${dataTestId}Description`}
            {...description}
          >
            {description.content}
          </Text>
        </DescriptionWrapperStyled>
      )}
      <ScreenReaderOnly dataTestId={`${dataTestId}ScreenReader`} show={!hasTitle}>
        {screenReaderText}
      </ScreenReaderOnly>
    </LoadingStateStyled>
  );
};

export const LoadingStateStandAlone = React.forwardRef(LoadingStateStandAloneComponent);
