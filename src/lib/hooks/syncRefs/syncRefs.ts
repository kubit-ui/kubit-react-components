type SyncInnerAndForwardedRef = <T extends HTMLElement>(params: {
  innerRef: React.MutableRefObject<T | null>;
  forwardedRef: React.ForwardedRef<T | null> | undefined | null;
}) => void;

export const syncInnerAndForwardedRef: SyncInnerAndForwardedRef = ({ forwardedRef, innerRef }) => {
  if (forwardedRef) {
    if (typeof forwardedRef === 'function') {
      forwardedRef(innerRef.current);
    } else {
      forwardedRef.current = innerRef.current;
    }
  }
};
