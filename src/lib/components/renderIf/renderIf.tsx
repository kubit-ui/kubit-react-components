import type { FC, ReactNode } from 'react';

interface RenderIfProps {
  /** Condition to determine whether to render the children */
  condition?: boolean;
  /** Children to be conditionally rendered */
  children: ReactNode;
}

/**
 * RenderIf component conditionally renders its children based on the provided condition.
 *
 * @param {RenderIfProps} props - The props for the component.
 * @returns {ReactElement | null} The rendered children if the condition is true, otherwise null.
 */
export const RenderIf: FC<RenderIfProps> = ({ children, condition }) => {
  return condition ? children : null;
};
