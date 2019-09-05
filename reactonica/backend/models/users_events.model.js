const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userseventsSchema = new Schema({
  eventID: {type: String, required: true, unique: true, trim: true, minlength: 3},
  userID: {type: String,required: true, unique: false,trim: true, minlength: 2},
 
  // eventID: {type: String, required: true, unique: true,trim: true, minlength: 3},
}, {
timestamps: true,
});
const UsersEvents = mongoose.model('UsersEvents', userseventsSchema);

module.exports = UsersEvents;