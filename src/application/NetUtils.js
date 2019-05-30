/*
 * @Date: 2019-05-28 18:02:51
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-28 18:23:08
 */

import React, { Component } from 'react'

export default class NetUtils extends Component {
  //构造函数,默认的props以及state都可以在这里初始化
  constructor(props) {
    super(props)
  }

  static async get(url, params, callback = null) {
    if (params) {
      let paramsArray = []
      //拼接参数
      Object.keys(params).forEach(key =>
        paramsArray.push(key + '=' + params[key])
      )
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&') //把数组中的所有元素放入一个字符串,中间用'&'分割
      } else {
        url += '&' + paramsArray.join('&')
      }
    }

    let request = {
      method: method,
      headers: {
        Authorization: TOKEN,
        platform: 'Android',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    return await fetch(url, request)
      .then(response => {
        response.json()
        console.log(response)
      })
      .then(responseJson => {
        return responseJson.data
      })
  }

  static async post(url, params, callback = null) {
    let request = {
      method: method,
      headers: {
        Authorization: TOKEN,
        platform: 'Android',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }

    return await fetch(url, request)
    .then(response => {
      response.json()
      console.log(response)
    })
    .then(responseJson => {
      return responseJson.data
    })
  }
}
