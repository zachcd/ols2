import api from 'koa-router'
import mongoose from 'mongoose'
import Organization from '../../../models/Organization'

const router = new api({ prefix: '/api/organizations' })

router.get('/', async(ctx, next) => {
  try {

    ctx.status = 201

    Organization.find({}, (organization)=> {
      ctx.body = {
        data: organization
      }
    })

  } catch (err) {
    ctx.status = 409
    console.log('error:', err)
    ctx.body =  {
      error: 'general'
    }
  }
})

export default router
