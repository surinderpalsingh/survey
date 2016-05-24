var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function(app) {
  app.use('/', router);
};
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/get-surveys-list', function(req, res) {
  var surveys = require("../../data/index.json");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(surveys));
});


router.get('/survey-result/:id', function(req, res) {
  var survey = require('../../data/' + req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(survey));

});
