// @author 谷中仁
import HttpClient from '@utils/HttpClient'

const defaultLoginParams = {
  username: 'admin',
  password: 'admin'
}
export function Login(url = `api/login`, params = defaultLoginParams) {
  return HttpClient.post(url, params)
}