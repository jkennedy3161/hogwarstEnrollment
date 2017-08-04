const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let HouseSchema = new Schema({
  name: String,

  size: Number,
  emblem: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('house', HouseSchema);