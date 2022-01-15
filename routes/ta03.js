//TA03 
// 01 Create a Node webpage that will read data from the following json: 'https://byui-cse.github.io/cse341-course/lesson03/items.json'.
// 02 - Display data in a professional manner.
// 03 - Incorporate a way to search through the data and only display associated search results.

const express = require('express');
const router = express.Router();

// 01 Create a Node webpage that will read data from the following json: 'https://byui-cse.github.io/cse341-course/lesson03/items.json'.
const request = require("request");
const jsonData = "https://byui-cse.github.io/cse341-course/lesson03/items.json";
var items = "";

request({
  url: jsonData,
  json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      items = body;
    }
});

console.log(items);

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    items: items,
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
