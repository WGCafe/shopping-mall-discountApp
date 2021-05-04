import { Component } from 'react'
import useNavInfo from './components/useNavInfo';
import Taro from '@tarojs/taro'

import 'taro-ui/dist/style/index.scss'
import './app.styl'

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
