var express = require('express');
var app = express();

var users = {
    '1234': {
        name: 'Daniel Cook'
    },

    '5678': {
        name: 'Aviv Beeri'
    }
};

app.get('/users/:userId', function(req, res){
    var userId = req.params.userId;
    res.send(users[userId].name);
});

app.listen(3000);

// Output a log to indicate the server has started
console.log('Server started');
