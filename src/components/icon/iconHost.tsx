import * as React from 'react';

import { useTheme } from 'styled-components';

import { ErrorBoundary } from '@/provider/errorBoundary';
import { useUtilsProvider } from '@/provider/index';
import { UtilsContext } from '@/provider/utils/context';
import { isValidHttpUrl } from '@/utils/index';

import { IconBasic } from './icon';
import { IIcon } from './types';

type IconWithProviderProps = IIcon & {
  ref: React.ForwardedRef<HTMLSpanElement>;
};

const IconWithProvider = (props: IconWithProviderProps): JSX.Element | null => {
  const { ICONS_STYLES } = useTheme();
  const { assets } = useUtilsProvider();

  const isUrl = isValidHttpUrl(props.icon);
  let hostIcon;

  let urlIcon = '';

  if (ICONS_STYLES?.[props.icon]) {
    hostIcon = assets?.baseHost;
  }
  if (isUrl) {
    urlIcon = props.icon;
  } else if (props.icon && hostIcon) {
    urlIcon = `${hostIcon}${[ICONS_STYLES?.[props.icon]]}`;
  }

  return <IconBasic {...props} ref={props.ref} icon={urlIcon} />;
};

const IconHostComponent = (
  { ...props }: IIcon,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element | null => {
  const myContext = React.useContext(UtilsContext);

  if (!myContext?.assets) {
    return <IconBasic {...props} ref={ref} />;
  }

  return (
    <ErrorBoundary fallBackComponent={<></>} resetCondition={props.icon}>
      <IconWithProvider {...props} ref={ref} />
    </ErrorBoundary>
  );
};

export const IconHost = React.forwardRef(IconHostComponent);
