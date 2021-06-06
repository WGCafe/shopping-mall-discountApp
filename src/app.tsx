import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux';
import configStore from './store'

import 'taro-ui/dist/style/index.scss';
import './app.styl';

const store = configStore();

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
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App
