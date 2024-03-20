const DD = 'DD';
const MM = 'MM';
const YYYY = 'YYYY';

export const formatDateToNative = (value: string, format: string): string => {
  if (value.length > 5) {
    const regex = /[a-zA-Z0-9\s]/g;
    const symbol = format.replace(regex, '').split('')[0];

    const cleanFormat = format.split(symbol);
    const cleanDate = value.split(symbol);

    const ddIdx = cleanFormat.findIndex(date => date === DD);
    const mmIdx = cleanFormat.findIndex(date => date === MM);
    const yyyyIdx = cleanFormat.findIndex(date => date === YYYY);

    const dd = cleanDate[ddIdx];
    const mm = cleanDate[mmIdx];
    let yyyy = cleanDate[yyyyIdx];

    if (yyyy.length < 4) {
      const diff = Math.abs(yyyy.length - 4);
      for (let i = 0; i < diff; i++) {
        yyyy = yyyy.concat('', '0');
      }
    }

    return `${yyyy}-${mm}-${dd}`;
  }
  return '';
};
