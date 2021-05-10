import { View } from '@tarojs/components';
import { useState } from 'react';

import './index.scss';

interface ColorProps {
  border: string;
  background: string;
}

interface ColorSelectorProps {
  colorRange?: ColorProps[];
  onSelect?: () => {};
}

const DefaultColorProps: ColorProps[] = [
  { border: '#f87272', background: '#feebeb' },
  { border: '#f6c846', background: '#fef9eb' },
  { border: '#84f0a6', background: '#ebfef1' },
  { border: '#64e0f7', background: '#ebfbfe' },
  { border: '#ba81f9', background: '#f4ebfe' },
  { border: '#8c8c8c', background: '#ececec' },
];

function ColorSelector({ colorRange = DefaultColorProps }: ColorSelectorProps) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  return (
    <View className="color-selector-container">
      {colorRange.map((color, index) => {
        return (
          <View
            style={{
              boxShadow: `0 0 0 3px ${color.border}`,
              background:
                index === activeColorIndex ? color.border : color.background,
              borderColor: color.background,
            }}
            className="color-item"
          />
        );
      })}
    </View>
  );
}

export default ColorSelector;
