

import * as types   from './actionType.js'
import axios from 'axios';
import { message } from 'antd';
import {request,setUserName} from 'util';
import {ADMIN_COUNT } from 'api';


const setCountAction = (payload)=>{
  return{
    type:types.SET_COUNT,
    payload
  }
}

export const getCountAction=()=>{
	return (dispatch)=>{
		request({
      url:ADMIN_COUNT,

		})
 		.then((result)=>{
      if (result.code ==0) {
        console.log("result",result);
        dispatch(setCountAction(result.data))
      }else if(result.code==1){
        message.error("获取失败");
      }
    })  
    .catch((err)=>{
      console.log(err);
        message.error("网络错误");
       
    })
	}
       


}
      


