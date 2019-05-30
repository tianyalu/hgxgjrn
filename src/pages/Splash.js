/*
 * @Date: 2019-05-21 09:14:18
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-28 16:12:05
 */
import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount() {
        const { navigator } = this.props
        this.timer = setTimeout(() => {
            navigator.resetTo({id: 'TabBarView'})
        }, 200)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            <Image
                style={{width: gScreen.width, height: gScreen.height}}
                source={require('../resource/img/guide.png')}
            />
        )
    }
}