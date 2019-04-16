const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// middleware

app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts')
const tasks = require('./routes/api/tasks')

/** this is the setup for the mongoose connecion and we are going to use that */
const mongooseHelper = require('./src/_helpers/mongoose')
/** connect to the mlab using mongoose */
mongooseHelper.connect()

/** use the routing for the users */
const userRoutes = require('./src/collections/users/users.routes')
app.use('/api/users', userRoutes)

const projectRouters = require('./src/collections/projects/projects.routes')
app.use('/api/projects', projectRouters)

app.use('/api/posts', posts)
app.use('/api/tasks', tasks)

if (process.env.NODE_ENV === 'production') {
  // set our static folder
  app.use(express.static(__dirname + '/public'))

  // handle spa
  app.get(/.*/, (req, res) => res.sendFile(__dirname + 'public/index.html'))
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server start on port ${port}`))
