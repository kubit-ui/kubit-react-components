import { transformDate } from '../transformDate';

describe('Testing transformDate', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));
  });

  it('YYYY - Match 4 numbers', () => {
    const input = '2022';
    const date = transformDate(input, 'YYYY');
    expect(date.getFullYear()).toBe(2022);
  });

  it('YY - Match 2 numbers', () => {
    const input = '10';
    const date = transformDate(input, 'YY');
    const input2 = '90';
    const date2 = transformDate(input2, 'YY');
    expect(date.getFullYear()).toBe(2010);
    expect(date2.getFullYear()).toBe(1990);
  });

  it('Y - Match infinitve', () => {
    const input = '10000';
    const date = transformDate(input, 'Y');
    expect(date.getFullYear()).toBe(10000);
  });

  it('MM - match 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 'MM');
    const input2 = '023';
    const date2 = transformDate(input2, 'MM');
    expect(date.getMonth()).toBe(1);
    expect(date2.getMonth()).toBe(1);
  });

  it('M allow 1 or 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 'M');
    const input2 = '2';
    const date2 = transformDate(input2, 'M');
    expect(date.getMonth()).toBe(1);
    expect(date2.getMonth()).toBe(1);
  });

  it('DD - match 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 'DD');
    const input2 = '023';
    const date2 = transformDate(input2, 'DD');
    expect(date.getDate()).toBe(2);
    expect(date2.getDate()).toBe(2);
  });

  it('D - allow 1 or 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 'D');
    const input2 = '2';
    const date2 = transformDate(input2, 'D');
    expect(date.getDate()).toBe(2);
    expect(date2.getDate()).toBe(2);
  });

  it('H, HH, h, hh - allow 1 or 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 'H');
    const input2 = '2';
    const date2 = transformDate(input2, 'HH');
    const input3 = '02';
    const date3 = transformDate(input3, 'h');
    const input4 = '2';
    const date4 = transformDate(input4, 'hh');

    expect(date.getHours()).toBe(2);
    expect(date2.getHours()).toBe(2);
    expect(date3.getHours()).toBe(2);
    expect(date4.getHours()).toBe(2);
  });

  it('m, mm - allow 1 or 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 'm');
    const input2 = '2';
    const date2 = transformDate(input2, 'mm');
    expect(date.getMinutes()).toBe(2);
    expect(date2.getMinutes()).toBe(2);
  });

  it('s, ss - allow 1 or 2 numbers', () => {
    const input = '02';
    const date = transformDate(input, 's');
    const input2 = '2';
    const date2 = transformDate(input2, 'ss');
    expect(date.getSeconds()).toBe(2);
    expect(date2.getSeconds()).toBe(2);
  });

  it('YYYY-MM-DD hh:mm:ss', () => {
    const input = '2018-05-02 01:02:03';
    const date = transformDate(input, 'YYYY-MM-DD hh:mm:ss');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(4);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getHours()).toBe(1);
    expect(date.getMinutes()).toBe(2);
    expect(date.getSeconds()).toBe(3);
  });

  it('YYYY/MM/DD hh:mm:ss', () => {
    const input = '2018/05/02 01:02:03';
    const date = transformDate(input, 'YYYY/MM/DD hh:mm:ss');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(4);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getHours()).toBe(1);
    expect(date.getMinutes()).toBe(2);
    expect(date.getSeconds()).toBe(3);
  });

  it('YYYY.MM.DD hh:mm:ss', () => {
    const input = '2018.05.02 01:02:03';
    const date = transformDate(input, 'YYYY.MM.DD hh:mm:ss');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(4);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getHours()).toBe(1);
    expect(date.getMinutes()).toBe(2);
    expect(date.getSeconds()).toBe(3);
  });

  it('YYYY-MM-DD HH:mm:ss', () => {
    const input = '2018.05.02 01:02:03';
    const date = transformDate(input, 'YYYY.MM.DD hh:mm:ss');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(4);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getHours()).toBe(1);
    expect(date.getMinutes()).toBe(2);
    expect(date.getSeconds()).toBe(3);
  });

  it('DD/MM/YYYY', () => {
    const input = '02/10/2022';
    const date = transformDate(input, 'DD/MM/YYYY');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(9);
    expect(date.getFullYear()).toBe(2022);
  });

  it('MM/DD/YYYY', () => {
    const input = '10/02/2022';
    const date = transformDate(input, 'MM/DD/YYYY');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(9);
    expect(date.getFullYear()).toBe(2022);
  });

  it('YYYY/MM/DD', () => {
    const input = '2022/10/02';
    const date = transformDate(input, 'YYYY/MM/DD');
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(9);
    expect(date.getFullYear()).toBe(2022);
  });

  it('String date with format correct and without format string', () => {
    const input = '2022/10/02';
    const date = transformDate(input);
    expect(date.getDate()).toBe(2);
    expect(date.getMonth()).toBe(9);
    expect(date.getFullYear()).toBe(2022);
  });
  it('String date with format incorrect and without format string', () => {
    const input = '31/12/2022';

    expect(() => transformDate(input)).toThrow('Date is invalid');
  });

  it('Number date with format correct and without format string', () => {
    const today = new Date();
    const input = today.valueOf();
    const date = transformDate(input);
    expect(date.getDate()).toBe(today.getDate());
    expect(date.getMonth()).toBe(today.getMonth());
    expect(date.getFullYear()).toBe(today.getFullYear());
  });
});
