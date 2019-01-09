
import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import * as Login from '@utils/Login'
// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
  Object.keys(o).map(key => {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  })
  return o
}
/**
 *
 *
 * @param {String} method Ajax请求类型 'POST'|'PUT'|'GET'|'DELETE'
 * @param {String} url 请求地址
 * @param {Object} params  参数
 * @returns Promise<T>
 */
function apiAxios(method, url, params) {
  if (params) {
    params = filterNull(params)
  }
  return new Promise((resolve, reject) => {
    if (!Login.default.GetLoginState()) {
      // window.location.href = './index.html'
    }
    loadProgressBar()
    // axios.defaults.headers.common.Authorization = 'AUTH_TOKEN'
    axios({
      method,
      url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' || method === 'PATCH' ? params : null,
      withCredentials: false
    })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data
          if (data.code === '200') {
            data.data ? resolve(data.data) : resolve(true)
          } else {
            // console.error('服务器状态不对', data)
            reject('服务器状态不对')
            // window.location.href = '#/login'
          }
        } else {
          // console.log('Axios返回状态不对，查看请求处理过程．．．．')
          reject('Axios返回状态不对，查看请求处理过程．．．．')
        }
      }, err => {
        reject(err)
        window.location.href = '#/login'
      })
      .catch((err) => {
        const errInfo = { 'err': err.response }
        reject(errInfo)
      })
  })
}
export default {
  get: (url, params) => {
    return apiAxios('GET', url, params)
  },
  post: (url, params) => {
    return apiAxios('POST', url, params)
  },
  put: (url, params) => {
    return apiAxios('PUT', url, params)
  },
  delete: (url, params) => {
    return apiAxios('DELETE', url, params)
  },
  patch: (url, params) => {
    return apiAxios('PATCH', url, params)
  }
}
