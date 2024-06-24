import * as React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';

const themeWithAdditionalInfo = ['kubit'];

const themeWithoutIcon = themeWithAdditionalInfo.filter(theme => theme !== 'kubit');

// LabelSecondary
const labelSecondaryStyles = {
  display: 'inline-flex',
  marginLeft: '0.25rem',
  fontSize: '0.875rem',
  fontWeight: '400',
};

export const labelSecondary = (themeSelected: string): React.ReactNode =>
  themeWithAdditionalInfo.includes(themeSelected) && (
    <div style={labelSecondaryStyles}>
      <ReplaceContent width={'fit-content'} />
    </div>
  );

// AdditionalInfo
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

// Icon
export const inputIcon = (themeSelected: string): string | undefined =>
  themeWithoutIcon.includes(themeSelected) ? undefined : ICONS.ICON_PLACEHOLDER;
