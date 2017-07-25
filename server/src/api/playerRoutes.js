import api from 'koa-router'
import mongoose from 'mongoose'
import Player from '../../../models/Player'

const router = new api({ prefix: '/api/players' })

router
  .get('/', async(ctx, next) => {
    ctx.body = 'You have arrived at the player API!'
  })

export default router
