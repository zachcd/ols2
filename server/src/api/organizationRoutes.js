import api from 'koa-router'
import mongoose from 'mongoose'
import Organization from '../../../models/Organization'

const router = new api({ prefix: '/api/organizations' })

router.get('/', async(ctx, next) => {

  Organization.count({}, (err, total)=> {
    if (total < 1) {
      let Pitt = new Organization({
        name: "LoL@Pitt",
        description: "University of Pittsburgh League of Legends Community",
        admins: [],
        tournaments: []
      })
      Pitt.save()
    }
  })

  try {
    console.log("made it here")

    let organization =  await Organization.find({}).select('-_id name description').exec()
    ctx.body = { message: "Success", data: organization}

  } catch (err) {
    ctx.status = 409
    console.log('error:', err)
    ctx.body =  {
      error: 'general'
    }
  }
})

export default router
