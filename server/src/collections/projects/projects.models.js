const mongoose = require('mongoose')
const Schema = mongoose.Schema
const modelMapper = require('../../_helpers/model_mapper')
const schemaName = 'Project'

const projectSchema = new Schema({
  name: { type: String, trim: true },
  status: { type: String, trim: true }
})

//* * use  the model mapper for removing the _id and __v and all the password fileds */
modelMapper(projectSchema)

exports.project = mongoose.model(schemaName, projectSchema)
