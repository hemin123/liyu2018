

import axios from 'axios';
// switch


export const request = (options)=>{
	return new Promise((resolve,reject)=>{
        const params ={
        	method:options.method||'get',
        	url:options.url||'',        	
        	withCredentials:true
        }
        switch(params.method.toUpperCase()){
        	case'GET':
        	params.params=options.data;
        	break;
        	default:
        	params.data=options.data;
        }
        
        axios(params)
		.then(result=>{
			let data = result.data;
			if(data.code == 10){
				removeUserName();
				 window.location.href = '/login';
				 reject(data.message);
				// resolve(data);
			}else{
				resolve(data);
			}
		})
		.catch(err=>{
			reject(err);
		})
	})
}

export const setUserName = (username)=>{
	window.localStorage.setItem('username',username)
}

export const getUserName = ()=>{
	return window.localStorage.getItem('username')
}

export const removeUserName = ()=>{
	window.localStorage.removeItem('username')
}





