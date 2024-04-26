export const buildAriaLabelledBy = ({
  descriptionId,
  screenReaderId,
  errorMessage,
  errorMessageId,
  error,
}: {
  descriptionId?: string;
  screenReaderId?: string;
  errorMessage?: string;
  errorMessageId?: string;
  error?: boolean;
}): string | undefined => {
  let res = '';
  if (descriptionId) {
    res += `${descriptionId} ${screenReaderId}`;
  } else {
    res += `${screenReaderId}`;
  }
  if (errorMessage && error) {
    res += ` ${errorMessageId}`;
  }
  return res;
};
