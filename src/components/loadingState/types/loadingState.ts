import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IText } from '../../text/types/text';
import { LoadingStateGlobalStateStylesType, LoadingStateState } from './loadingStateTheme';

export type LoadingStateTitleAndDescriptionType = Omit<IText<string>, 'children'> & {
  content: string;
};

export interface ILoadingStateStandAlone {
  ['aria-label']: string;
  styles: LoadingStateGlobalStateStylesType;
  title?: LoadingStateTitleAndDescriptionType;
  description?: LoadingStateTitleAndDescriptionType;
  hideText?: boolean;
  screenReaderText?: string;
  state: LoadingStateState;
  dataTestId?: string;
}

export interface ILoadingState<V = undefined extends string ? unknown : string>
  extends Omit<ILoadingStateStandAlone, 'styles'>,
    Omit<CustomTokenTypes<LoadingStateGlobalStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
