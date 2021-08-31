
const express = require('express');
const app = express();


app.get('/', function(req, res){

    res.send('<h3>Hello Node on Heroku</h3>');

});

app.get('/about', function(req, res){

    res.sendFile('hello-heroku\README.md');

});

app.listen(process.env.PORT || 3000)