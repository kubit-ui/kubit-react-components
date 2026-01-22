type SyncInnerAndForwardedRef = <T extends HTMLElement>(params: {
  innerRef: React.MutableRefObject<T | null>;
  forwardedRef: React.ForwardedRef<T | null> | undefined | null;
}) => void;

/**
 * Utility function to synchronize an internal ref with a forwarded ref.
 * This is useful when a component needs both an internal ref for its own logic
 * and needs to expose that ref via React.forwardRef.
 *
 * @param params - Configuration object
 * @param params.innerRef - The internal ref object
 * @param params.forwardedRef - The forwarded ref from React.forwardRef
 *
 * @example
 * ```tsx
 * const MyComponent = forwardRef<HTMLDivElement>((props, ref) => {
 *   const innerRef = useRef<HTMLDivElement>(null);
 *
 *   useEffect(() => {
 *     syncInnerAndForwardedRef({ innerRef, forwardedRef: ref });
 *   }, [ref]);
 *
 *   return <div ref={innerRef}>Content</div>;
 * });
 * ```
 */
export const syncInnerAndForwardedRef: SyncInnerAndForwardedRef = ({
  forwardedRef,
  innerRef,
}) => {
  if (forwardedRef) {
    if (typeof forwardedRef === 'function') {
      forwardedRef(innerRef.current);
    } else {
      forwardedRef.current = innerRef.current;
    }
  }
};
