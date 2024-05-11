import { isValidHttpUrl } from '../isValidUrl';

describe('isValidUrl utils', () => {
  it('URL is not valid', () => {
    const url = 'www.kubit.com';

    expect(isValidHttpUrl(url)).toBeFalsy();
  });

  it('URL is  valid', () => {
    const url = 'https://www.kubit.com';

    expect(isValidHttpUrl(url)).toBeTruthy();
  });

  it('Relative URL is valid', () => {
    const url = './url/valid';

    expect(isValidHttpUrl(url)).toBeTruthy();
  });
});
