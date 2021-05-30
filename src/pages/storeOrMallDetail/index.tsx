import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import Taro from '@tarojs/taro';
import UseNavInfo from '../../components/useNavInfo';
import './index.styl';

const Index = () => {
  const { statusBarHeight, appHeaderHeight, titelBarWidth, marginSides } = UseNavInfo();
  const handelClickBackButton = () => {
    Taro.navigateBack({delta: 1});
  };

  return (
    <View>
      <View
        style={{
          position: 'fixed',
          backgroundColor: '#fff',
          zIndex: 1,
          width: '100vw',
          boxSizing: 'border-box',
          paddingTop: statusBarHeight + (marginSides / 2),
          minHeight: appHeaderHeight,
        }}
      >
        <View
          className='at-row at-row__align--center'
          style={{
            boxSizing: 'border-box',
            width: titelBarWidth,
          }}
        >
          <AtIcon
            className='at-col at-col-1 at-col--auto'
            customStyle={{
              verticalAlign: 'middle',
              padding: marginSides,
            }}
            prefixClass='iconfont' value='back'
            onClick={handelClickBackButton}
          />
        </View>
      </View>

      <View style={{
          paddingTop: appHeaderHeight,
        }}>
        <View className="detail__image-container">
          <Image src="https://blog.viewneo.com/wp-content/uploads/2020/07/shopping-mall-with-3-floors.jpg" />
        </View>
        <Text className="detail__title">米兰 女神节洗剪吹</Text>
        <View className="detail__info-list-container">
          <View className="detail__info-list">
            <View className="detail__info">
              <AtIcon
                className="detail__info-icon"
                customStyle={{
                  padding: '0.2rem',
                  fontSize: '1.2rem'
                }}
                prefixClass='iconfont' value='time'
              />
              <Text className='detail__info-text'>10:00～22:00</Text>
            </View>
            <View className="detail__info">
              <AtIcon
                className="detail__info-icon"
                customStyle={{
                  padding: '0.2rem',
                  fontSize: '1.2rem'
                }}
                prefixClass='iconfont' value='car'
              />
              <Text className='detail__info-text'>可停车</Text>
            </View>
            <View className="detail__info">
              <AtIcon
                className="detail__info-icon"
                customStyle={{
                  padding: '0.2rem 0.4rem',
                  fontSize: '1.2rem'
                }}
                prefixClass='iconfont' value='wifi'
              />
              <Text className='detail__info-text'>Wi-Fi</Text>
            </View>
          </View>
        </View>

        <View className="detail__info-description-container">
          <View className="detail__info-description-list at-row">
            <View className="at-col">
              <AtIcon
                className="detail__info-icon"
                customStyle={{
                  verticalAlign: 'top',
                  padding: '0.2rem',
                  fontSize: '1.4rem',
                }}
                prefixClass='iconfont' value='location_light'
              />
              <View className='detail__info-description'>
                <Text className='detail__info-description-title'>[南浦大桥/陆家浜路]</Text>
                <Text className='detail__info-description-hint'>距离你200m</Text>
              </View>
            </View>

            <AtIcon
              className="at-col at-col-1 at-col--auto"
              customStyle={{
                padding: '0.3rem 0.6rem',
                fontSize: '2rem',
              }}
              prefixClass='iconfont' value='phone_light'
            />
          </View>
        </View>

        <View>

        </View>
      </View>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;