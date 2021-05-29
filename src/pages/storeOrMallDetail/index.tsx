import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
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
      <View>
        <Image src="https://blog.viewneo.com/wp-content/uploads/2020/07/shopping-mall-with-3-floors.jpg" />
        <Text>米兰 女神节洗剪吹</Text>
      </View>
      <View>
        <View>
          <AtIcon
            className="detail__icon"
            customStyle={{
              padding: '0.1rem',
              fontSize: '1rem'
            }}
            prefixClass='iconfont' value='time'
          />
          <Text className='detail__time'>10:00～22:00</Text>
        </View>
        <View>
          <AtIcon
            className="detail__icon"
            customStyle={{
              padding: '0.1rem',
              fontSize: '1rem'
            }}
            prefixClass='iconfont' value='car'
          />
          <Text className='detail__time'>可停车</Text>
        </View>
        <View>
          <AtIcon
            className="detail__icon"
            customStyle={{
              padding: '0.1rem',
              fontSize: '1rem'
            }}
            prefixClass='iconfont' value='wifi'
          />
          <Text className='detail__time'>Wi-Fi</Text>
        </View>
      </View>

      <View>
        <AtIcon
          className="search__item-icon"
          customStyle={{
            fontSize: '1.2rem'
          }}
          prefixClass='iconfont' value='location_light'
        />
        <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
      </View>

      <View>

      </View>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;