import * as React from 'react';

import { FooterSectionStyled } from '../footer.styled';
import { FooterPositionType, FooterPropsStylesType } from '../types';

interface IFooterSection {
  styles: FooterPropsStylesType;
  forceVertical?: boolean;
  position: string;
  tabInverse?: boolean;
  children: React.ReactNode[];
}

export const FooterSection = (props: IFooterSection): JSX.Element | null => {
  if (!props.children.length) {
    return null;
  }

  const getElementJustify = (position: string) => {
    const styles = {
      [FooterPositionType.LEFT]: props.tabInverse ? 'flex-end' : 'flex-start',
      [FooterPositionType.CENTER]: 'center',
      [FooterPositionType.RIGHT]: props.tabInverse ? 'flex-start' : 'flex-end',
    };
    return styles[position] || 'center';
  };

  return (
    <FooterSectionStyled
      $forceVertical={props.forceVertical}
      $justifyContent={getElementJustify(props.position)}
      $tabInverse={props.tabInverse}
      aria-hidden={!props.children.length}
      styles={props.styles}
    >
      {props.tabInverse ? props.children.reverse() : props.children}
    </FooterSectionStyled>
  );
};
