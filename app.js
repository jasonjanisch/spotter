var express = require('express');
var users = require('./routes/users.js');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static('./public'));
app.use('/users', users);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
