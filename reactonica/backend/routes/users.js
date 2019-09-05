const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').get((req,res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) =>{
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userAge = Number(req.body.userAge);
  const userID = Number(req.body.userID);

  const newUsers = new Users ({
    userName,
    userEmail,
    userAge,
    userID,
  });
  newUsers
  .save ()
  .then(() => res.json('User added!'))
  .catch(err => res.status (400).json ('Error: ' + err));
});
module.exports = router;