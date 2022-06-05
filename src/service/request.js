import axios from 'axios';

import {BASE_URL, TIMEOUT} from './config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
});

instance.interceptors.request.use(config =>{
    //1.发送网络请求时，界面中间显示loading
    //2.某一些请求要携带token，如果没有携带，就跳转到登录界面
    //3.params/data序列化的操作
    return config
},err=>{

});

export default instance;

