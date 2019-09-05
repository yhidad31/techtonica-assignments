const router = require('express').Router();
let Events = require('../models/events.model');

router.route('/').get((req,res) => {
  Events.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('./add').post((req,res) =>{
  const eventName = req.body.eventName;
  const eventID = Number.parse(req.body.eventID);
  const eventTime = Date.parse(req.body.eventTime);

  const newEvents = new Events ({
    eventName,
    eventID,
    eventTime,
  });

  newEvents
    .save()
    .then(() => res.json('Event Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;