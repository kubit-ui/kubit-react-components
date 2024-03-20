import * as React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';

// LabelSecondary
const labelSecondaryStyles = {
  display: 'inline-flex',
  marginLeft: '0.25rem',
  fontSize: '0.875rem',
  fontWeight: '400',
};

const themeWithAdditionalInfo = ['kubit'];

export const labelSecondary = (themeSelected: string): React.ReactNode =>
  themeWithAdditionalInfo.includes(themeSelected) && (
    <div style={labelSecondaryStyles}>
      <ReplaceContent width={'fit-content'} />
    </div>
  );

// AddiotionalInfo
const additionalInfoStyles = {
  marginLeft: '0.25rem',
  fontSize: '0.875rem',
  fontWeight: '400',
};

export const additionalInfoAction = (themeSelected: string): React.ReactNode =>
  themeWithAdditionalInfo.includes(themeSelected) && (
    <div style={additionalInfoStyles}>
      <ReplaceContent width={'fit-content'} />
    </div>
  );
