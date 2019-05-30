/*
 * @Date: 2019-05-28 15:47:07
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-28 15:59:57
 */
import React from 'react'
import {View, AppRegistry} from 'react-native'
import {Provider} from 'mobx-react/native'
import stores from './src/store'
import App from './src'
import {name as appName} from './app.json'

export default class Root extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Provider {...stores}>
                    <App />
                </Provider>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => Root)