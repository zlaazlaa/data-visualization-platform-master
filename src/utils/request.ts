/**
 * @Date: 2023/5/18
 */
import axios from "axios"
import { ElMessage } from "element-plus"
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
    timeout: 30000,// request timeout
    withCredentials:true
})
// 请求拦截
service.interceptors.request.use(
    (config: any) => {

        return config
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    (response: any) => {
        const res = response.data
        if (res.code !== 1 || res.code !== 200) {
            return response.data
        } else {
            return response.data
        }
    },
    (error: any) => {
        if (error.response) {
            switch (error.response.status) {
                case 500:
                    ElMessage.error('服务器出错了，请联系管理员！')
                    break
                default:
                    ElMessage.error('网络出现问题！')
                    return Promise.reject(error)
            }
        }
    }
)

export default service
