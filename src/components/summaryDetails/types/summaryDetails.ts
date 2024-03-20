import { IElementOrIcon } from '@/components/elementOrIcon';
import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { SummaryDetailsPropsStylesType } from './summaryDetailsTheme';

export type SummaryDetailsTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

export interface ISummaryDetailsStandAlone {
  styles: SummaryDetailsPropsStylesType;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  title: SummaryDetailsTextType;
  description?: SummaryDetailsTextType;
  leftIcon?: IElementOrIcon;
  leftOpenIcon?: IElementOrIcon;
  icon?: IElementOrIcon;
  openIcon?: IElementOrIcon;
  open: boolean;
  onClick: React.MouseEventHandler<HTMLDetailsElement>;
  onBodyClick: React.MouseEventHandler<HTMLDivElement>;
  dataTestId?: string;
  rotateOpenIcon?: string;
  hasLineSeparator?: boolean;
}

export interface ISummaryDetailsControlled<V = undefined extends string ? unknown : string>
  extends Omit<ISummaryDetailsStandAlone, 'styles' | 'lineSeparatorLineStyles' | 'onBodyClick'>,
    Omit<
      CustomTokenTypes<SummaryDetailsPropsStylesType, undefined, LineSeparatorLinePropsStylesType>,
      'cts'
    > {
  variant: V;
}

export interface ISummaryDetailsUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<ISummaryDetailsControlled<V>, 'open' | 'onClick'> {
  open?: boolean;
  onOpenClose?: (open: boolean, event: React.MouseEvent<HTMLDetailsElement>) => void;
}
