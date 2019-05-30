/*
 * @Date: 2019-05-22 17:43:51
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-30 11:56:52
 */
import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react/native'
import Home from './home/Home'
import TabBar from '../components/TabBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NetUtils from '../application/NetUtils'

const tabTitles= ['实时', '经营管理', '订货', '我']
const tabIcons = [
  require('../resource/img/ic_main_false.png'),
  require('../resource/img/ic_report_false.png'),
  require('../resource/img/ic_order_false.png'),
  require('../resource/img/ic_mine_false.png')
]

const tabSelectedIcon = [
  require('../resource/img/ic_main_true.png'),
  require('../resource/img/ic_report_true.png'),
  require('../resource/img/ic_order_true.png'),
  require('../resource/img/ic_mine_true.png')
]

@inject('app')
@observer
export default class TabBarView extends PureComponent{
  onChangeTab = ({i}) => {
    const {app} = this.props
    if ( i=== 1) {
      app.updateBarStyle('default')
    }else {
      app.updateBarStyle('light-content')
    }
  }

  renderTabBar = () => {
    return (
      <TabBar
        tabNames={tabTitles}
        tabIconNames={tabIcons}
        selectedTabIconNames={tabSelectedIcon}
      />
    )
  }

  componentWillMount() {
    NetUtils.get('/api/VideoArchive/get-home-page-video', {FK_store_gid: 1030}, null)
    .then(
      data => {
        console.warn('success: ', data)
      }
    )
  }

  render() {
    return (
      <ScrollableTabView
        locked
        scrollWithoutAnimation
        renderTabBar={this.renderTabBar}
        tabBarPosition='bottom'
        onChangeTab={this.onChangeTab}>
        <Home tabLabel="Home1" navigator={this.props.navigator}/>
        <Home tabLabel="Home2" navigator={this.props.navigator}/>
        <Home tabLabel="Home3" navigator={this.props.navigator}/>
        <Home tabLabel="Home4" navigator={this.props.navigator}/>
      </ScrollableTabView>
    )
  }
}