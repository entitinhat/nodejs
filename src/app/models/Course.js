const mongoose = require('mongoose')
const slug= require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

mongoose.plugin(slug)

const Schema = mongoose.Schema
const Course = new Schema ({
    name: { type: String, maxLength: 250, required: true},
    description: { type: String, maxLength: 600},
    videoID: { type: String, maxLength: 600, required: true},
    level: { type: String, maxLength: 600},
    image: { type: String, maxLength: 1000},
    slug: { type: String, unique: true},
}, {
    timestamps: true
})

Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',
 })

module.exports = mongoose.model('Course', Course)

