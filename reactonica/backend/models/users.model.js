const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: {type: String, required: true, unique: true, trim: true, minlength: 3},
  userEmail: {type: String, required: true, unique: true,trim: true, minlength: 3},
  userAge: {type: Number,required: true, unique: false,trim: true, minlength: 2},
  userID: {type: Number, required: true, unique: true,trim: true, minlength: 3},
}, {
timestamps: true,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;