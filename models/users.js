const Mongoose = require('mongoose');

var UserSchema = new Mongoose.model("users",{
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

});