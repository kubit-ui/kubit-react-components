/**
 * @description - Typescript validator to assert if a value is `string` type.
 *
 * @example
 *
 * let foo: number | string = 0
 *
 * if(Math.random() < 0.5){
 *  foo = 'bar'
 * }
 *
 * if(isStringTypeOf(foo)) {
 *  // We asserted the value is actually an string!
 *  console.log("foo length is: " + foo.length) // foo length is 3
 * }
 */
export const isStringTypeOf = (value: unknown): value is string => {
  return typeof value === 'string';
};
