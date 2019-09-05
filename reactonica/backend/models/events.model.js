const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  eventName: {type: String, required: true, unique: true, trim: true, minlength: 3},
  eventID: {type: Number, required: true, unique: true, trim: true, minlength: 3},
  eventTime: {type: Date, required: true, unique: false, trim: true, minlength: 2},
  // eventID: {type: String, required: true, unique: true,trim: true, minlength: 3},
}, {
timestamps: true,
});
const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;