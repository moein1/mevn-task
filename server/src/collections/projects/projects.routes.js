const express = require('express')
const router = express.Router()
const projectController = require('./projects.controller')

const responseHelper = require('../../_helpers/responseHelper')
const asyncMiddleware = require('../../_helpers/async_router_middleware')

router.get(
  '/',
  asyncMiddleware(async (req, res) => {
    const projects = await projectController
      .findAllProject(req.body)
      .catch(err => {
        return responseHelper.sendError(res, 400, err)
      })

    return responseHelper.sendJson(res, { projects: projects, status: 200 })
  })
)
module.exports = router
