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
  const newProject = new projectModel(projectData)
  return new Promise((resolve, reject) => {
    newProject
      .save()
      .then(addedProject => {
        console.log('the new project has been added ', addedProject)
        resolve(addedProject)
      })
      .catch(err => {
        console.log('we have the err for adding the new project ', err)
        reject(err)
      })
  })
}
