import { LinkTargetType } from '../types';

type targetType = 'SELF' | 'BLANK' | 'PARENT' | 'TOP';

export const linkTargetValue = (target: targetType | undefined): LinkTargetType | undefined => {
  const targetValue = target ? LinkTargetType[target] : undefined;
  return targetValue;
};
