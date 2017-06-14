/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <h1> Hello Guys,</h1>
    <p> Welcome to an application built with Node and Express.</p>
  `);
});

module.exports = router;
