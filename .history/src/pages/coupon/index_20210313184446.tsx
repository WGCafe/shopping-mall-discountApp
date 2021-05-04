import React, { useEffect, useState } from 'react'
import { View, Text , Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui';

import Taro from '@tarojs/taro';

import ActionBar from '../../components/actionBar';

import './index.styl';

const ActionList = [
  {
    value: 'bookmark',
    text: '收藏夹',
    key: 'collect'
  },
  {
    value: 'shopping-bag',
    text: '优惠券',
    key: 'coupon'
  },
  {
    value: 'help',
    text: '联系客服',
    key: 'help'
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
        setUserInfo(res.userInfo);
      }
    })
  }, []);

  return (
    <View style={{height: '100vh', padding: 20, backgroundColor: '#fff'}}>
      <View style={{display: 'flex'}}>
        <Image src={userInfo.avatarUrl} style={{width: 50, height: 50, borderRadius: 50}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 10,
            justifyContent: 'center'
          }}
        >
          <Text style={{fontWeight: 'bold'}}>{userInfo.nickName}</Text>
          <Text style={{fontSize: 12, color: '#ddd'}}>{userInfo.city} {userInfo.gender == 1 ? '男' : '女'}</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
          boxShadow: '2px 2px 10px 2px #aaa',
          margin: '20px 0'
        }}
      >
        {
          ActionList.map(it => (
            <View
              key={it.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <AtIcon value={it.value} size='30' />
              <Text>{it.text}</Text>
            </View>
          ))
        }
      </View>
      <ActionBar activeTab={1} />
    </View>
  )
}

Index.defaultProps = {
};
export default Index;