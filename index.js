
const express = require('express');
const app = express();


app.get('/', function(req, res){

    res.send('<h3>Hello Node on Heroku</h3>');

});

app.get('/about', function(req, res){

    res.send('<h3>All info is found on the READ.ME</h3>');

});

app.listen(process.env.PORT || 3000)