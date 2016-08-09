var express = require('express');
var users = express.Router();
var jsonParser = require('body-parser').json();
var bodyParser = require('body-parser');

var Client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/spotter';

users.use(jsonParser);

users.get('/all', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .find({ })
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

users.post('/matches/:username', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      console.log('logging req.body');
      console.log(req.body);
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $push: {matches: req.body} },
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

users.post('/dismissals/:username', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $push: {dismissals: req.body} },
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

users.put('/:username', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {
              age: req.body.age,
              bio: req.body.bio,
              workouts: req.body.workouts,
              availability: req.body.availability,
              interests: req.body.interests
            }
          },
          function(error, result) {
            if (error) {
              res.sendStatus(500);
            } else {
              res.send();
              db.close();
            }
          });
    }
  });
});

users.put('/username/:username/:updated', function(req, res) {
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

users.put('/age/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {age: req.params.updated} },
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

users.put('/bio/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {bio: req.params.updated} },
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

users.put('/workouts/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {workouts: req.params.updated} },
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

users.put('/availability/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {availability: req.params.bio} },
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

users.put('/interests/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {interests: req.params.bio} },
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

users.put('/photo/:username/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {photo: 'http://i.imgur.com/' + req.params.updated + '.jpg'} },
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

users.put('/resetmatches/:username', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var users = db.collection('users');
      users
        .updateOne(
          { username: req.params.username },
          { $set: {
              matches: [],
              dismissals: []
            }
          },
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
