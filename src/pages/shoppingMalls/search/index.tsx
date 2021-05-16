import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro';

import { Map, View, ScrollView, Text } from '@tarojs/components'
import { AtSearchBar, AtIcon, AtTag, AtTabs, AtTabsPane } from 'taro-ui'

import './index.styl';

function Index () {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0
  });
  const [currentTab, setCurrentTab] = useState(0);
  const markers = [
    {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    }
  ];
  const tabList = [{ title: '选择门店' }, { title: '收藏' }];
  const switchTab = (value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    Taro.getLocation({
      type: 'wgs84',
      success: ({latitude, longitude}) => {
        setCurrentLocation({latitude, longitude});
      },
  })}, []);

  return (
    <View>
      <AtTabs current={currentTab} tabList={tabList} onClick={switchTab}>
        <AtTabsPane current={currentTab} index={0} >
          <View className="at-row at-row__align--center">
            <View className="at-col">
              <Text>上海 所有区</Text>
              <AtIcon
                customStyle={{
                  verticalAlign: 'middle',
                }}
                prefixClass='iconfont' value='right'
              />
            </View>
            <View className="at-col">
              <AtSearchBar
                value={''}
                onChange={() => {}}
                onActionClick={() => {}}
              />
            </View>
          </View>
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
            <View className="search__item at-row at-row__align--center">
              <View className='search__item-summary at-col'>
                <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
                <View>
                  <AtIcon
                    customStyle={{
                      verticalAlign: 'middle',
                    }}
                    prefixClass='iconfont' value='location_light'
                  />
                  <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
                </View>
                <View>
                  <AtIcon
                    customStyle={{
                      verticalAlign: 'middle',
                    }}
                    prefixClass='iconfont' value='time'
                  />
                  <Text className='search__item-description'>10:00～22:00</Text>
                </View>
                <View>
                  <AtTag className='search__item-tag'>满50减20</AtTag>
                  <AtTag className='search__item-tag'>满50减20</AtTag>
                </View>
                <View className='at-row at-row__justify--between'>
                </View>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <View className='at-col at-col-1 at-col--auto'>
                  <Text>去看看</Text>
                  <Text>距离 3.6km</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={1}>
          <ScrollView style={{
              paddingTop: '10px',
            }}
            >
            <View className="search__item at-row at-row__align--center">
              <View className='search__item-summary at-col'>
                <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
                <View>
                  <AtIcon
                    customStyle={{
                      verticalAlign: 'middle',
                    }}
                    prefixClass='iconfont' value='location_light'
                  />
                  <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
                </View>
                <View>
                  <AtIcon
                    customStyle={{
                      verticalAlign: 'middle',
                    }}
                    prefixClass='iconfont' value='time'
                  />
                  <Text className='search__item-description'>10:00～22:00</Text>
                </View>
                <View>
                  <AtTag className='search__item-tag'>满50减20</AtTag>
                  <AtTag className='search__item-tag'>满50减20</AtTag>
                </View>
                <View className='at-row at-row__justify--between'>
                </View>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <View className='at-col at-col-1 at-col--auto'>
                  <Text>去看看</Text>
                  <Text>距离 3.6km</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}

export default Index;