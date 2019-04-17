const projectModel = require('./projects.models').project

exports.findAllProject = async projectData => {
  return new Promise((resolve, reject) => {
    projectModel
      .find(projectData)
      .then(projects => {
        resolve(projects)
      })
      .catch(err => {
        reject(err)
      })
  })
}

exports.addProject = async projectData => {
  const project = await addProjectContrller()
  console.log('this is he project ', project)
  return project
  function addProjectContrller () {
    return new Promise((resolve, reject) => {
      const newProject = new projectModel(projectData)
      newProject
        .save()
        .catch(err => {
          console.log('we have the err for adding the new project ', err)
          reject(err)
        })
        .then(newProject => {
          console.log('the new project has been added ', newProject)
          return newProject
        })
    })
  }
}
