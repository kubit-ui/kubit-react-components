/**
 * Validates whether a given string is a valid HTTP or data URL.
 *
 * This function checks if the string is a valid URL with specific protocols
 * (e.g., `http`, `https`, `data`). It also considers relative paths (e.g., `/`, `./`, `../`)
 * as valid URLs.
 *
 * @param url - The string to validate as a URL.
 * @returns `true` if the string is a valid URL or a relative path, otherwise `false`.
 */
export const isValidHttpUrl = (url: string): boolean => {
  if (typeof url !== 'string') {
    return false;
  }

  // Check if it's a relative path
  if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
    return true;
  }

  try {
    const parsedURL = new URL(url);
    return (
      parsedURL.protocol === 'http:' ||
      parsedURL.protocol === 'https:' ||
      parsedURL.protocol === 'data:'
    );
  } catch {
    return false;
  }
};
