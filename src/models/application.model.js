const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    nomination: {
        type: String,
        require: true
    },
    agecategory: {
        type: String,
        require: true
    },
    teacherName: {
        type: String,
        require: true
    },
    teacherEmail: {
        type: String,
        require: true
    },
    teacherPhone: {
        type: Number,
        require: true
    },
    teacherLink: {
        type: String,
        require: true
    },
    userlink: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    index: {
        type: Number,
        require: true
    },
    region: {
        type: String,
        require: true
    },
    adress: {
        type: String,
        require: true
    },
    educationPlace: {
        type: String,
        require: true
    },
    workLink: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Application', applicationSchema)
