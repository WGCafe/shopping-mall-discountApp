import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtGrid } from 'taro-ui'

import UseNavInfo from '../../components/useNavInfo';
import Carousel from '../../components/carousel';
import ActionBar from '../../components/actionBar';

import './index.styl';

const TABLIST = [{
  title: '商场'
}, {
  title: '商铺'
}];
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
    <View className="home-page" style={{height: '100vh'}}>
      <View style={{
        position: 'fixed',
        backgroundColor: '#fff',
        zIndex: 1,
        width: '100vw',
        boxSizing: 'border-box',
        paddingTop: statusBarHeight,
        minHeight: appHeaderHeight,
      }}>
        <AtSearchBar
          customStyle={{
            paddingTop: (marginSides / 2),
            paddingBottom: marginSides,
            width: titelBarWidth,
          }}
          disabled={true}
          onChange={keyword => setKeyword(keyword)}
          value={keyword}
          className="search-input"
        />
      </View>
      <View style={{height: '100vw'}}>
        {/* 广告轮播 */}
        <Carousel data={ADVLIST} />
      </View>
      <AtGrid
        hasBorder={false}
        data={
        [
          {
            image: '',
          },
          {
            image: '',
          },
          {
            image: '',
          },
        ]
      } />
    </View>
  )
}

Index.defaultProps = {
};
export default Index;