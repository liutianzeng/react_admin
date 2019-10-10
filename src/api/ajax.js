/*
能发送异步ajax请求的函数模块
封装axios库
函数返回值是promise对象
*/
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
    return new Promise((resolve,reject)=>{
        let promise;
        if (type === 'GET') {//发GET请求
            promise=axios.get(url, {
                params: data
            })
        } else {
            promise=axios.post(url, data)
        }
        promise.then(response=>{
            resolve(response.data);
        }).catch(err=>{
            // message.err(err.message);
        })
    })
}
