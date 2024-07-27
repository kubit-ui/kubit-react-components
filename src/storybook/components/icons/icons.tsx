import React from 'react';

import { Icon } from '@/components/icon';
import { themesObject } from '@/designSystem/themesObject';
import { UtilsProviderDocStorybook } from '@/storybook/provider/utilsProvider/utilsProvider';

import { FoundationStyled } from '../common';
import { IconNameStyled, IconsDataStyled, IconsInputStyled, IconsStyled } from './icons.styled';

export const Icons = (): JSX.Element => {
  const [searchValue, setSearchValue] = React.useState('');

  const theme = localStorage.getItem('themeSelected') || 'kubit';
  const themeObject = themesObject[theme]['ICONS'];

  if (themeObject === undefined || !themeObject) {
    return (
      <div>
        <h1>Icons</h1>
        <p>There are no icons for the selected theme ({theme})</p>
      </div>
    );
  }

  const icons = Object.entries(themeObject).map(([key, value]) => {
    return (
      key.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && (
        <IconsDataStyled key={value as string}>
          <Icon height="40px" icon={themeObject[key]} width="40px" />
          <IconNameStyled>{key}</IconNameStyled>
        </IconsDataStyled>
      )
    );
  });

  return (
    <UtilsProviderDocStorybook theme={theme}>
      <FoundationStyled>
        <IconsInputStyled
          placeholder="Search Icon"
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <IconsStyled>{icons}</IconsStyled>
      </FoundationStyled>
    </UtilsProviderDocStorybook>
  );
};
