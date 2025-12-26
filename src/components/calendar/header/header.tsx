import { Text } from '@/components/text/text';
import { useUtilsProvider } from '@/lib/provider/utilsProvider/utilsProvider';

import { WEEK_DAYS } from '../constants/constants';
import type { HeaderProps } from './types/header';

export const Header = ({
  cssClasses,
  formatWeekDayOption = 'narrow',
  isSundayFirst = false,
}: HeaderProps): JSX.Element => {
  const { dateHelpers } = useUtilsProvider();

  return (
    <thead className={cssClasses?.headercontainer}>
      <tr className={cssClasses?.headerrow}>
        {dateHelpers
          .getAllWeekdayName(formatWeekDayOption, isSundayFirst)
          .map((day, index) => (
            <th
              key={`day-${day}-${index.toString()}`}
              className={cssClasses?.weekdaycontainer}
              scope="col"
              style={{
                width: `calc(100% / ${WEEK_DAYS})`,
              }}
            >
              <Text component="span">{day}</Text>
            </th>
          ))}
      </tr>
    </thead>
  );
};
