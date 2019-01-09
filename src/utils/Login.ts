/**
 * 主要用来处理用户登录控制，存储, 获取和删除session
 */
const KEY = 'USER'
export default {
  SetLoginState: (userInfo) => {
    window.sessionStorage.setItem(KEY, JSON.stringify(userInfo))
  },
  GetLoginState: () => {
    return window.sessionStorage.getItem(KEY)
  },
  DeleteLoginState: () => {
    return new Promise((resolve) => {
      window.sessionStorage.removeItem(KEY)
      resolve({ 'isDeleted': true })
    })
  }
}