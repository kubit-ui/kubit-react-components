import { InputBasicStateProps, InputState } from '@/components/input/types/inputTheme';

export type InputPasswordStateProps = InputBasicStateProps & {
  inputVariant?: string;
};

export type InputPasswordStylesProps = {
  [state in InputState]?: InputPasswordStateProps;
};

export type InputPasswordStylesType<V extends string | number | symbol> = {
  [variant in V]: InputPasswordStylesProps;
};
