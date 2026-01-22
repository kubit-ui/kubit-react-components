export interface useEscPressedParamsType {
  ref: React.RefObject<HTMLElement>;
  onEscPress: (event: KeyboardEvent) => void;
  disablePreventDefault?: boolean;
  disableStopPropagation?: boolean;
}
