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

export const Radius = (): JSX.Element[] | JSX.Element => {
  const theme = localStorage.getItem('themeSelected') || 'kubit';
  const themeObject = themesObject[theme][Foundations.RADIUS];

  if (themeObject === undefined || !themeObject) {
    return (
      <div>
        <h1>Radius</h1>
        <p>There are no borders for the selected theme ({theme})</p>
      </div>
    );
  }

  const content = Object.entries(themeObject).map(([key]) => {
    const value = themeObject[key];
    return (
      <FoundationContainerStyled key={key}>
        <FoundationColorDataStyled>
          <FoundationCircleNameStyled>
            <FoundationCicleStyled
              style={{
                borderRadius: `${value}`,
                border: '1px solid',
              }}
            />
            <FoundationNameStyled>
              <b>Radius name</b>
              <span>{key}</span>
            </FoundationNameStyled>
          </FoundationCircleNameStyled>
          <FoundationHexNameStyled>
            <b>REM</b>
            <span>{value as ReactNode}</span>
          </FoundationHexNameStyled>
        </FoundationColorDataStyled>
      </FoundationContainerStyled>
    );
  });

  return (
    <FoundationStyled>
      <FoundationTitleStyled>Radius</FoundationTitleStyled>
      {content}
    </FoundationStyled>
  );
};
