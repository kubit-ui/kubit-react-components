export type ComponentsTypesAvailableComponents = 'CONTAINER' | 'TAG'

type NonVariablesKeys<T> = {
  [K in keyof T]: K extends `$${string}` ? never : K;
}[keyof T];
export type ComponentSelected<T> = Pick<T, NonVariablesKeys<T>>;
    
export type ComponentsTypesComponents = {
  CONTAINER: {
    container: string,
    $_alternative: {
      container: string,
    },
    $_default: {
      container: string,
    },
    $_secondary: {
      container: string,
    },
  },
  TAG: {
    $_deprecated: {
      tag: string,
      container: string,
      icon: string,
      label: string,
    },
    container: string,
    icon: string,
    label: string,
    $_dormant: {
      tag: string,
      container: string,
      icon: string,
      label: string,
    },
    $_healthy: {
      tag: string,
      container: string,
      icon: string,
      label: string,
    },
    $_informative: {
      tag: string,
      container: string,
      icon: string,
      label: string,
    },
    $_issue: {
      tag: string,
      container: string,
      icon: string,
      label: string,
    },
  },
}