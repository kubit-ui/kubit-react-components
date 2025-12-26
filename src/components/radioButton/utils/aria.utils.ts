export const buildAriaLabelledBy = ({
  descriptionId,
  error,
  errorMessage,
  errorMessageId,
  screenReaderId,
}: {
  descriptionId?: string;
  screenReaderId?: string;
  errorMessage?: string;
  errorMessageId?: string;
  error?: boolean;
}): string | undefined => {
  let res = '';
  if (descriptionId) {
    res += `${descriptionId}`;
  }
  if (screenReaderId) {
    res += ` ${screenReaderId}`;
  }
  if (errorMessage && error) {
    res += ` ${errorMessageId}`;
  }

  // Remove extra spaces, so we return undefined if the string is empty
  const trimmedRes = res.trim();
  return trimmedRes.length > 0 ? trimmedRes : undefined;
};
