interface ariaLinkReturnValue {
  aria?: Partial<React.AriaAttributes>;
}

export const ariaLink = (
  ariaDisabled?: React.AriaAttributes,
  ariaLabel?: string,
  ariaDescribedby?: string,
): ariaLinkReturnValue => {
  return {
    aria: {
      ...ariaDisabled,
      ['aria-describedby']: ariaDescribedby,
      ['aria-label']: ariaLabel,
    },
  };
};
