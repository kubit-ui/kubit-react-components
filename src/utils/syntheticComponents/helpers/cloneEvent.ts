export const cloneEvent = (e: Event): Event | undefined => {
  if (e === undefined || e === null) return undefined;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function SyntheticEvent() {}
  const clone = new SyntheticEvent();
  for (const p in e) {
    const d = Object.getOwnPropertyDescriptor(e, p);
    if (d && (d.get || d.set)) {
      Object.defineProperty(clone, p, d);
    } else {
      clone[p] = e[p];
    }
  }
  Object.setPrototypeOf(clone, e);
  return clone;
};
