import 'html-validate/jest';
import { toHaveNoViolations } from 'jest-axe';
import fetchMock from 'jest-fetch-mock';

expect.extend(toHaveNoViolations);

beforeAll(() => {
  fetchMock.enableMocks();
});
