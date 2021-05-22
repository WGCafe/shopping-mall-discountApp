import React, { useState } from 'react'
import { ScrollView, View, Text } from '@tarojs/components'
import { AtIcon, AtButton, AtAvatar, AtTag } from 'taro-ui'
import Taro from '@tarojs/taro';

import UseNavInfo from '../../components/useNavInfo';

import './index.styl';
function Index () {
  const [keyword, setKeyword] = useState('');
  const [tab, setTab] = useState(0);
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();

  const handleClick = value => {
    Taro.redirectTo({
      url: `/pages/storeOrMallDetail/index`
    });
  };

  const handleVisitSearchPage = () => {
    Taro.redirectTo({
      url: `/pages/stores/search/index`
    });
  }

  return (
    <View className="stores" style={{height: '100vh'}}>
      <View style={{
        position: 'fixed',
        backgroundColor: '#fff',
        zIndex: 1,
        width: '100vw',
        boxSizing: 'border-box',
        paddingTop: statusBarHeight + (marginSides / 2),
        minHeight: appHeaderHeight,
      }}>
        <View
          className="at-row at-row__align--center" style={{
            boxSizing: 'border-box',
            padding: marginSides,
            width: titelBarWidth,
          }}
          onClick={handleVisitSearchPage}
        >
          <AtIcon
            className="at-col at-col-1 at-col--auto"
            customStyle={{
              verticalAlign: 'middle',
            }}
            prefixClass='iconfont' value='location_light'
          />
          <Text className="at-col" style={{fontSize: 14, verticalAlign: 'middle',}}>上海</Text>
        </View>
      </View>
      <ScrollView style={{
        paddingTop: appHeaderHeight,
      }}>
        <View className="stores__item at-row at-row__align--center" onClick={handleClick}>
          <View className="stores__item-image-container at-col at-col-1 at-col--auto">
            <AtAvatar className="stores__item-image" size="large" image="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/shops/sept2019-FindaShop_-516x372b.png"></AtAvatar>
          </View>
          <View className="stores__item-summary at-col">
            <Text className="stores__item-title">米兰 女神节洗剪吹29.9</Text>
            <View className="customize-tag__group">
              <AtTag className="customize-tag">满50减20</AtTag>
              <AtTag className="customize-tag">满50减20</AtTag>
            </View>
            <Text className="stores__item-description">[南浦大桥/陆家浜路]</Text>
            <View className="at-row at-row__justify--between">
              <View className="at-col">
                <Text className="stores__countdown">还有2天</Text>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <AtButton type="primary" size="small" circle={true} className="stores__item-button">马上抢</AtButton>
              </View>
            </View>
          </View>
        </View>

        <View className="stores__item at-row at-row__align--center" onClick={handleClick}>
          <View className="stores__item-image-container at-col at-col-1 at-col--auto">
            <AtAvatar className="stores__item-image" size="large" image="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/shops/sept2019-FindaShop_-516x372b.png"></AtAvatar>
          </View>
          <View className="stores__item-summary at-col">
            <Text className="stores__item-title">米兰 女神节洗剪吹29.9</Text>
            <View className="customize-tag__group">
              <AtTag className="customize-tag">满50减20</AtTag>
              <AtTag className="customize-tag">满50减20</AtTag>
            </View>
            <Text className="stores__item-description">[南浦大桥/陆家浜路]</Text>
            <View className="at-row at-row__justify--between">
              <View className="at-col">
                <Text className="stores__countdown">还有2天</Text>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <AtButton type="primary" size="small" circle={true} className="stores__item-button">马上抢</AtButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;