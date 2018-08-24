
/*
options = {
	page: //需要显示的页码
	model: //操作的数据模型
	query: //查询条件
	projection: //投影，
	sort: //排序
}
*/

let pagination = (options)=>{

	return new Promise((resolve,reject)=>{
		//需要显示的页码
		
		let page = 1;

		if(!isNaN(parseInt(options.page))){//isNaN判断是是不是数字
			page = parseInt(options.page);
		}

		if(page <= 0){
			page = 1;
		}

		//每页显示条数
		let limit = 2;


		options.model.estimatedDocumentCount(options.query)
		.then((count)=>{
			let pages = Math.ceil(count / limit);
			if(page > pages){
				page = pages;
			}
			if(pages == 0){
				page = 1;
			}
			let list = [];

			for(let i = 1;i<=pages;i++){
				list.push(i);
			}

			let skip = (page - 1)*limit;

			options.model.find(options.query,options.projection)
			.sort(options.sort)
			.skip(skip)
			.limit(limit)
			.then((docs)=>{
				resolve({
					docs:docs,
					page:page*1,
					list:list,
					pages:pages
				})		
			})
		})
	});
}

module.exports = pagination;