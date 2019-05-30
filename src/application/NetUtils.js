/*
 * @Date: 2019-05-28 18:02:51
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-30 11:56:29
 */

import React, { Component } from 'react'
const BASE_URL = "http://120.76.220.105:500"
const TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI4LCJpc3MiOiJodHRwOi8vMTIwLjc2LjIyMC4xMDU6NTEyL2FwaS9BdXRoL3VzZXJDaGVjayIsImlhdCI6MTU0ODMxOTQyMiwiZXhwIjoxNjAwMTU5NDIyLCJuYmYiOjE1NDgzMTk0MjIsImp0aSI6IlFUd05XbEJFTHM4c0F1dFUifQ.oqWLgV9sBQUie8APsSUzQSmDilc_O8xoCS_XystGwRU'

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
      method: 'GET',
      headers: {
        Authorization: TOKEN,
        platform: 'Android-1.0.0',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    return await fetch(BASE_URL + url, request)
      .then(response => response.json())
      // .then(responseJson => {
      //   console.warn(JSON.stringify(responseJson.data))
      //   return responseJson.data
      // })
  }

  static async post(url, params, callback = null) {
    let request = {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
        platform: 'Android-1.0.0',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }

    return await fetch(BASE_URL + url, request)
      .then(response => {
        response.json()
        console.log(response)
      })
      .then(responseJson => {
        return responseJson.data
      })
  }
}
