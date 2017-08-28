import api from 'koa-router'
import mongoose from 'mongoose'
import Organization from '../../../models/Organization'

const router = new api({ prefix: '/api/organizations' })

router.get('/', async(ctx, next) => {
  console.log(ctx)
  ctx.body = {
    organizations: {

    }
  }
})

export default router
