import {request} from './request'

// export function getAllAdmin(page,size){
//     return request({
//         url:'/admin',
//         method:'get',
//         params:{
//             page,
//             size
//         }
//     })
// }

export function sendMessage(userId,adminId,message){
    let postData={
        userId,
        adminId,
        message
    }
    return request({
        url:'/comment',
        method:'post',
        data:postData
    })
}