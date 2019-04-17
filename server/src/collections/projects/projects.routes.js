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

router.post(
  '/',
  asyncMiddleware(async (req, res) => {
    const project = await projectController
      .addProject(req.body)
      .catch(err => {
        return responseHelper.sendError(res, 400, err)
      })
      .then(response => {
        console.log('this is the response for adding the new project', response)
      })
    console.log('we are here added new projet ', project)
    return responseHelper.sendJson(res, { project: project, status: 200 })
  })
)
module.exports = router
