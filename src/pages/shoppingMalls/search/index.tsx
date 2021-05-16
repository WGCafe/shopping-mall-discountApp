import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro';

import { Map, View, ScrollView, Text } from '@tarojs/components'
import { AtSearchBar, AtIcon, AtTag, AtTabs, AtTabsPane } from 'taro-ui'

import './index.styl';

function Index () {
  const [modalDisplayState, setModalDisplayState] = useState(false);
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
  const showSearchModal = () => {
    setModalDisplayState(true);
  }

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
            <View className="search__region-selector at-col">
              <Text className="search__region-selector-text">上海 所有区</Text>
              <AtIcon
                className="search__region-selector-icon"
                customStyle={{
                  verticalAlign: 'middle',
                  fontSize: '12PX',
                }}
                prefixClass='iconfont' value='right'
              />
            </View>
            <View
              className="at-col"
              style={{
                textAlign: 'right'
              }}
              onClick={showSearchModal}
            >
              <View className="search__search-button">
                <AtIcon
                  className="search__search-button-icon"
                  customStyle={{
                    verticalAlign: 'middle',
                    fontSize: '14PX',
                  }}
                  prefixClass='iconfont' value='search'
                />
                <Text className="search__search-button-text">搜索</Text>
              </View>
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
            <View className="search__item at-row at-row__align--center search__item--active">
              <View className='search__item-summary at-col'>
                <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      fontSize: '1.2rem'
                    }}
                    prefixClass='iconfont' value='location_light'
                  />
                  <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
                </View>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      padding: '0.1rem',
                      fontSize: '1rem'
                    }}
                    prefixClass='iconfont' value='time'
                  />
                  <Text className='search__item-description'>10:00～22:00</Text>
                </View>
                <View className="customize-tag__group">
                  <AtTag className='customize-tag'>满50减20</AtTag>
                  <AtTag className='customize-tag'>满50减20</AtTag>
                </View>
                <View className='at-row at-row__justify--between'>
                </View>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <View className='search__item-prompt-container at-col at-col-1 at-col--auto'>
                  <Text className="search__item-promt">去看看</Text>
                  <Text className="search__item-distance">距离 3.6km</Text>
                </View>
              </View>
            </View>

            <View className="search__item at-row at-row__align--center">
              <View className='search__item-summary at-col'>
                <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      fontSize: '1.2rem'
                    }}
                    prefixClass='iconfont' value='location_light'
                  />
                  <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
                </View>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      padding: '0.1rem',
                      fontSize: '1rem'
                    }}
                    prefixClass='iconfont' value='time'
                  />
                  <Text className='search__item-description'>10:00～22:00</Text>
                </View>
                <View className="customize-tag__group">
                  <AtTag className='customize-tag'>满50减20</AtTag>
                  <AtTag className='customize-tag'>满50减20</AtTag>
                </View>
                <View className='at-row at-row__justify--between'>
                </View>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <View className='search__item-prompt-container at-col at-col-1 at-col--auto'>
                  <Text className="search__item-promt">去看看</Text>
                  <Text className="search__item-distance">距离 3.6km</Text>
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
            <View className="search__item at-row at-row__align--center search__item--active">
              <View className='search__item-summary at-col'>
                <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      fontSize: '1.2rem'
                    }}
                    prefixClass='iconfont' value='location_light'
                  />
                  <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
                </View>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      padding: '0.1rem',
                      fontSize: '1rem'
                    }}
                    prefixClass='iconfont' value='time'
                  />
                  <Text className='search__item-description'>10:00～22:00</Text>
                </View>
                <View className="customize-tag__group">
                  <AtTag className='customize-tag'>满50减20</AtTag>
                  <AtTag className='customize-tag'>满50减20</AtTag>
                </View>
                <View className='at-row at-row__justify--between'>
                </View>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <View className='search__item-prompt-container at-col at-col-1 at-col--auto'>
                  <Text className="search__item-promt">去看看</Text>
                  <Text className="search__item-distance">距离 3.6km</Text>
                </View>
              </View>
            </View>

            <View className="search__item at-row at-row__align--center">
              <View className='search__item-summary at-col'>
                <Text className='search__item-title'>米兰 女神节洗剪吹29.9</Text>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      fontSize: '1.2rem'
                    }}
                    prefixClass='iconfont' value='location_light'
                  />
                  <Text className='search__item-description'>[南浦大桥/陆家浜路]</Text>
                </View>
                <View>
                  <AtIcon
                    className="search__item-icon"
                    customStyle={{
                      padding: '0.1rem',
                      fontSize: '1rem'
                    }}
                    prefixClass='iconfont' value='time'
                  />
                  <Text className='search__item-description'>10:00～22:00</Text>
                </View>
                <View className="customize-tag__group">
                  <AtTag className='customize-tag'>满50减20</AtTag>
                  <AtTag className='customize-tag'>满50减20</AtTag>
                </View>
                <View className='at-row at-row__justify--between'>
                </View>
              </View>
              <View className="at-col at-col-1 at-col--auto">
                <View className='search__item-prompt-container at-col at-col-1 at-col--auto'>
                  <Text className="search__item-promt">去看看</Text>
                  <Text className="search__item-distance">距离 3.6km</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </AtTabsPane>
      </AtTabs>
      {
        modalDisplayState ? (
          <View className="search__search-modal">
            <AtSearchBar
              showActionButton
              value={''}
              onChange={() => {}}
              onActionClick={() => {}}
            />
          </View>
        ) : null
      }
    </View>
  )
}

export default Index;