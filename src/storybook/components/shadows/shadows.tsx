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

export const Shadows = (): JSX.Element[] | JSX.Element => {
  const theme = localStorage.getItem('themeSelected') || 'kubit';
  const themeObject = themesObject[theme][Foundations.SHADOW];

  if (themeObject === undefined || !themeObject) {
    return (
      <div>
        <h1>Shadows</h1>
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
                boxShadow: `${value}`,
              }}
            />
            <FoundationNameStyled>
              <b>shadow name</b>
              <span>{key}</span>
            </FoundationNameStyled>
          </FoundationCircleNameStyled>
          <FoundationHexNameStyled>
            <b>Shadow</b>
            <span>{value as ReactNode}</span>
          </FoundationHexNameStyled>
        </FoundationColorDataStyled>
      </FoundationContainerStyled>
    );
  });

  return (
    <FoundationStyled>
      <FoundationTitleStyled>Shadows</FoundationTitleStyled>
      {content}
    </FoundationStyled>
  );
};
