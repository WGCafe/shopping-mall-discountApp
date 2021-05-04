import React from 'react'
import { AtTabBar } from 'taro-ui'
import Taro from '@tarojs/taro';

const BOTTOMLIST = [
  { title: '首页', iconType: 'home'},
  { title: '商场', iconType: 'shopping-mall'},
  { title: '店铺', iconType: 'store'},
  { title: '我的', iconType: 'user'}
];

function ActionBar({activeTab}) {
  const handleClick = (value) => {
    switch (value) {
      case 0:
        Taro.redirectTo({
          url: `/pages/index/index`
        })
        break;
      case 1:
        Taro.redirectTo({
          url: `/pages/shoppingMalls/index`
        })
      case 2:
        Taro.redirectTo({
          url: `/pages/stores/index`
        })
      case 3:
        Taro.redirectTo({
          url: `/pages/account/index`
        })
        break;
      default:
        break;
    }
  };

  return (
    <AtTabBar
      fixed
      tabList={BOTTOMLIST}
      onClick={handleClick}
      current={activeTab}
      color="#8785a2"
      selectedColor="#ffc7c7"
      iconSize={20}
    />
  );
};

ActionBar.defaultProps = {
  activeTab: 0
};
export default ActionBar;