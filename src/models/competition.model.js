const mongoose = require('mongoose')


const competitionSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  }
})


module.exports = mongoose.model('Compettition', competitionSchema)
