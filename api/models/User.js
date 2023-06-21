const mongoose = require('mongoose');
//const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
const User=new UserModel({
  name:"sim",
  email:'abc@yah.com',
  password:123

})
User.save();