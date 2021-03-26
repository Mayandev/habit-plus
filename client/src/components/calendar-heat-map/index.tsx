import dayjs from 'dayjs';
import { ScrollView, View } from '@tarojs/components';
import { num2IdxArray } from './utils';
import { DAYS_IN_WEEK, SQUARE_SIZE } from './const';

import './index.scss';

interface ICalendarHeatMap {
  spacing?: number;
  squareWidth?: number;
  radius?: number;
  unfilledColor?: string;
  colorRange?: string[];
}

const CalendarHeatMap: React.FC<ICalendarHeatMap> = ({
  spacing,
  squareWidth,
  radius,
  unfilledColor,
}) => {
  const now = dayjs().endOf('day');
  const yearAgo = dayjs().startOf('day').subtract(1, 'year');
  const weeks = now.diff(yearAgo, 'weeks');

  const getSquareSizeWithGutter = (gutterSize) => SQUARE_SIZE + gutterSize;

  const renderSquare = (dayIndex, index) => {
    const [x, y] = [dayIndex * getSquareSizeWithGutter(5), 0];
    return (
      <View
        className="heatmap-day"
        key={index}
        style={{
          height: squareWidth,
          width: squareWidth,
          background: unfilledColor,
          padding: `${spacing}px`,
          backgroundClip: 'content-box',
          borderRadius: `${radius}px`,
        }}
      />
    );
  };

  return (
    <View className="calendar-heatmap-container">
      <ScrollView
        scrollX
        scrollWithAnimation
        scrollAnchoring
        className="heatmap-scroll"
        style={{ whiteSpace: 'nowrap' }}>
        {num2IdxArray(weeks).map((weekIndex) => (
          <View className="heatmap-week" style={{ display: 'inline-block' }}>
            {num2IdxArray(DAYS_IN_WEEK).map((dayIndex) => {
              return renderSquare(
                dayIndex,
                weekIndex * DAYS_IN_WEEK + dayIndex,
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

CalendarHeatMap.defaultProps = {
  spacing: 1,
  squareWidth: 10,
  radius: 3,
  unfilledColor: '#ebedf0',
  colorRange: ['#D8E6E7', '#218380'],
};

export default CalendarHeatMap;
