export interface useEscPressedParamsType {
  ref: React.RefObject<HTMLElement | null>;
  onEscPress: (event: KeyboardEvent) => void;
  disablePreventDefault?: boolean;
  disableStopPropagation?: boolean;
}
