import { Component, useEffect } from 'react'
import Taro from '@tarojs/taro'

import 'taro-ui/dist/style/index.scss'
import './app.styl'

interface INavInfo {
  statusBarHeight: number
  titleBarHeight: number
  titelBarWidth: number
  appHeaderHeight: number
  marginSides: number
  capsuleWidth: number
  capsuleHeight:number
  capsuleLeft: number
  contentHeight: number
  screenHeight: number
  windowHeight: number
}

class App extends Component {

  componentDidMount () {
    Taro.setNavigationBarColor({
      frontColor: '#fff',
      backgroundColor: '#000',

      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    });
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
