import { AriaLiveOptionType } from '@/types/ariaLiveOption';

export interface IScreenReaderOnly {
  children?: string | JSX.Element;
  id?: string;
  show?: boolean;
  ariaLive?: AriaLiveOptionType;
  dataTestId?: string;
}
