import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';

export interface IScreenReaderOnly {
  children?: React.ReactNode;
  id?: string;
  show?: boolean;
  ariaLive?: AriaLiveOptionType;
  as?: string | React.ElementType;
  dataTestId?: string;
}
