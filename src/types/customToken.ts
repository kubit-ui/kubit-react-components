/**
 * CustomTokenTypes
 * @description
 * @template V - Variants
 * @template S - Sizes
 * @template E - Extra
 * @property {V} ctv - for variants
 * @property {S} cts - for sizes
 * @property {E} extraCt - for extra variants or elements styles
 */
export type CustomTokenTypes<V = object, S = object, E = object> = {
  ctv?: V; // for variants
  cts?: S; // for sizes
  extraCt?: E; // for extra variants or elements styles
};
