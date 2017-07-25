import * as http from 'http'
import koa from 'koa'
import api from 'koa-router'
import logger from 'koa-logger'
import body from 'koa-bodyparser'
import mongoose from 'mongoose'
import teamRouter from './api/teamRoutes'
import userRouter from './api/userRoutes'
import playerRouter from './api/playerRoutes'
import postRouter from './api/postRoutes'
import gameRouter from './api/gameRoutes'

const port = (process.env.PORT || 3200)
const db = mongoose.connect('mongodb://localhost/ols2')

const app = new koa()
  .use(body())
  .use(logger())

const router = new api()
router
  .get('/', (ctx) => ctx.body = {hello: 'world'})
  .get('/error/test', async () => {
    throw Error('Error handling works')
  })

app.use(router.routes())
app.use(router.allowedMethods())
app.use(teamRouter.routes())
app.use(teamRouter.allowedMethods())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(playerRouter.routes())
app.use(playerRouter.allowedMethods())
app.use(postRouter.routes())
app.use(postRouter.allowedMethods())
app.use(gameRouter.routes())
app.use(gameRouter.allowedMethods())

app.listen(port)
console.log('The magic happens on port ' + port)
console.log(`curl -i http://localhost:3200/api/games -d "name=test"`)
export default app
