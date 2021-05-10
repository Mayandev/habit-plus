import { View, Text } from '@tarojs/components';
import './index.scss';

interface CardProps {
  emoji?: string;
  title?: string;
  unit?: string;
  target?: number;
  keepDays?: number;
  background?: string;
  onEmojiClick?: () => {};
}

function Card({
  emoji = '🏃',
  title = '标题',
  unit = '分钟',
  target = 2,
  keepDays = 5,
  background = '#fef9eb',
  onEmojiClick,
}: CardProps) {
  return (
    <View style={{ backgroundColor: background }} className="card-container">
      <View
        className="emoji"
        onClick={() => {
          onEmojiClick && onEmojiClick();
        }}>
        {emoji}
      </View>
      <View className="right-view">
        <View className="title-container">
          <Text className="title">{title}</Text>
          <Text className="unit">
            {target}
            {unit}/天
          </Text>
        </View>
        <View className="days">
          <Text className="number">{keepDays}</Text>
          <Text className="unit">天</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
