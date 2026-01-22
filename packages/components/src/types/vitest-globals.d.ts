/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import 'html-validate/vitest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHTMLValidate(options?: object): R;
    }
  }
}
