const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    phone: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    birthdate: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', userSchema)