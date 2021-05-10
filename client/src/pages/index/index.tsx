import React, { Component } from 'react';
import './index.scss';
import 'taro-calendar-heatmap/dist/index.css';
import Welcome from '@/components/welcome';
import { View } from '@tarojs/components';
import Card from '@/components/card';
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <Welcome />;
  }
}
