var express = require('express');
var users = express.Router();

var Client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/spotter';

users.get('/:username', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .find({ username: req.params.username })
        .toArray(function(error, documents) {
          if (error) {
            res.sendStatus(500);
            db.close();
          } else {
            res.send(documents);
            db.close();
          }
        });
    }
  });
});

users.post('/:username', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users.insert(
        { username: req.params.username },
        function(error, result) {
          if (error) {
            res.sendStatus(500);
            db.close();
          } else {
            res.send(result);
            db.close();
          }
        });
    }
  });
});


users.put('/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {username: req.params.updated} },
          function(error, result) {
            if (error) {
              res.sendStatus(500);
              db.close();
            } else {
              res.send();
              db.close();
            }
          });
    }
  });
});

users.delete('/:username',function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users.deleteOne(
        { username: req.params.username },
        function(error, result) {
          if (error) {
            res.sendStatus(500);
            db.close();
          } else {
            res.send();
            db.close();
          }
        });
    }
  });
});

module.exports = users;