
const express = require('express');
const app = express();


app.get('/', function(req, res){

    res.send('<h3>Hello Node on Heroku </h3> <h4><a href="https://github.com/cheddarmonk/dev-beta-lab/blob/main/README.md">About page</a></h4'

    );

});

app.get('/about', function(req, res){
    
    res.sendFile('/README.md', { root : 'hello-heroku'});

});

app.listen(process.env.PORT || 3000)