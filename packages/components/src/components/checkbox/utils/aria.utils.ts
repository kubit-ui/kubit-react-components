interface IBuildAriaDescribedBy {
  ariaDescribedBy?: string;
  error?: boolean;
  errorMessageId?: string;
  screenReader?: boolean;
  screenReaderId: string;
}

/**
 * Build the aria-describedby attribute based on available content
 */
export const buildAriaDescribedBy = ({
  ariaDescribedBy,
  error,
  errorMessageId,
  screenReader,
  screenReaderId,
}: IBuildAriaDescribedBy): string | undefined => {
  const ids = [
    ariaDescribedBy,
    screenReader && screenReaderId,
    error && errorMessageId,
  ].filter(Boolean);

  return ids.length > 0 ? ids.join(' ').trim() : undefined;
};
