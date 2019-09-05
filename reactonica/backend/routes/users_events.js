const router = require('express').Router();
let Usersevents = require('../models/users_events.model');

router.route('/').get((req,res) => {
  Usersevents.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('./add').post((req,res) =>{
  const eventID = Number(req.body.eventID);
  const userID = Number(req.body.userID);

  const newUsersevents = new Events ({
    eventID,
    userID,
  });

  newUsersevents
    .save()
    .then(() => res.json('Event Added to Account!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;