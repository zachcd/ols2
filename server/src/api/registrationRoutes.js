import api from 'koa-router'
import mongoose from 'mongoose'
import User from '../../../models/User'
import uuidv4 from 'uuid/v4'

const router = new api({ prefix: '/api/register' })

router
  .get('/arrival', async(ctx, next) => {
    ctx.body = 'You have arrived at the user registration API!'
  })

  .post('/', async(ctx, next) => {
    try {

      console.log("POST : /api/register/")
      const body = ctx.request.body
      console.log("USERNAME: " + body.username)

      const user = new User({
        username: body.username,
        password: body.password,
        email: body.email,
        token: uuidv4()
      })

      let promise = await user.save();
      ctx.status = 201
      ctx.body = {
        message: 'Success',
        username: body.username,
        token: user.token,
      }

    } catch (err) {
      ctx.status = 409
      console.log('error:', err)
      if(err.message.includes("duplicate key")) {
        console.log('duplicate')
        ctx.body =  {
          error: 'duplicate'
        }
      }
      ctx.body =  {
        error: 'general'
      }
    }

  })


export default router
