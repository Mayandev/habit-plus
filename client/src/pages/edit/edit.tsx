import Card from '@/components/card';
import { View, Image, Input, Picker, Text } from '@tarojs/components';
import './edit.scss';
import edit from '@/assets/edit.svg';
import check from '@/assets/check.svg';
import save from '@/assets/save.svg';
import unit from '@/assets/unit.svg';
import { Unit } from '@/common/config';
import Taro from '@tarojs/taro';
import ColorSelector from '@/components/color-selector';
import ThemeButton from '@/components/button';

function Edit() {
  const saveHabit = () => {};

  return (
    <View className="edit-container">
      <View className="form-container">
        <Card />
        <View className="form">
          <View className="form-item">
            <Image className="icon" src={edit} />
            <Input placeholder="习惯" />
          </View>
          <View className="form-row">
            <View className="form-item target">
              <Image className="icon" src={check} />
              <Input placeholder="目标" type="number" />
            </View>
            <View className="form-item unit">
              <Image className="icon" src={unit} />
              <Picker mode="selector" range={Unit} onChange={() => {}}>
                <Text className="unit-picker">单位</Text>
              </Picker>
            </View>
          </View>
          <ColorSelector />
        </View>
      </View>
      <ThemeButton onClick={saveHabit} icon={save} text={'保存'} />
    </View>
  );
}

export default Edit;
