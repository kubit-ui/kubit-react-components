import * as React from 'react';

import { useTheme } from 'styled-components';

import { useUtilsProvider } from '@/provider';
import { ErrorBoundary } from '@/provider/errorBoundary';
import { UtilsContext } from '@/provider/utils/context';
import { isValidHttpUrl } from '@/utils';

import { IllustrationBasic } from './illustration';
import { IIllustration } from './types';

type IllustrationWithProviderProps = IIllustration & {
  ref: React.ForwardedRef<HTMLImageElement> | undefined | null;
};

const IllustrationWithProvider = ({
  ...props
}: IllustrationWithProviderProps): JSX.Element | null => {
  const { ILLUSTRATIONS_STYLES } = useTheme();
  const { assets } = useUtilsProvider();
  const isUrl = isValidHttpUrl(props.illustration);
  let hostIllustration;

  let urlIllustration = '';

  if (ILLUSTRATIONS_STYLES?.[props.illustration]) {
    hostIllustration = assets?.illutrationsBaseHost;
  }

  if (isUrl) {
    urlIllustration = props.illustration;
  } else if (props.illustration && hostIllustration) {
    urlIllustration = `${hostIllustration}${[ILLUSTRATIONS_STYLES?.[props.illustration]]}`;
  }

  return (
    <ErrorBoundary fallBackComponent={<></>} resetCondition={urlIllustration}>
      <IllustrationBasic {...props} ref={props.ref} illustration={urlIllustration} />
    </ErrorBoundary>
  );
};

const IllustrationHostComponent = (
  { ...props }: IIllustration,
  ref: React.ForwardedRef<HTMLImageElement> | undefined | null
): JSX.Element | null => {
  const myContext = React.useContext(UtilsContext);
  if (!myContext?.assets) {
    return <IllustrationBasic {...props} ref={ref} />;
  }
  return (
    <ErrorBoundary fallBackComponent={<></>} resetCondition={props.illustration}>
      <IllustrationWithProvider {...props} ref={ref} />{' '}
    </ErrorBoundary>
  );
};

export const IllustrationHost = React.forwardRef(IllustrationHostComponent);
