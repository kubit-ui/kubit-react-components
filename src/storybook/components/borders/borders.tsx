import React, { ReactNode } from 'react';

import { themesObject } from '@/designSystem/themesObject/themesObject';

import { Foundations } from '../../constants/foundations';
import {
  FoundationCicleStyled,
  FoundationCircleNameStyled,
  FoundationColorDataStyled,
  FoundationContainerStyled,
  FoundationHexNameStyled,
  FoundationNameStyled,
  FoundationStyled,
  FoundationTitleStyled,
} from '../common/structure.styled';

export const Borders = (): JSX.Element[] | JSX.Element => {
  const theme = localStorage.getItem('themeSelected') || 'kubit';
  const themeObject = themesObject[theme][Foundations.BORDERS];

  if (themeObject === undefined || !themeObject) {
    return (
      <div>
        <h1>Borders</h1>
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
                border: `${value} solid`,
              }}
            />
            <FoundationNameStyled>
              <b>border name</b>
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
      <FoundationTitleStyled>Borders</FoundationTitleStyled>
      {content}
    </FoundationStyled>
  );
};
