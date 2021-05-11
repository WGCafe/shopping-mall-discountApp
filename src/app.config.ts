export default {
  pages: [
    'pages/index/index',
    'pages/account/index',
    'pages/collect/index',
    'pages/coupon/index',
    'pages/help/index',
    'pages/shoppingMalls/index',
    'pages/stores/index',
    'pages/storeOrMallDetail/index',
    'pages/shoppingMalls/search/index',
    'pages/stores/search/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#8785a2',
    selectedColor: '#ffc7c7',
    borderStyle: 'white',
    list: [{
      pagePath: `pages/index/index`,
      iconPath: './icons/tab_home_light.png',
      selectedIconPath: './icons/tab_home_fill.png',
      text: '首页'
    }, {
      pagePath: `pages/shoppingMalls/index`,
      iconPath: './icons/tab_mall_light.png',
      selectedIconPath: './icons/tab_mall_fill.png',
      text: '商城'
    }, {
      pagePath: `pages/stores/index`,
      iconPath: './icons/tab_shop_light.png',
      selectedIconPath: './icons/tab_shop_fill.png',
      text: '店铺'
    }, {
      pagePath: `pages/account/index`,
      iconPath: './icons/tab_my_light.png',
      selectedIconPath: './icons/tab_my_fill.png',
      text: '我的'
    }],
    custom: false
  }
}