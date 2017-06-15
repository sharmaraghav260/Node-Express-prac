/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <link rel="stylesheet" type="text/css"
    href="css/style.css">
    <h1> Hello Guys,</h1>
    <img src="/images/misc/background.jpg"
    alt="background" style="height: 300px;">
    <p> Welcome to an application built with Node and Express.</p>
    <script src="/reload/reload.js"></script>
  `);
});

module.exports = router;
