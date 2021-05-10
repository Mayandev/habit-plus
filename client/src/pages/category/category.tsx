import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { HabitCategoryArray } from '@/common/config';
import right from '@/assets/chevron_right.svg';

import './category.scss';
function Category() {
  return (
    <View className="category-container">
      <View className="diy-habit">
        <Text className="text">自定义习惯</Text>
        <Image className="icon" src={right} />
      </View>
      {HabitCategoryArray.map((item) => (
        <View className="category-item">
          <View className="habits-container">
            {item.habits.map((habit) => (
              <View
                className="habit-item"
                onClick={() => {
                  Taro.navigateTo({
                    url: '/pages/edit/edit',
                  });
                }}>
                <Text className="emoji">{habit.emoji}</Text>
                <Text className="text">{habit.text}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

export default Category;
