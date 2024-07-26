import * as React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useUtilsProvider } from '@/provider';

// styles
import { ElementStyled, HeaderRowStyled, HeaderStyled } from './header.styled';
import { IHeader } from './types/header';

export const Header = ({
  formatWeekDayOption = 'narrow',
  isSundayFirst = false,
  ...props
}: IHeader): JSX.Element => {
  const { dateHelpers } = useUtilsProvider();

  const buildDays = () => {
    return dateHelpers.getAllWeekdayName(formatWeekDayOption, isSundayFirst).map((day, index) => {
      return (
        <ElementStyled key={day + index} scope="col" styles={props.styles}>
          <Text component={TextComponentType.SPAN} customTypography={props.styles?.weekDay}>
            {day}
          </Text>
        </ElementStyled>
      );
    });
  };
  return (
    <HeaderStyled styles={props.styles}>
      <HeaderRowStyled styles={props.styles}>{buildDays()}</HeaderRowStyled>
    </HeaderStyled>
  );
};
