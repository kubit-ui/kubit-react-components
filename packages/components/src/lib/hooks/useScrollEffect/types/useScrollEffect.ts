export interface CustomHookReturnValue {
  scrollableRef: (node: HTMLElement | null) => void;
  resizeRef: (node: HTMLElement | null) => void;
  shadowRef: (node: HTMLElement | null) => void;
}

export interface CustomHookProps {
  shadowStyles?: string;
  conditional?: boolean;
  shadowVisible?: number;
  scrollCallback?: (e: Event) => void;
}
