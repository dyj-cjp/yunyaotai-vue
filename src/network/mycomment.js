import {request} from "./request";

export function allComment(id,page,size){
    return request({
        url:'/evaluate/findevaluate',
        params:{
            id,
            page,
            size
        }
    })
}

export function deleteComment(id){
    return request({
        url:'evaluate/'+id,
        method:'delete'
    })
}


