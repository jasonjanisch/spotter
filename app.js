var express = require('express');
var app = express();

var Client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/spotter';

app.set('port', (process.env.PORT || 8080));
app.use(express.static('./public'));

app.get('/users/:username', function(req, res) {
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

app.post('/users/:username', function(req, res) {
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


app.put('/users/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username},
          { $set: {username: req.params.updated}},
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

app.delete('/users/:username',function(req, res) {
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
