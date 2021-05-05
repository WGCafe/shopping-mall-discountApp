import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon, AtList, AtListItem } from 'taro-ui';

import Taro from '@tarojs/taro';

import ActionBar from '../../components/actionBar';

import './index.styl';

function Index () {
  const [systemInfo, setSystemInfo] = useState({});

  useEffect(() => {
    Taro.getSystemInfo().then(res  => {
      setSystemInfo(res);
    })
  }, []);

  return (
    <View style={{height: '100vh', padding: 20, paddingTop: systemInfo.safeArea && systemInfo.safeArea.top + 2 || 0, backgroundColor: '#fff'}}>
      <AtIcon
        value='chevron-left'
        onClick={() => {
          Taro.redirectTo({
            url: `/pages/account/index`
          });
        }}
        customStyle={{zIndex: 111, fontSize: 30}}
      />
      <Text
        style={{
          position: 'absolute',
          left: 60,
          right: 60,
          textAlign: 'center',
          lineHeight: '28px'
        }}
      >我收藏的商户</Text>
      <AtList customStyle={{marginTop: 20}}>
        <AtListItem
          title='商户名称'
          note='区县/商圈 商户类型'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
          title='商户名称'
          note='区县/商圈 商户类型'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
          title='商户名称'
          note='区县/商圈 商户类型'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
      </AtList>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;