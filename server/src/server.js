import * as http from 'http'
import koa from 'koa'
import logger from 'koa-logger'
import co from 'co'

const app = new koa()

app.use(logger())




app.listen( process.env.PORT || 3200)
