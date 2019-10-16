const mongoose = require('mongoose')

const servantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sclass: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  atk: {
    type: Number,
    required: true
  },
  hp: {
    type: Number,
    required: true
  },
  bond: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Servant', servantSchema)
