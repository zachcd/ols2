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
import loginRouter from './api/loginRoutes'
import registrationRouter from './api/registrationRoutes'
import organizationRouter from './api/organizationRoutes'
import cors from 'koa-cors'
import Organization from '../../models/Organization'

const port = (process.env.PORT || 3200)
const option = {
  useMongoClient: true
}
mongoose.Promise = global.Promise

const db = mongoose.connect('mongodb://localhost/ols2', option)

const app = new koa()
  .use(body())
  .use(logger())
  .use(cors())

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
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())
app.use(registrationRouter.routes())
app.use(registrationRouter.allowedMethods())
app.use(organizationRouter.routes())
app.use(organizationRouter.allowedMethods())

Organization.count({}, (total)=> {
  if (total < 1) {
    let Pitt = new Organization({
      name: "LoL@Pitt",
      description: "University of Pittsburgh League of Legends Community",
      admins: [],
      owner: {},
      tournaments: []
    })
    Pitt.save()
  }
})

app.listen(port)
console.log('The magic happens on port ' + port)
export default app
