//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!

// Instructions:
// 1a. Modify the ta02.ejs page to display a form with method POST and action "/ta02/addUser". 
// 1b. Also create a section of the ejs file that will loop through an array of at least 3 names sent over via the render method.
// 2. Using the “/addUser” POST path, render push the new username from the form submission into the existing user array, and then redirect to "/ta02/" to display the modified array.
// 3. Create another form, but this time using a new "/removeUser" endpoint that removes a specified name from the array.
// 4. Display an error message if a username is not found for removal.
// 5. Prevent duplicate insertions and display an error message.
const express = require('express');
const router = express.Router();

// 1a. Modify the ta02.ejs page to display a form with method POST and action "/ta02/addUser". 
// 1b. Also create a section of the ejs file that will loop through an array of at least 3 names sent over via the render method.
const users = ['Bermon', 'Fulgence', 'Zarry', 'Felipe', 'Adam'];

// 2. Using the “/addUser” POST path, render push the new username from the form submission into the existing user array, and then redirect to "/ta02/" to display the modified array.
router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  userArray.push(newUser);
  res.redirect('/ta02/');
});

// 3. Create another form, but this time using a new "/removeUser" endpoint that removes a specified name from the array.
// For requirement 03 of TA02
router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const index = userArray.indexOf(removeUser);

  if (index !== -1) {
    users.splice(index, 1); // Built-in JS method for arrays. Let's you change the content of your array by removing or replacing existing elements with new ones
  }

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages', {
    users: users,
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
