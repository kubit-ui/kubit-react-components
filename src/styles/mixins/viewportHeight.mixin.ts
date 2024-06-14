export const viewportHeight = (): string => {
  if (!window.CSS.supports) {
    return '100vh';
  }

  if (!window.CSS.supports('height: 100dvh') || !window.CSS.supports('max-height: 100dvh')) {
    const { innerHeight } = window;
    return `${innerHeight}px`;
  }

  return '100dvh';
};
