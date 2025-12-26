/**
 * Validates whether a given string is a valid HTTP or data URL.
 *
 * This function checks if the string is a valid URL with specific protocols
 * (e.g., `http`, `data`). It also considers relative paths (e.g., `/`, `./`, `../`)
 * as valid URLs.
 *
 * @param url - The string to validate as a URL.
 * @returns `true` if the string is a valid URL or a relative path, otherwise `false`.
 */
export const isValidHttpUrl = (url: string): boolean => {
  if (typeof url !== 'string') {
    return false;
  }

  const HTTP_PROTOCOL = 'http';
  const DATA_PROTOCOL = 'data';
  const VALID_PROTOCOLS = [HTTP_PROTOCOL, DATA_PROTOCOL];
  let parsedURL: URL;

  try {
    // Attempt to parse the string as a URL
    parsedURL = new URL(url);
  } catch (e) {
    // If parsing fails, check if it's a relative path
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
      return true;
    }
    return false;
  }

  // Check if the URL's protocol matches one of the valid protocols
  return VALID_PROTOCOLS.some((validProtocol) =>
    parsedURL.protocol.startsWith(validProtocol),
  );
};
