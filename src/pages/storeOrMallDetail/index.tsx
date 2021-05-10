import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtIcon, AtTag, AtAvatar, AtButton  } from 'taro-ui'

import UseNavInfo from '../../components/useNavInfo';
import Carousel from '../../components/carousel';

import './index.styl';

const ADVLIST = [{
  text: '广告一',
  src: 'https://blog.viewneo.com/wp-content/uploads/2020/07/shopping-mall-with-3-floors.jpg',
}, {
  text: '广告二',
  src: 'https://miro.medium.com/max/700/1*O5PLTgkp9FZFUiWyl0EMNA.jpeg',
}, {
  text: '广告三',
  src: 'https://orlandoinformer.com/wp-content/uploads/2019/01/The-Mall-at-Millenia.jpg',
}, {
  text: '广告四 ',
  src: 'https://kevsbest.com/wp-content/uploads/2020/03/5-Best-Shopping-Centres-in-San-Antonio.jpg',
}];

function Index () {
  const [keyword, setKeyword] = useState('');
  const [tab, setTab] = useState(0);
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();

  // useEffect(() => {
  //   if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
  //     this.$scope.getTabBar().$component.setState({
  //         selected: 0
  //     })
  //   }
  // }, [])

  return (
    <View className="detail-page" style={{height: '100vh'}}>
      <View style={{
        position: 'fixed',
        backgroundColor: '#fff',
        zIndex: 1,
        width: '100vw',
        boxSizing: 'border-box',
        paddingTop: statusBarHeight + (marginSides / 2),
        minHeight: appHeaderHeight,
      }}>
        <View className="at-row at-row__align--center" style={{
          boxSizing: 'border-box',
          padding: marginSides,
          width: titelBarWidth,
        }}>
          <AtIcon
            className="at-col at-col-1 at-col--auto"
            customStyle={{
              fontSize: 20,
              verticalAlign: 'middle',
            }}
            prefixClass='iconfont' value='favor_light'
          />
          <Text className="at-col" style={{fontSize: 14, verticalAlign: 'middle', lineHeight: '24px'}}>上海</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{height: '60vw'}}>
          {/* 广告轮播 */}
          <Carousel data={ADVLIST} />
        </View>
        <View className="at-row">
          <View className="detail-page__image-container at-col at-col-6">
            <View>
              <Image
                className='detail-page__image at-article__img'
                src='https://jdc.jd.com/img/400x400'
                mode='widthFix'
              />
            </View>
          </View>
          <View className="detail-page__image-container at-col at-col-6">
            <View className="">
              <Image
                className='detail-page__image at-article__img'
                src='https://jdc.jd.com/img/400x400'
                mode='widthFix'
              />
            </View>
            <View>
              <Image
                className='detail-page__image at-article__img'
                src='https://jdc.jd.com/img/400x400'
                mode='widthFix'
              />
            </View>
          </View>
        </View>
        <Text className="detail-page__list-title">附近商场的活动</Text>
        <View className="detail-page__item at-row at-row__align--center">
          <View className="detail-page__item-image-container at-col at-col-1 at-col--auto">
            <AtAvatar className="detail-page__item-image" size="large" image="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/shops/sept2019-FindaShop_-516x372b.png"></AtAvatar>
          </View>
          <View className="detail-page__item-summary at-col">
            <Text className="detail-page__item-title">米兰 女神节洗剪吹29.9</Text>
            <View>
              <AtTag className="detail-page__item-tag">满50减20</AtTag>
              <AtTag className="detail-page__item-tag">满50减20</AtTag>
            </View>
            <Text className="detail-page__item-description">[南浦大桥/陆家浜路]</Text>
            <View className="at-row at-row__justify--between">
              <View className="at-col">
                <Text className="detail-page__countdown">还有2天</Text>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <AtButton type="primary" size="small" circle={true} className="detail-page__item-button">马上抢</AtButton>
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