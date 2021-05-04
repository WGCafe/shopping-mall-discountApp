import { getMenuButtonBoundingClientRect, getSystemInfoSync, setStorageSync } from "@tarojs/taro";

export const setNavigationBarHeight = () => {
  const { statusBarHeight, platform } = getSystemInfoSync();
    const { top, height } = getMenuButtonBoundingClientRect();

    // 状态栏高度
    setStorageSync('statusBarHeight', statusBarHeight)
    // 胶囊按钮高度 一般是32 如果获取不到就使用32
    setStorageSync('menuButtonHeight', height ? height : 32)
    
    // 判断胶囊按钮信息是否成功获取
    if (top && top !== 0 && height && height !== 0) {
      const navigationBarHeight = (top - statusBarHeight) * 2 + height
      // 导航栏高度
      setStorageSync('navigationBarHeight', navigationBarHeight)
    } else {
      setStorageSync(
        'navigationBarHeight',
        platform === 'android' ? 48 : 40
      )
    }
};