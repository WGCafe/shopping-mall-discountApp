import React from 'react'
import { AtTabBar, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro';

const BOTTOMLIST = [
  { title: '首页', iconPrefixClass: 'iconfont', iconType: 'home_light'},
  { title: '商场', iconPrefixClass: 'iconfont', iconType: 'mall_light'},
  { title: '店铺', iconPrefixClass: 'iconfont', iconType: 'shoplight'},
  { title: '我的', iconPrefixClass: 'iconfont', iconType: 'my_light'}
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
      iconSize={20}
    />
  );
};

ActionBar.defaultProps = {
  activeTab: 0
};
export default ActionBar;