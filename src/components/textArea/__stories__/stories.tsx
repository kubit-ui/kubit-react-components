import type { ReactNode } from 'react';

import { Icon } from '@/components/icon/icon';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

const themeWithAdditionalInfo = [
  'kubit',
  'flameLightAlt',
  'modelBankLightAlt',
  'horizonLightAlt',
  'novaLightAlt',
  'flameLightRegular',
  'modelBankLightRegular',
  'horizonLightRegular',
  'novaLightRegular',
];

const additionalInfoStyles = {
  fontSize: '0.875rem',
  fontWeight: '400',
  marginLeft: '0.25rem',
};

export const additionalInfoAction = (themeSelected: string): ReactNode =>
  themeWithAdditionalInfo.includes(themeSelected) ? (
    <div style={additionalInfoStyles}>
      <Icon height="1rem" icon={ICONS.PLACEHOLDER} width="1rem" />
    </div>
  ) : null;
