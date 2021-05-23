import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIndexes, AtTabs, AtTabsPane, AtIcon } from 'taro-ui';
import Taro from '@tarojs/taro';

import UseNavInfo from '../../components/useNavInfo';

const Index = () => {
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();
  const handelClickBackButton = () => {
    Taro.navigateBack({delta: 1});
  };

  return (
    <View>
      <View
        style={{
          position: 'fixed',
          backgroundColor: '#fff',
          zIndex: 1,
          width: '100vw',
          boxSizing: 'border-box',
          paddingTop: statusBarHeight + (marginSides / 2),
          minHeight: appHeaderHeight,
        }}
      >
        <View
          className='at-row at-row__align--center'
          style={{
            boxSizing: 'border-box',
            width: titelBarWidth,
          }}
        >
          <AtIcon
            className='at-col at-col-1 at-col--auto'
            customStyle={{
              verticalAlign: 'middle',
              padding: marginSides,
            }}
            prefixClass='iconfont' value='back'
            onClick={handelClickBackButton}
          />
        </View>
      </View>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;