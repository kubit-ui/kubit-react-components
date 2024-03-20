/* eslint-disable complexity */
import { POSITIONS } from '@/types/positions';

export const getAlignStyles = (align: POSITIONS, extraGap = '20px'): string => {
  const onlyNumber = parseFloat(extraGap.replace(/[^0-9-]/g, ''));
  const positions = {
    [POSITIONS.BOTTOM_LEFT]: `padding-top: ${extraGap}; top: 100%; right: 100%;`,
    [POSITIONS.BOTTOM_LEFT_FIT_CONTENT]: `padding-top: ${extraGap}; top: 100%; left: 0%;`,
    [POSITIONS.BOTTOM_RIGHT]: `padding-top: ${extraGap}; top: 100%; left: 100%;`,
    [POSITIONS.BOTTOM_GAP_RIGHT]:
      onlyNumber >= 0
        ? `transform: initial; padding-right: ${onlyNumber}px; top: 100%; right: 0; left: auto`
        : `transform: initial; right: ${extraGap}px; top: 100%; left: auto`,
    [POSITIONS.BOTTOM_CENTER]: `padding-top: ${extraGap}; top: 100%; left: 50%; transform: translate(-50%, 0%);`,
    [POSITIONS.BOTTOM]: `padding-top: ${extraGap}; top: 100%; left: 50%; transform: translate(-50%, 0%);`,
    [POSITIONS.TOP_LEFT]: 'bottom: 100%; right: 100%; top: auto; transform: none;',
    [POSITIONS.TOP_RIGHT]: 'bottom: 100%;',
    [POSITIONS.TOP_CENTER]: `padding-bottom: ${extraGap}; bottom: calc(100%); left: 50%; transform: translate(-50%, 0%)`,
    [POSITIONS.TOP]: `padding-bottom: ${extraGap}; bottom: calc(100%); left: 50%; transform: translate(-50%, 0%)`,
    [POSITIONS.LEFT]: `padding-right: ${extraGap}; right: 100%; top: 50%; transform: translate(0%, -50%);`,
    [POSITIONS.RIGHT]: `padding-left: ${extraGap}; left: 100%; top: 50%; transform: translate(0%, -50%);`,
    [POSITIONS.CENTER]: 'top: 50%; left: 50%; transform: translate(-50%, -50%);',
    [POSITIONS.BOTTOM_FIXED]:
      'bottom: 0; left: 0; transform: translate(0,0); top: auto; padding: 0;',
    [POSITIONS.BOTTOM_CENTER_FIXED]:
      'bottom: 0; left: 50%; transform: translate(-50%,0); top: auto; padding: 0;',
    [POSITIONS.TOP_CENTER_FIXED]:
      'bottom: auto; left: 50%; transform: translate(-50%,0); top: 0; padding: 0;',
    [POSITIONS.LEFT_FIXED]: 'top: 0; left: 0; height: 100vh; transform: translate(0,0);',
    [POSITIONS.LEFT_BOTTOM_FIXED]: 'bottom: 0; left: 0; height: 100vh; transform: translate(0,0);',
    [POSITIONS.RIGHT_FIXED]:
      'top: 0; right: 0; height: 100vh; transform: translate(0,0); left: auto',
  };

  return positions[align] || positions[POSITIONS.TOP_CENTER];
};
