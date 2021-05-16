import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtIndexes, AtTabs, AtTabsPane } from 'taro-ui';

import {CITY, AREA} from './constants';
import UseNavInfo from '../../components/useNavInfo';

const Index = () => {
  const { statusBarHeight, appHeaderHeight, marginSides } = UseNavInfo();
  const [tab, setTab] = useState(0);
  const [tabList, setTabList] = useState([
    {title: '市'},
    {title: '区'},
  ]);
  const [areas, setAreas] = useState(null);

  const onChangeTab = val => {
    setTab(val);
    setAreas(null);
  };

  return (
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
      <AtTabs current={tab} tabList={tabList} onClick={onChangeTab}>
        <AtTabsPane current={tab} index={0} >
          <View style='height:100vh'>
            <AtIndexes list={CITY} onClick={item => {
              const {name, provinceCode} = item;

              setTabList([
                {
                  title: name
                },
                tabList[1]
              ]);
              setTab(1);
              const newArea = [];
              
              AREA.filter(({items}) => items.find(it => it.provinceCode === provinceCode)).forEach(({items, key, title}, index) => {
                const match = items.filter(it => it.provinceCode === provinceCode);

                newArea[index] = {
                  key,
                  title,
                  items: match
                }
              });
              setAreas(newArea);
            }}
            />
          </View>
        </AtTabsPane>
        <AtTabsPane current={tab} index={1}>
          {
            areas && (
              <View style='height:90vh'>
                <AtIndexes list={areas} />
              </View>
            )
          }
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}

Index.defaultProps = {
};
export default Index;