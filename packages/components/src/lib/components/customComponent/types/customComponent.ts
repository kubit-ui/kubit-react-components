export type CustomComponentProps<C extends React.ElementType> = {
  component?: C;
  className?: string;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithRef<C>,
  'as' | 'ref' | 'className' | 'children'
>;
