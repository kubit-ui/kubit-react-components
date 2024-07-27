import React, { ReactNode } from 'react';

import { themesObject } from '@/designSystem/themesObject';
import { Foundations } from '@/storybook/constants';

import {
  FoundationCicleStyled,
  FoundationCircleNameStyled,
  FoundationColorDataStyled,
  FoundationContainerStyled,
  FoundationHexNameStyled,
  FoundationNameStyled,
  FoundationStyled,
  FoundationTitleStyled,
} from '../common';

export const Colors = (): JSX.Element[] | JSX.Element => {
  const theme = localStorage.getItem('themeSelected') || 'kubit';
  const themeObject = themesObject[theme][Foundations.COLORS];

  if (themeObject === undefined || !themeObject) {
    return (
      <div>
        <h1>Colors</h1>
        <p>There are no colors for the selected theme ({theme})</p>
      </div>
    );
  }

  return Object.entries(themeObject).map(([key]) => {
    return (
      <FoundationStyled key={key}>
        <FoundationTitleStyled>{key}</FoundationTitleStyled>
        <FoundationContainerStyled>
          {Object.entries(themeObject[key]).map(([_key, value]) => {
            return (
              <FoundationColorDataStyled key={_key + value}>
                <FoundationCircleNameStyled>
                  <FoundationCicleStyled
                    style={{
                      backgroundColor: `${value}`,
                    }}
                  />
                  <FoundationNameStyled>
                    <b>color name</b>
                    <span>{_key}</span>
                  </FoundationNameStyled>
                </FoundationCircleNameStyled>
                <FoundationHexNameStyled>
                  <b>Hex</b>
                  <span>{value as ReactNode}</span>
                </FoundationHexNameStyled>
              </FoundationColorDataStyled>
            );
          })}
        </FoundationContainerStyled>
      </FoundationStyled>
    );
  });
};
