import api from 'koa-router'
import mongoose from 'mongoose'
import Team from '../../../models/Team'

const router = new api({ prefix: '/api/teams' })

router.get('/', async(ctx, next) => {
  ctx.body = 'You have arrived at the team API!'
})

export default router
