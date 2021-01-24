import {request} from "./request";

export function getHomeDrugs(page,size){
    return request({
        url:'/drug/find',
        params:{
            page,
            size
        }
    })
}


