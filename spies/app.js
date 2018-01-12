var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  //Check if email exists
  //Save user to the db
  db.saveUser({email, password})
  //Send the welcome email
};
