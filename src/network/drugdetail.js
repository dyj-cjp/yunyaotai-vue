import {request} from './request'
import qs from 'qs'

export function getDrugDetail(id){
    return request({
        url:'/drug',
        params:{
            id
        }
    })
}

export function getDrugComment(id,page,size){
    return request({
        url:'/evaluate/findevaluatebydrugid',
        params:{
            id,
            page,
            size
        }
    })
}

export function addBuyDrug(userid,drugid){
    let postData={
        userid:userid,
        drugid:drugid,
    }
    return request({
        url:'/purchase',
        method:'post',
        data:postData,
        contentType:'application/json'
    })
}