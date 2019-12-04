/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
import config from "@/config/index.js"

// 6、用户名密码登陆
export const reqregister = ({name, pwd, captcha}) => ajax(config.weburl+'/user/register?', {password, registerCode, username}, 'POST')



