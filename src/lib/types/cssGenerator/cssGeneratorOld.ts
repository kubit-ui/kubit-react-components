type FlattenAndGenerate<
  StyleObject,
  ComponentName extends string = string,
> = StyleObject extends { $foreign?: infer F }
  ? {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [K in keyof F as K extends string ? Lowercase<K> : never]: any;
    } & {
      [K in keyof Omit<StyleObject, '$foreign'> as K extends string
        ? Lowercase<K>
        : never]: string;
    } & {
      [K in Lowercase<ComponentName>]?: string;
    }
  : {
      [K in keyof StyleObject as K extends string
        ? Lowercase<K>
        : never]: string;
    } & {
      [K in Lowercase<ComponentName>]?: string;
    };

// Ajuste para excluir propiedades no deseadas
export type CssGenerator<StyleObject, ComponentName extends string = string> = {
  [K in keyof FlattenAndGenerate<
    StyleObject,
    ComponentName
  > as K extends keyof string ? never : K]: FlattenAndGenerate<
    StyleObject,
    ComponentName
  >[K];
};
