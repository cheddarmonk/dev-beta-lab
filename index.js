
const express = require('express');
const app = express();


app.get('/', function(req, res){

    res.send('<h3>Hello Node on Heroku </h3> <h4><a href="https://dev-training-beta.herokuapp.com/about">About page</a></h4'

    );

});

app.get('/about', function(req, res){
    
    res.sendFile('/README.md' , { root : 'hello-heroku'});

});

app.listen(process.env.PORT || 3000)