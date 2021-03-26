import React, { Component } from 'react';
import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import Login from '@/components/login';
import CalendarHeatMap from '@/components/calendar-heat-map';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        aaaa
        <CalendarHeatMap />
      </View>
    );
  }
}
