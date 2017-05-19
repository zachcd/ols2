import api from 'koa-router'
import mongoose from 'mongoose'
import User from '../../../models/User'

const router = new api({ prefix: '/api/users' })

router.get('/', async(ctx, next) => {
  ctx.body = 'You have arrived at the user API!'
})

export default router
