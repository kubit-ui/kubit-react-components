import type {
  ComponentsTypesAvailableComponents,
  ComponentsTypesComponents,
} from './componentsTypes';

export type ComponentsTypesComponentsNames = {
  [K in keyof ComponentsTypesComponents]: K;
};

type NonVariablesKeys<T> = {
  [K in keyof T]: K extends `$${string}` ? never : K;
}[keyof T];
type ComponentSelected<T> = Pick<T, NonVariablesKeys<T>>;

export type RecoverComponentStyles = <
  T extends ComponentsTypesAvailableComponents,
>(params: {
  component: T;
  variant?: string;
  additionalClassNames?: Partial<
    ComponentSelected<ComponentsTypesComponents[T]>
  >;
}) => ComponentSelected<ComponentsTypesComponents[T]>;
