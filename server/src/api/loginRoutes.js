import api from 'koa-router'
import mongoose from 'mongoose'
import User from '../../../models/User'
import uuidv4 from 'uuid/v4'

const router = new api({ prefix: '/api/login' })

router.post('/', async(ctx, next) => {
  try {
    console.log("POST : /api/login/")
    const body = ctx.request.body
    console.log("USERNAME: " + body.username)

    let query = User.findOneAndUpdate({username: body.username, password: body.password}, {token: uuidv4()})

    let userEntry = await query
    ctx.status = 201
    ctx.body = {
      message: 'Success',
      username: body.username,
      token: userEntry.token
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
