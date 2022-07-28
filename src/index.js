const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
var compress = require('koa-compress');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');
const requestHandler = require('./middleware/RequestHandler');
const responseHandler = require('./middleware/ResponseHandler');

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}))
app.use(bodyParser());
app.use(json());
app.use(compress());

app.use(requestHandler);
app.use(responseHandler);

app.use(routes());//注册路由

let port = process.env.PORT || 3030;
app.listen(port);