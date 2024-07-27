import * as React from 'react';

import { Avatar } from '@/components/avatar/avatar';
import { ElementOrIllustration } from '@/components/elementOrIllustration/elementOrIllustration';
import { IconHighlighted } from '@/components/iconHighlighted/iconHighlighted';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { Image } from '../image/image';
import { DecorativeType, IDecorativeElementStandAlone } from './types';

/**
 * @description
 * DecorativeElementStandAlone component is a wrapper component that can be used to wrap other components.
 *
 * @param {IDecorativeElementStandAlone} props
 * @returns {JSX.Element | null}
 * @constructor
 * @example
 * <DecorativeElementStandAlone
 * element={{
 *  [DecorativeType.ICON]: {
 *   variant: 'icon',
 *  iconName: 'iconName',
 * },
 * additionalProps={{
 * variant: 'icon',
 * iconName: 'iconName',
 * }}
 * />
 *
 */
const DecorativeElementStandAlone = ({
  element,
  additionalProps = {},
  dataTestId,
}: IDecorativeElementStandAlone): JSX.Element | null => {
  const elementKey = Object.keys(element)[0];
  const elementProps = element[elementKey];
  const elementDataTestId = dataTestId?.concat('', elementKey);

  const elementsAvailable = {
    [DecorativeType.ICON]: ElementOrIcon,
    [DecorativeType.ICON_HIGHLIGHTED]: IconHighlighted,
    [DecorativeType.ILLUSTRATION]: ElementOrIllustration,
    [DecorativeType.IMAGE]: Image,
    [DecorativeType.AVATAR]: Avatar,
  };

  const Element = elementsAvailable[elementKey];

  return <Element dataTestId={elementDataTestId} {...elementProps} {...additionalProps} />;
};

export const DecorativeElement = (props: IDecorativeElementStandAlone): JSX.Element => (
  <ErrorBoundary fallBackComponent={<></>}>
    <DecorativeElementStandAlone {...props} />
  </ErrorBoundary>
);
