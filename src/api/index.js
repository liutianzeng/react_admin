/*
包含应用中所有

*/
import ajax from './ajax'
import jsonp from "jsonp"
// const Base="http://localhost:5000"
export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')
export const reqAddUser=(user)=>ajax('/manage/user/add',user,'POST');
export const reqWeather=(city)=>{
    return new Promise((resolve,reject)=>{
        const url='http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        jsonp(url,{},(err,data)=>{
            if(!err&&data.status==="success"){
                // console.log(data);
                const {dayPictureUrl,weather}=data.results[0].weather_data[0];
                resolve({dayPictureUrl,weather});
            }else{
                console.log(("获取天气信息失败"));
            }
        })
    })

}
