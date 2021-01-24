import {request} from "./request";

export function getAdmin(id,page,size){
    return request({
        url:'/comment/searchuser',
        params:{
            id,
            page,
            size
        }
    })
}

export function deleteSpeak(id){
    return request({
        url:'/comment/'+id,
        method:'delete'
    })
}

