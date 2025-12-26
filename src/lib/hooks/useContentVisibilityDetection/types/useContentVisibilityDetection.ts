export interface ElementsType {
  container: HTMLElement | null | undefined;
  content: HTMLElement | null | undefined;
}

export interface UseContentVisibilityDetectionReturnType {
  handleContentVisibilityDetection: ({
    container,
    content,
  }: ElementsType) => void;
}

export interface UseContentVisibilityDetectionParamsType {
  onContentVisible?: () => void;
  onContentInvisible?: () => void;
  minVisibleHeight: number;
}
