import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

export enum ValidationStatusState {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ValidationStatusCommonProps = {
  container?: CommonStyleType;
  row?: CommonStyleType;
};

export type ValidationStatusStateProps = {
  icon?: IconTypes;
  explainText?: TypographyTypes;
};
export type ValidationStatusStateKey = {
  [state in ValidationStatusState]?: ValidationStatusStateProps;
};

export type ValidationStatusStylesProps = ValidationStatusCommonProps & ValidationStatusStateKey;

export type ValidationStatusStylesType<V extends string | number | symbol> = {
  [variant in V]: ValidationStatusStylesProps;
};
