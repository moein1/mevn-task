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
  return new Promise((resolve, reject) => {
    var newProject = new projectModel(projectData)
    newProject
      .save()
      .catch(err => {
        reject(err)
      })
      .then(newProject => {
        resolve(newProject)
      })
  })
}
