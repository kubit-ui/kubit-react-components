import { formatValueDate, verifyFormat } from './verifyFormat';

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const checkLeapYear = (year: number): void => {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthDays[1] = 29;
  }
};

export const splitDate = (
  date: string,
  format: string,
  today: string,
  isRange?: boolean,
  dateSeparator?: string
): { formatSeparator?: string; dateToCheck: string } => {
  const formatRegex = /[^\p{L}]+/gu;
  const dateRegex = /[^\d]+/g;

  const formattedDate = formatValueDate(date, today);

  // we want always this YYYY-MM-DD format
  const formatToOrderDate = 'YYYY-MM-DD';

  const correctOrder = formatToOrderDate.split('-');

  const formatSplit = format.split(formatRegex);

  let dateToCheck = '';

  // Transform date into YYYY-MM-DD format
  const orderDate = date => {
    return correctOrder.map((element: string) => {
      if (element.includes('Y')) {
        return date[formatSplit.findIndex((x: string) => x.includes('Y'))];
      } else if (element.includes('M')) {
        return date[formatSplit.findIndex((x: string) => x.includes('M'))];
      } else if (element.includes('D')) {
        return date[formatSplit.findIndex((x: string) => x.includes('D'))];
      }
    });
  };

  if (formattedDate.length === format.length) {
    const dateSplit = formattedDate.split(dateRegex);
    dateToCheck = orderDate(dateSplit).join('-');
  } else if (isRange && date.length > format.length) {
    const dateRangeSplit = date.split(dateRegex);
    const firstDate = orderDate(dateRangeSplit.slice(0, 3));
    const secondDate = orderDate(dateRangeSplit.slice(3, 7));
    dateToCheck = `${firstDate.join('-')} ${dateSeparator} ${secondDate.join('-')}`;
  }

  return {
    dateToCheck,
  };
};

export const verifyDate = (
  format: string,
  date: string,
  minDate: Date,
  maxDate: Date,
  dateSeparator?: string,
  isRange?: boolean,
  today = ''
): boolean => {
  const { dateToCheck } = splitDate(date, format, today, isRange, dateSeparator);

  const { hasError } = verifyFormat(
    format,
    dateToCheck,
    minDate,
    maxDate,
    today,
    dateSeparator,
    isRange
  );

  if (hasError) {
    return false;
  }

  const dateString = dateToCheck.replace(/\D/g, '');

  const year = Number(dateString.substring(0, 4));
  const month = Number(dateString.substring(4, 6));
  const day = Number(dateString.substring(6, 8));

  checkLeapYear(year);

  if (month < 1 || month > 12 || day < 1 || day > monthDays[month - 1]) {
    return false;
  }

  return true;
};
