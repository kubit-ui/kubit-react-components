import * as React from 'react';

import { FooterSectionStyled } from '../footer.styled';
import { FooterPositionType, FooterPropsStylesType } from '../types';

interface IFooterSection {
  styles: FooterPropsStylesType;
  setVertical?: boolean;
  position: string;
  orderConfiguration: {
    flexReverse?: boolean;
    reverse?: boolean;
  };
  /**
   * @deprecated
   */
  alignItems?: string;
  children: React.ReactNode[];
}

export const FooterSection = (props: IFooterSection): JSX.Element | null => {
  if (!props.children.length) {
    return null;
  }

  const getElementJustify = (position: string) => {
    const styles = {
      [FooterPositionType.LEFT]: props.orderConfiguration.reverse ? 'flex-end' : 'flex-start',
      [FooterPositionType.CENTER]: 'center',
      [FooterPositionType.RIGHT]: props.orderConfiguration.reverse ? 'flex-start' : 'flex-end',
    };
    return styles[position] || 'center';
  };

  return (
    <FooterSectionStyled
      $alignItems={props.alignItems}
      $flexReverse={props.orderConfiguration.flexReverse}
      $justifyContent={getElementJustify(props.position)}
      $setVertical={props.setVertical}
      aria-hidden={!props.children.length}
      styles={props.styles}
    >
      {props.orderConfiguration.reverse ? props.children.reverse() : props.children}
    </FooterSectionStyled>
  );
};
