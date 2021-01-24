import axios from 'axios'

export function request(config){
    const instance=axios.create({
        // baseURL:'https://www.cauliflowerlucky.com:8080/drug/api',
        // baseURL:'/api',
        baseURL:'http://172.81.245.195:8084/myapi/drug/api',//服务器配置
        // baseURL:'/myapi/drug/api',
        timeout:50000
    })

    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })

    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })

    return instance(config)
}