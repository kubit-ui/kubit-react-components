export const windowMatchMedia = (
  matcher: string | string[] = 'onlyDesktop',
): ((query: string) => MediaQueryList) => {
  return (query: string): MediaQueryList => {
    return {
      addEventListener: (
        _type: string,
        cb: EventListenerOrEventListenerObject,
      ) => (cb as () => void)(),
      addListener: () => null,
      dispatchEvent: () => true,
      matches: Array.isArray(matcher)
        ? matcher.includes(query)
        : matcher === query,
      media: '',
      onchange: null,
      removeEventListener: () => null,
      removeListener: () => null,
    };
  };
};
