import * as http from 'http'
import koa from 'koa'
import api from 'koa-router'
import logger from 'koa-logger'
import body from 'koa-body'
import co from 'co'

const port = (process.env.PORT || 3200)

const app = new koa()
const router = new api()

router.get('/api', ctx => {
  ctx.body = "You've reached /api!"
})

app.use(logger())
app.use(router.routes())
app.listen(port)
console.log('The magic happens on port ' + port)
