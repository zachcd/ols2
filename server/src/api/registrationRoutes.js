import api from 'koa-router'
import mongoose from 'mongoose'
import User from '../../../models/User'

const router = new api({ prefix: '/api/register' })

router
  .get('/arrival', async(ctx, next) => {
    ctx.body = 'You have arrived at the user registration API!'
  })

  .post('/', async(ctx, next) => {
    console.log("POST : /api/register/")
    const body = ctx.request.body
    console.log("USERNAME: " + body.username)

    const user = new User({
      username: body.username,
      password: body.password,
      email: body.email
    })

    user.save(function (err) {
      if (err) console.log("error")
    })

    ctx.res.body = 'Success'
  })


export default router
