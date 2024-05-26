// 请求工具 axios配置  请求封装
// 导入axios
// { type Method } 是从 Axios 中导入 Method 类型，并定义为常量类型。
import { AxiosError } from 'axios'
import { type Method } from 'axios'
import axios from 'axios'
import { useUserstore } from '../stores'
import router from '../router'
const instance = axios.create({
  // 1.基础地址，超时时间r
  baseURL: 'http://192.168.0.233:8088',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    //2. 携带token
    // 在这个useUesrstore仓库拿出token
    const store = useUserstore()
    // store.user?.token 判断 store.user 对象是否存在且具有 token 属性，即判断用户令牌是否存在。
    // config.headers 判断请求配置对象中的 headers 属性是否存在，以确保可以设置请求头部信息。
    // 如果用户令牌存在且请求配置对象的 headers 属性存在，就会执行下面的语句：
    // config.headers.Authorization = Bearer ${store.user.token}`` 将用户令牌添加到请求头部的 Authorization 字段中，使用 Bearer 认证方式
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
),
  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      //3. 处理业务失败
      if (res.data.code !== 200) {
        // 错误提示
        alert(res.data.Message || '业务失败')
        // 返回错误的promis
        return Promise.reject(res.data)
        // 传入code 将来catch的时候可以使用
      }

      //4. 摘取核心响应数据
      return res.data.data
    },

    (err: AxiosError) => {
      //5. 处理401错误
      if (err.response?.status === 401) {
        // 清除本地的用户信息
        const store = useUserstore()
        store.delUser()
        // 跳转到登陆页面.携带当前访问页面的地址（包含参数）
        router.push({
          path: '/login',
          query: { returnUrl: router.currentRoute.value.fullPath }
        })
      }

      return Promise.reject(err)
    }
  )
type Data<T> = {
  code: number
  massage: string
  data: T
}
// 参数；地址，请求方式   提交的的数据
const request = <T>(url: string, method: Method = 'GET', submitData?: object): Promise<T> => {
  // 返回：promise，提交
  return instance.request({
    url,
    method,
    [method.toUpperCase() === 'GTE' ? 'params' : 'data']: submitData
  })
}

export default request
