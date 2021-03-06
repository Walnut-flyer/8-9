import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'

const app = new Koa()
/**
 * 使用koa-compose集成中间件
*/
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty'}),
  helmet()
])

app.use(middleware)
app.use(router())

app.listen(3000)