import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import { AtIcon, AtAvatar, AtTag, AtList, AtListItem } from 'taro-ui';

import Taro from '@tarojs/taro';

import './index.styl';

const ActionList = [
  {
    value: 'ticket',
    count: 10,
    text: '优惠券',
    key: 'coupon'
  },
  {
    value: 'favor',
    count: 110,
    text: '收藏夹',
    key: 'collect'
  },
  {
    value: 'footprint',
    count: 11,
    text: '足迹',
    key: 'histories'
  },
]
function Index () {
  const [userInfo, setUserInfo] = useState({
    avatarUrl: '',
    nickName: '',
    city: '',
    gender: 1
  });

  useEffect(() => {
    Taro.getUserInfo({
      success: function(res) {
        setUserInfo({
          ...res.userInfo,
          avatarUrl: '../../icons/my_avatar_light.png',
        });
      }
    })
  }, []);

  const handleClick = value => {
    Taro.redirectTo({
      url: `/pages/${value}/index`
    });
  };

  return (
    <ScrollView className="account">
      <View className="at-row at-row__align--center">
        <AtAvatar
          customStyle={{
            backgroundColor: '#f6f6f6'
          }}
          circle
          size='large'
          image="../../icons/my_avatar_light.png"
        />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: '24px', verticalAlign: 'middle'}}>{userInfo.nickName}</Text>
          <AtTag
            customStyle={{
              margin: '0 10px',
              backgroundColor: '#ffc7c7',
              color: '#ffffff',
              fontWeight: 'bold',
              verticalAlign: 'middle',
            }}
            circle
            size='small'
          >Lv4</AtTag>
        </View>
      </View>
      <View className="account__card">
        {
          ActionList.map(it => (
            <View
              key={it.key}
              className="account__card-item"
              onClick={() => handleClick(it.key)}
            >
              <AtIcon className="account__card-icon" prefixClass='iconfont' value={it.value} size='24' />
              <Text className="account__card-text">{it.text} <Text style={{color: '#a7a6b3'}}>{it.count}</Text></Text>
            </View>
          ))
        }
      </View>

      <View className="account__list">
        <AtList>
          <AtListItem title='我的评价' arrow='right' onClick={() => {}} />
          <AtListItem title='设置' arrow='right' onClick={() => {}} />
          <AtListItem title='协议声明' arrow='right' onClick={() => {}} />
        </AtList>
      </View>

      <View className="account__achive-medals">
        <Text className="account__achive-medals-title">成就勋章</Text>
        <View className='at-row at-row--wrap'>
          <View className='at-col at-col-4'>
            <Image className="account__achive-medals-image" src=""/>
            <Text></Text>
          </View>
          <View className='at-col at-col-4'>
            <Image className="account__achive-medals-image" src=""/>
            <Text></Text>
          </View>
          <View className='at-col at-col-4'>
            <Image className="account__achive-medals-image" src=""/>
            <Text></Text>
          </View>
          <View className='at-col at-col-4'>
            <Image className="account__achive-medals-image" src=""/>
            <Text></Text>
          </View>
          <View className='at-col at-col-4'>
            <Image className="account__achive-medals-image" src=""/>
            <Text></Text>
          </View>
          <View className='at-col at-col-4'>
            <Image className="account__achive-medals-image" src=""/>
            <Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

Index.defaultProps = {
};
export default Index;