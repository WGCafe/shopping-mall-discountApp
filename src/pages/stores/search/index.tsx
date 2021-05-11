import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro';

import { Map, View, ScrollView, Text } from '@tarojs/components'
import { AtButton, AtAvatar, AtTag } from 'taro-ui'

import './index.styl';

function Index () {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0
  });
  const markers = [
    {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      }
    }
  ];
  const tabList = [{ title: '标签页1' }, { title: '标签页2' }]

  useEffect(() => {
    Taro.getLocation({
      type: 'wgs84',
      success: ({latitude, longitude}) => {
        setCurrentLocation({latitude, longitude});
      },
  })}, []);

  return (
    <View>
      <Map
        setting={{}}
        markers={markers}
        latitude={currentLocation.latitude}
        longitude={currentLocation.longitude}
        style={{ height: '30vh', width: '100vw' }}
      />
      <ScrollView style={{
        paddingTop: '10px',
      }}
      >
        <View className='search__item at-row at-row__align--center'>
          <View className='search__item-image-container at-col at-col-1 at-col--auto'>
            <AtAvatar className='search__item-image' size='large' image='https://westwoodnetlease.com/wp-content/uploads/2016/09/shopping-mall-investment.jpeg'></AtAvatar>
          </View>
          <View className='search__item-summary at-col'>
            <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
            <View>
              <AtTag className='search__item-tag'>满50减20</AtTag>
              <AtTag className='search__item-tag'>满50减20</AtTag>
            </View>
            <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
            <View className='at-row at-row__justify--between'>
              <View className='at-col'>
                <Text className='search__countdown'>还有2天</Text>
              </View>
              <View className='at-col at-col-1 at-col--auto'>
                <AtButton type='primary' size='small' circle className='search__item-button'>去看看</AtButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Index;