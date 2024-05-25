const HTTP_PROTOCOL = 'http';
const DATA_PROTOCOL = 'data';

const VALID_PROTOCOLS = [HTTP_PROTOCOL, DATA_PROTOCOL];

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

  return VALID_PROTOCOLS.some(validProtocol => parsedURL.protocol.startsWith(validProtocol));
};
