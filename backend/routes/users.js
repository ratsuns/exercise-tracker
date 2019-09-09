//uses the express router
const router = require('express').Router();
//uses from mongoose to our schema DB
let User = require('../models/user.model');

//GET is a mongoose method that gets the information from the ATLAS database
router.route('/').get((req, res) => {
  //.find is a find methed that returns a promise in the JSON format from the ATLAS DAtabase.
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Post to JSON in Atlas DB
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
