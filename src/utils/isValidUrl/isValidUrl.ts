const HTTP_PROTOCOL = 'http';

export const isValidHttpUrl = (string: string): boolean => {
  let parsedURL;

  try {
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    parsedURL = new URL(string);
  } catch (e) {
    if (string.startsWith('/') || string.startsWith('./') || string.startsWith('../')) {
      return true;
    }
    return false;
  }

  return parsedURL.protocol.startsWith(HTTP_PROTOCOL);
};
