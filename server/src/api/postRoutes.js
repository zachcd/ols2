import api from 'koa-router'
import mongoose from 'mongoose'
import Post from '../../../models/Post'

const router = new api({ prefix: '/api/posts' })

router.get('/', async(ctx, next) => {
  ctx.body = 'You have arrived at the post API!'
})

export default router
