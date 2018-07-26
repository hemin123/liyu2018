const http = require('http');
// http.createServer([options][, requestListener])
const url=require('url');
const querystring=require('querystring');

const server =http.createServer((req,res)=>{
console.log(req.url);
	
	// const myurl = new url.parse(req.url);
	// console.log(querystring.parse(myurl));

	const myurl = new url.parse(req.url,true);
	console.log(myurl.query);
	const query = myurl.query;
	console.log(query.name);
	res.end('end');

// Class: URLSearchParams
// url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
})