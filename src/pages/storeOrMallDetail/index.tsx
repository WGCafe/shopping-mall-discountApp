import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIndexes, AtTabs, AtTabsPane, AtIcon } from 'taro-ui';
import Taro from '@tarojs/taro';

import UseNavInfo from '../../components/useNavInfo';

const Index = () => {
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();

  return (
    <View>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;