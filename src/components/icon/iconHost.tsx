import React from 'react';

import { useTheme } from 'styled-components';

import { UtilsContext } from '@/provider/utils/context';
import { useUtilsProvider } from '@/provider/utils/provider';
import { isValidHttpUrl } from '@/utils/isValidUrl/isValidUrl';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { IconBasic } from './icon';
import { IIcon } from './types/icon';

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

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release.
 *
 * IconHost is a component that serves as a host for icons.
 * @param {React.PropsWithChildren<IIconHost>} props
 * @returns {JSX.Element}
 */
export const IconHost = React.forwardRef(IconHostComponent);
