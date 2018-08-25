

import * as types   from './actionType.js'
import axios from 'axios';

import {request,setUserName} from 'util';
import {ADMIN_COUNT } from 'api';


const setCountAction = ()=>{
  return{
    type:types.SET_COUNT
  }
}

export const getCountAction=()=>{
	return ()=>{
		request({
      url:ADMIN_COUNT,

		})
 		.then((result)=>{
      if (result.code ==0) {
        console.log(result);
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
      


