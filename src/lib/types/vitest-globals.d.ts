/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import 'html-validate/vitest';
import 'vitest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHTMLValidate(options?: object): R;
    }
  }
}
