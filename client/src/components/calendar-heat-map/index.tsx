import dayjs from 'dayjs';
import { View } from '@tarojs/components';
import { num2IdxArray } from './utils';
import { DAYS_IN_WEEK } from './const';

interface ICalendarHeatMap {}

function CalendarHeatMap(props: ICalendarHeatMap) {
  const now = dayjs().endOf('day');
  const yearAgo = dayjs().startOf('day').subtract(1, 'year');
  const weeks = now.diff(yearAgo, 'weeks');

  console.log(weeks);

  return (
    <View>
      {num2IdxArray(weeks).map(() => {
        return num2IdxArray(DAYS_IN_WEEK).map(() => <View>1</View>);
      })}
    </View>
  );
}

export default CalendarHeatMap;
