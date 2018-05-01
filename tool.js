
function animation(obj,opation,isLinear,end){

			clearInterval(obj.timer);
			var iSpeed = 0;
		// 都执行完再关闭定时器。
		// 如果有没执行完的就不关闭
		//宽高同时变，在一个定时器里面执行
			obj.timer = setInterval(function(){
				var isstopall=true;
			for(attr in opation){
				var curr = parseFloat(getComputedStyle(obj,false)[attr]);
				var isStop = false;
				if(attr == 'opacity'){
					curr = Math.round(curr*100)
				}
				
				if(isLinear){
					if(curr > opation[attr]){
						iSpeed = -20;
					}else{
						iSpeed = 20;
					}
					if(Math.abs(opation[attr] - curr) <= Math.abs(iSpeed)){
						isStop = true;
					}else{
						isstopall=false;
					}					
				}else{
					iSpeed = (opation[attr] - curr)/10;
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
					if(!iSpeed){
						isStop = true;
					}else{
						isstopall=false;
					}
				}
				if(isStop){
					// clearInterval(obj.timer)
					if(isLinear){
						if(attr == 'opacity'){
							obj.style[attr] = opation[attr] / 100;
						}else{
							obj.style[attr] = opation[attr] + 'px';	
						}		
					}
				
				}else{
					if(attr == 'opacity'){
						obj.style[attr] = (curr + iSpeed)/100 ;
					}else{
						obj.style[attr] = curr + iSpeed + 'px';
					}
				}

			}	
			if (isstopall) {
					clearInterval(obj.timer);
					if (end) {
					end();
					}
				}
			},30)
		
		}