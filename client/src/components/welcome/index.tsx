import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import ThemeButton from '../button';
import plus from '@/assets/plus.svg';

import './index.scss';

function Welcome() {
  const openCategoryPage = () => {
    Taro.navigateTo({
      url: '/pages/category/category',
    });
  };

  return (
    <View className="welcome-container">
      <View className="app-info">
        <View className="welcome-emoji jackInTheBox">🎉</View>
        <View className="app-title">每日习惯</View>
        <View className="app-title-en">Daily Habits</View>
      </View>
      <ThemeButton onClick={openCategoryPage} icon={plus} text={'新习惯'} />
    </View>
  );
}

export default Welcome;
