export const windowMatchMedia = (
  matcher: string | string[] = 'onlyDesktop'
): ((query: string) => MediaQueryList) => {
  return (query: string): MediaQueryList => {
    return {
      matches: Array.isArray(matcher) ? matcher.includes(query) : matcher === query,
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
