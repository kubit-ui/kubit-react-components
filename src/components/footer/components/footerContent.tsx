import * as React from 'react';

import { FooterContentStyled } from '../footer.styled';
import { ContentDirectionType, FooterPropsStylesType } from '../types';

interface IFooterContent {
  styles: FooterPropsStylesType;
  contentDirection?: ContentDirectionType;
  forceVertical?: boolean;
  children: React.ReactNode[];
}

export const FooterContent = (props: IFooterContent): JSX.Element | null => {
  // always returned something, cause we need to put container to flex direction
  const flexDirectionDesktopTablet = props.forceVertical ? 'column' : 'row';

  if (!props.children.length) {
    return null;
  }

  const order = (props.children[0] as JSX.Element)?.props['data-order'] || 0;

  return (
    <FooterContentStyled
      $order={order}
      aria-hidden={!props.children.length}
      contentDirection={props.contentDirection}
      flexDirectionDesktopTablet={flexDirectionDesktopTablet}
      styles={props.styles}
    >
      {props.children}
    </FooterContentStyled>
  );
};
