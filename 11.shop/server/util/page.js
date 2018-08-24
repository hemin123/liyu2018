
// options={
// 	page:req.query.page,
// 	model:UserModel,
// 	show:


// }

let  page = (options)=>{

	return new Promise(resolve,reject)=>{
		let page = options.page;

		let limit = 2;

		// (page-1)*limite
		options.model.estimatedDocumentCount({})

		.then((count)=>{
			let pages = Math.ceil(count / limit);
			if(page > pages){
				page = pages;
			}
			let list = [];

			for(let i = 1;i<=pages;i++){
				list.push(i);
			}
			
			let skip = (page - 1)*limit;

			options.model.find({},options.show)
			.skip(skip)
			.limit(limit)
			.then((users)=>{
				
			})

		})
	}
}

module.exports = page;


