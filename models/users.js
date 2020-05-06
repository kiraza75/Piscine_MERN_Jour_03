var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: Number,
    login: {
      type: String,
      unique: true,
        min: 5,
        max: 20,
    },
   email: {
       type: String,
       unique: true,

   },
    password: String,
    type: Boolean
});

module.exports = mongoose.model('Users', UserSchema );