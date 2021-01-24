import {request} from "./request";

export function getRemarkDrug(page,size){
    return request({
        url:'/purchase/search',
        params:{
            type:"remark",
            page,
            size
        }
    })
}

export function getNomarkDrug(page,size){
    return request({
        url:'/purchase/search',
        params:{
            type:"nomark",
            page,
            size
        }
    })
}

export function sendMessage(userid,drugid,message){
    let postData={
        userid:userid,
        drugid:drugid,
        message:message
    }
    return request({
        url:'/evaluate',
        method:'post',
        data:postData,
        contentType:'application/json'
    })
}

export function update(id){
    return request({
        url:'/purchase/update?id='+id,
        contentType:'application/json'
    })
}

export function deleteComment(id){
    return request({
        url:'/purchase/'+id,
        method:'delete'
    })
}