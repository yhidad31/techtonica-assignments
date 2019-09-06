const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').get((req,res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
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
  
  newUsers.save ()
  .then(() => res.json('User added!'))
  .catch(err => res.status (400).json ('Error: ' + err));
});
  
router.route('/:id').get((req, res) => {
  Users.findById(req.params.id)
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Users.findByIdAndDelete(req.params.id)
  .then(() => res.json('User deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Users.findById(req.params.id)
    .then(users => {
      users.userName = req.body.userName;
      users.userEmail = req.body.userEmail;
      users.userAge = Number(req.body.userAge);
      users.userID = Number(req.body.userID);
    
    users.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;