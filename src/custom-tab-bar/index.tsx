import React, {useState, useEffect} from 'react'
import Taro from '@tarojs/taro'
import {CoverView, CoverImage} from '@tarojs/components'

function customTabBar() {

  const [customTabBarInfo, setCustomTabBarInfo] = useState({
    selected: 0,
    color: null,
    selectedColor: null,
    list: []
  })

  useEffect(() => {
    setCustomTabBarInfo({
      selected: 0,
      color: '#666',
      selectedColor: '#ed6c00',
      list: [{
          pagePath: '/pages/index/index',
          iconPath: '/assets/home.png',
          selectedIconPath: '/assets/home-active.png',
          text: '首页'
        },
        {
          pagePath: '/pages/account/index',
          iconPath: '/assets/user.png',
          selectedIconPath: '/assets/user-active.png',
          text: '我的'
        }
      ]
    })
  }, [])

  const switchTab = (item) => {
    const url = item.pagePath

    Taro.switchTab({url});
  }


  // 自定义 tabBar的页面
  return (
    <CoverView className='at-tab-bar'>
      <CoverView className='tab-bar-wrap'>
        {
          customTabBarInfo.list.map((item, index) => {
            return <CoverView className='tab-bar-wrap-item'
              onClick={() => {switchTab(item)}}
              data-path={item.pagePath}
              key={item.text}
            >
              <CoverImage className='tab-bar-wrap-item-icon' src={customTabBarInfo.selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView className='tab-bar-wrap-item-btn'
                style={{color: customTabBarInfo.selected === index ? customTabBarInfo.selectedColor : customTabBarInfo.color}}
              >{item.text}</CoverView>
            </CoverView>
          })
        }
      </CoverView>
    </CoverView>
  );
}

export default customTabBar