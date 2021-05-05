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
  src: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
}, {
  text: '广告二',
  src: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
}, {
  text: '广告三',
  src: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
}, {
  text: '广告四 ',
  src: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
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
        minHeight: appHeaderHeight,
      }}>
        <AtSearchBar
          customStyle={{
            paddingTop: statusBarHeight + (marginSides / 2),
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