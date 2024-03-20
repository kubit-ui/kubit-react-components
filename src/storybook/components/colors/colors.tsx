import React, { ReactNode } from 'react';

import { themesObject } from '@/designSystem/themesObject';

import {
  ColorsCicleStyled,
  ColorsCircleNameStyled,
  ColorsColorDataStyled,
  ColorsContainerStyled,
  ColorsHexNameStyled,
  ColorsNameStyled,
  ColorsStyled,
  ColorsTitleStyled,
} from './colors.styled';

export const Colors = (): JSX.Element[] | JSX.Element => {
  const theme = localStorage.getItem('themeSelected') || 'kubit';
  const themeObject = themesObject[theme]['COLORS'];

  if (themeObject === undefined || !themeObject) {
    return (
      <div>
        <h1>Illustrations</h1>
        <p>There are no illustrations for the selected theme ({theme})</p>
      </div>
    );
  }

  return Object.entries(themeObject).map(([key]) => {
    return (
      <ColorsStyled key={key}>
        <ColorsTitleStyled>{key}</ColorsTitleStyled>
        <ColorsContainerStyled>
          {Object.entries(themeObject[key]).map(([_key, value]) => {
            return (
              <ColorsColorDataStyled key={_key + value}>
                <ColorsCircleNameStyled>
                  <ColorsCicleStyled
                    style={{
                      backgroundColor: `${value}`,
                    }}
                  />
                  <ColorsNameStyled>
                    <span>color name</span>
                    <span>{_key}</span>
                  </ColorsNameStyled>
                </ColorsCircleNameStyled>
                <ColorsHexNameStyled>
                  <span>Hex</span>
                  <span>{value as ReactNode}</span>
                </ColorsHexNameStyled>
              </ColorsColorDataStyled>
            );
          })}
        </ColorsContainerStyled>
      </ColorsStyled>
    );
  });
};
