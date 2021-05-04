import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane, AtList, AtListItem, AtCurtain } from 'taro-ui'

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

  // console.log(this.globalData.navBarHeight)

  return (
    <View style={{height: '100vh'}}>
      <View>
        <Text>上海</Text>
        <AtSearchBar
          fixed={true}
          onChange={keyword => setKeyword(keyword)}
          value={keyword}
          className="search-input"
        />
      </View>
      <View style={{height: '100vw'}}>
        {/* 广告轮播 */}
        <Carousel data={ADVLIST} />
      </View>
      <AtTabs current={tab} tabList={TABLIST} onClick={value => setTab(value)} customStyle={{height: 'auto', backgroundColor: '#fff'}}>
        <AtTabsPane current={tab} index={0} >
          <AtList customStyle={{marginTop: 20}}>
            <AtListItem
              title='女神节洗剪吹29.9'
              note='区县/商圈 商户类型'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
            <AtListItem
              title='注册会员全场五折'
              note='区县/商圈 商户类型'
              thumb='https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
            />
            <AtListItem
              title='新店开业领取满减券'
              note='区县/商圈 商户类型'
              thumb='https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png'
            />
            <AtListItem
              title='奶茶新店开业'
              note='全场买一送一'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='第一百货年中大促'
              note='满减/折上折'
              thumb='https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'
            />
            <AtListItem
              title='第一百货年中大促'
              note='满减/折上折'
              thumb='https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
          </AtList>
        </AtTabsPane>
        <AtTabsPane current={tab} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
      </AtTabs>
      <ActionBar activeTab={0} />
    </View>
  )
}

Index.defaultProps = {
};
export default Index;