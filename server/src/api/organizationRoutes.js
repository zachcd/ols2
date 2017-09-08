import api from 'koa-router'
import mongoose from 'mongoose'
import Organization from '../../../models/Organization'
import Tournament from '../../../models/Tournament'

const router = new api({prefix: '/api/organizations'})

router.get('/', async(ctx, next) => {

  Organization.count({}, (err, total) => {
    if (total < 1) {
      let Pitt = new Organization({name: "LoL@Pitt", description: "University of Pittsburgh League of Legends Community", url: "pitt", admins: [], tournaments: []})
      Pitt.save()
    }
  })

  try {

    let organization = await Organization.find({}).select('-_id name description url').exec()
    ctx.body = {
      message: "Success",
      data: organization
    }

  } catch (err) {
    ctx.status = 409
    console.log('error:', err)
    ctx.body = {
      error: 'general'
    }
  }
})

router.get('orgDetails', '/:organization', async(ctx, next) => {
  try {

    let organization = await Organization.findOne({url: ctx.params.organization}).select('-_id name description url tournaments').exec()
    ctx.body = {
      message: "Success",
      data: organization
    }

  } catch (err) {
    ctx.status = 409
    console.log('error:', err)
    ctx.body = {
      error: 'general'
    }
  }

})

export default router
