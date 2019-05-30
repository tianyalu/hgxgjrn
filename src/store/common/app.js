/*
 * @Date: 2019-05-21 09:14:18
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-21 09:14:18
 */
import {observable, action} from 'mobx'

class App {
    @observable barStyle = 'light-content'

    @action
    updateBarStyle = style => {
        this.barStyle = style
    }
}

export default new App()