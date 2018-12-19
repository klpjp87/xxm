var createError = require('http-errors');
var express = require('express');
import router from './routes/index.js'
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//jwt
var expressJWT = require('express-jwt')
var secretOrPrivatekey = 'teken' //加密token 检验时用

const redis = require('redis'); 
const {promisify} = require('util');

//const REDIS_PORT = process.env.REDIS_PORT;

import db from './mongodb/db.js';
const app = express();
//redis
const client = redis.createClient(6379,'127.0.0.1');
const getAsync = promisify(client.get).bind(client);
// client.set('key', 'value!', 'EX', 10);
// const s = async ()=>{
// 	let res = await getAsync('key');
// 	console.log(res)
// }
// client.auth(123456, function(){
// 	console.log(1)
// });
// client.set('key', 'value!', 'EX', 10);
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// client.hkeys("hash key", function (err, replies) {
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//跨域
app.all('*', (req, res, next) => {
	//res.header("Access-Control-Allow-Origin", req.headers.Origin || req.headers.origin || 'https://cangdu.org');
	res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});
app.use(cookieParser());
//token
//验证指定http请求的JsonWebTokens的有效性
//会将token信息存在req.user里
app.use(expressJWT({
	secret:secretOrPrivatekey
}).unless({
	path:['/init/token','/admin/login','/admin/register'] //除了这个地址
}))
app.use((err,req,res,next)=>{
	//res.status(401).send('invalid token...')
	res.send({status: 401,
		message:"未登录或者登陆超时...",})
})
//验证token刷新token
app.all('/*',async function(req, res, next){
	var url=req.path;
	if(url=='/init/token'||url=='/admin/login'||url=='/admin/register'){
        next();
        return;
	}
	//if(await client.get(req.user)){
		
	
	
	if(req.user || req.user.name){
		let user = await getAsync(req.user.name)
		if(user){
			// console.log(url,"user",user)
			// console.log(url,"req.user.name",req.user.name)
			client.set(req.user.name, JSON.stringify(req.user), 'EX', 100) 
		}
		next()
		return
	}
	res.send({status: 401,
		message:"未登录或者登陆超时...",})
})




router(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//首页
app.use(express.static('./public'));
module.exports = app;
exports.client = client
exports.getAsync = getAsync;
