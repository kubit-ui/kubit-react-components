import { AriaLiveOptionType } from '@/types/ariaLiveOption';

export interface IScreenReaderOnly {
  children?: React.ReactNode;
  id?: string;
  show?: boolean;
  ariaLive?: AriaLiveOptionType;
  dataTestId?: string;
}
