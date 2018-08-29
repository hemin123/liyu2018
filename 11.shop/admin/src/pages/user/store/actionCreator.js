

import * as types   from './actionType.js'
import axios from 'axios';
import { message } from 'antd';
import {request  } from 'util';
import {GET_USER } from 'api';



const getPageDoneAction = ()=>{
  return{
    type:types.PAGE_DONE

  }
}
const getPageRequstAction = ()=>{
  return{
    type:types.PAGE_REQUEST

  }
}
const getSetPageAction = (payload)=>{
  return{
    type:types.SET_PAGE,
    payload

  }
}

export const getPageAction=(page)=>{
	return (dispatch)=>{
    dispatch(getPageRequstAction())
		request({
      method:'get',
      url:GET_USER,
      data:{
        page:page
      }

		})
 		.then((result)=>{  
    if (result.code==0) {

        dispatch(getsetpageAction(result.data));
        console.log("result",result);
      }  else{
        message.error('err')
      } 
      dispatch(getPageDoneAction()) 
    })  
    .catch((err)=>{
      console.log(err);
        message.error("网络错误user");
       
    })
	}
       


}
      


