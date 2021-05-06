import React, { useState } from 'react'
import { ScrollView, View, Text } from '@tarojs/components'
import { AtIcon, AtButton, AtAvatar, AtTag } from 'taro-ui'

import UseNavInfo from '../../components/useNavInfo';

import './index.styl';
function Index () {
  const [keyword, setKeyword] = useState('');
  const [tab, setTab] = useState(0);
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();

  return (
    <View className="shopping-malls" style={{height: '100vh'}}>
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
        <View className="shopping-malls__item at-row at-row__align--center">
          <View className="shopping-malls__item-image-container at-col at-col-1 at-col--auto">
            <AtAvatar className="shopping-malls__item-image" size="large" image="https://jdc.jd.com/img/300"></AtAvatar>
          </View>
          <View className="shopping-malls__item-summary at-col">
            <Text className="shopping-malls__item-title">米兰 女神节洗剪吹29.9</Text>
            <View>
              <AtTag className="shopping-malls__item-tag">满50减20</AtTag>
              <AtTag className="shopping-malls__item-tag">满50减20</AtTag>
            </View>
            <Text className="shopping-malls__item-description">[南浦大桥/陆家浜路]</Text>
            <View className="at-row at-row__justify--between">
              <View className="at-col">
                <Text className="shopping-malls__countdown">还有2天</Text>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <AtButton type="primary" size="small" circle={true} className="shopping-malls__item-button">马上抢</AtButton>
              </View>
            </View>
          </View>
        </View>
{/*
        <AtList customStyle={{marginTop: 20}}>
          <AtListItem
            title='米兰 女神节洗剪吹29.9'
            note='[南浦大桥/陆家浜路]'
            thumb='https://www.wpexplorer.com/wp-content/uploads/theme-plugin-placeholder.png'
            extraThumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
            extraText="test"
            iconInfo={{ size: 25, color: '#78A4FA', value: 'item-button', prefixClass: "iconfont" }}
          ><AtButton>按钮文案</AtButton></AtListItem>
          <AtListItem
            title='注册会员全场五折'
            note='区县/商圈 商户类型'
            thumb='https://www.wpexplorer.com/wp-content/uploads/theme-plugin-placeholder.png'
          />
          <AtListItem
            title='新店开业领取满减券'
            note='区县/商圈 商户类型'
            thumb='https://www.wpexplorer.com/wp-content/uploads/theme-plugin-placeholder.png'
          />
          <AtListItem
            title='奶茶新店开业'
            note='全场买一送一'
            thumb='https://www.wpexplorer.com/wp-content/uploads/theme-plugin-placeholder.png'
          />
          <AtListItem
            title='第一百货年中大促'
            note='满减/折上折'
            thumb='https://www.wpexplorer.com/wp-content/uploads/theme-plugin-placeholder.png'
          />
          <AtListItem
            title='第一百货年中大促'
            note='满减/折上折'
            thumb='https://www.wpexplorer.com/wp-content/uploads/theme-plugin-placeholder.png'
          />
        </AtList> */}
      </ScrollView>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;