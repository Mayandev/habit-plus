import { CategoryTextMap } from './text';
import { Category, HabitCategory } from './types';

const HeathyHabitCategory: Category = {
  title: CategoryTextMap[HabitCategory.Healthy],
  habits: [
    { text: '跑步', emoji: '🏃‍♀️' },
    { text: '健走', emoji: '🚶‍♀' },
    { text: '健身', emoji: '🏋️' },
    { text: '瑜伽', emoji: '🧘‍♀️' },
    { text: '骑车', emoji: '🚴' },
    { text: '游泳', emoji: '🏊' },
    { text: '喝水', emoji: '🥛' },
    { text: '早睡', emoji: '🛌' },
    { text: '早起', emoji: '⏰' },
  ],
};

export const HabitCategoryArray = [HeathyHabitCategory];

export const Unit = ['次', '分钟', '公里', '米', '毫升', '升', '公斤', '斤'];
