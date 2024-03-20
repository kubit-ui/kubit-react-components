export const windowMatchMedia = (matcher = 'onlyDesktop'): ((query: string) => MediaQueryList) => {
  return (query: string): MediaQueryList => {
    return {
      matches: query === matcher,
      addListener: () => null,
      removeListener: () => null,
      media: '',
      onchange: null,
      addEventListener: (_type: string, cb: EventListenerOrEventListenerObject) =>
        (cb as () => void)(),
      removeEventListener: () => null,
      dispatchEvent: () => true,
    };
  };
};
