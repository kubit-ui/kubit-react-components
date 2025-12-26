export interface ElementsType {
  container: HTMLElement | null | undefined;
  content: HTMLElement | null | undefined;
}

export interface UseContentVisibilityReturnType {
  handleContentVisibility: ({ container, content }: ElementsType) => void;
}

export interface UseContentVisibilityParamsType {
  minVisibleHeight?: number;
}
