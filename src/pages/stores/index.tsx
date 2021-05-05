import React, { useState } from 'react'
import { ScrollView, View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtIcon } from 'taro-ui'

import UseNavInfo from '../../components/useNavInfo';

import './index.styl';

const TABLIST = [{
  title: '商场'
}, {
  title: '商铺'
}];
const ADVLIST = [{
  text: '广告一'
}, {
  text: '广告二'
}, {
  text: '广告三'
}, {
  text: '广告四 '
}];

function Index () {
  const [keyword, setKeyword] = useState('');
  const [tab, setTab] = useState(0);
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();

  return (
    <View style={{height: '100vh'}}>
      <View style={{
        position: 'fixed',
        backgroundColor: '#fff',
        zIndex: 1,
        width: '100vw',
        boxSizing: 'border-box',
        paddingTop: statusBarHeight + (marginSides / 2),
        minHeight: appHeaderHeight,
      }}>
        <View className="at-row" style={{
          boxSizing: 'border-box',
          padding: marginSides,
          width: titelBarWidth,
        }}>
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
      </ScrollView>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;