import { CrumbType } from '../types';

export const crumbMaxCharName = (
  crumb: CrumbType,
  charLimit: number,
  overflow: boolean,
  lastCrumb: boolean
): CrumbType => {
  let modify = true;
  if (lastCrumb) {
    if (overflow) {
      modify = true;
    } else {
      modify = false;
    }
  }
  if (crumb.name.length > charLimit && modify) {
    const copyCrumb = { ...crumb };
    const crumbName = copyCrumb.name.split('').splice(0, charLimit).join('').concat('...');
    copyCrumb.name = crumbName;
    return copyCrumb;
  }
  return crumb;
};
