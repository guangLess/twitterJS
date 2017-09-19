const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
    let tweets = tweetBank.list();
    console.log("typeof tweets", typeof tweets);
    res.render('index', {tweets : tweets});
});

// router.get('./stylesheets/style.css', function (req, res) {
//     res.sendfile()
// });

module.exports = router;

//stylesheets/style.css