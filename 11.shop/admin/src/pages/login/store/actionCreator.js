

import * as types   from './actionType.js'
import axios from 'axios';
import { message } from 'antd';

import {request,setUserName} from 'util';
import {ADMIN_LOGIN } from 'api';

/*const getloginRequestAction = ()=>{
	return {
		type:types.LOGIN_REQUEST
	}
}
const getloginDoneAction = ()=>{
	return {
		type:types.LOGIN_DONE
	}
}*/

export const getLoginAction=(values)=>{
	return (dispatch)=>{
		dispatch(getloginRequestAction())
		request({
			method:'post',
			url:ADMIN_LOGIN,
			data:values
		})
 		.then((result)=>{
        console.log(result);
        if (result.code==0) {
          setUserName(result.data.username);
          window.location.href='/';
          console.log(result.data);
       
        }else if(result.code==10){
        
         message.error(result.message);
        }
         /*this.setState({
            isFetching:true
          })*/
          dispatch(getloginDoneAction())
    })  
    .catch((err)=>{
      console.log(err);
        message.error("网络错误");
        /*this.setState({
            isFetching:true
          })*/
         dispatch(getloginDoneAction())

    })
	}
       


}
      


