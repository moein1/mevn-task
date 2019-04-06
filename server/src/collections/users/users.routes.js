const express = require('express')
const sanitize = require('mongo-sanitize')
const router = express.Router()

const responseHeloper = require('../../_helpers/responseHelper')
const userController = require('./users.controller')

router.get('/', async (req, res) => {
  const users = await userController.findAllUser(req.query).catch(err => {
    const message = err.message || 'Internal server error'
    const code = err.code

    /** reject the promise */
    return responseHeloper.sendError(res, code, message)
  })

  /** if we get here without the error we need to send back the response to the user */

  return responseHeloper.sendJson(res, { status: true, users: users })
})

/** this is for login and we recieve the email and password and we need to compaere the
 * user and password and pass the proper message
 */
router.post('/login', async (req, res) => {
  console.log('this is the login ', req.body)
  const user = await userController.login(req.body).catch(err => {
    console.log('this is the error ', err)
    // return responseHeloper.sendError(res, 400, err)
    return res.sendJson('this is the error ', err)
  })

  responseHeloper.sendJson(res, { status: true, user: user })
})

router.post('/', async (req, res) => {
  console.log('this is new user user ', req.body)
  const user = await userController.creatUser(req.body).catch(err => {
    return responseHeloper.sendError(res, err.code, err.message)
  })
  console.log('this is the user that has been added ', user)
  /** if we get here we need to pass the user data back to the client */
  return responseHeloper.sendJson(res, { status: true, user: user })
})

module.exports = router
