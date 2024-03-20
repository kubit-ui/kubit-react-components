// mixins
import { addBreakpointStyles } from '../breakpointStyles';

const EMPTY_STRING = '';
const MOCK_MEDIA_QUERY = '@media (min-width: 20rem)';

test('should map all values in style object to css template', () => {
  const result = addBreakpointStyles(MOCK_MEDIA_QUERY, {
    padding: '1rem',
    margin: 0,
  });
  let parsedResult: string[] = [];
  if (Array.isArray(result)) {
    parsedResult = [...result] as string[];
  }

  expect(parsedResult.find((item: string) => item.includes(MOCK_MEDIA_QUERY))).toBeTruthy();
  expect(parsedResult.find((item: string) => item.includes('padding: 1rem'))).toBeTruthy();
  expect(parsedResult.find((item: string) => item.includes('margin: 0'))).toBeTruthy();
});

test('should return empty string when mediaQuery is not valid', () => {
  const result = addBreakpointStyles(EMPTY_STRING, {});

  expect(result).toEqual(EMPTY_STRING);
});

test('should return empty string when stylesObj is not valid', () => {
  const result = addBreakpointStyles(MOCK_MEDIA_QUERY, {});

  expect(result).toEqual(EMPTY_STRING);
});
