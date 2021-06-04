const mongoose = require('mongoose')


const competitionSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
})


module.exports = mongoose.model('Competition', competitionSchema)
