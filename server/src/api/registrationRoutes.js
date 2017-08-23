import api from 'koa-router'
import mongoose from 'mongoose'
import User from '../../../models/User'

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
        email: body.email
      })

      let promise = await user.save();
      ctx.status = 201
      return {
        message: 'Success',
        username: body.username
      }

    } catch (err) {
      ctx.status = 409
      console.log('error:', err)
      if(err.message.includes("duplicate key")) {
        console.log('duplicate')
        return {
          error: 'duplicate'
        }
      }
      return {
        error: 'general'
      }
    }

  })


export default router
