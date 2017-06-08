const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getcurrentyear', function(){
    return new Date().getFullYear();
});

app.use(function(req, res, next){
    var now = new Date().toString();
    
    console.log(now);
    next();
});

app.get('/', function(req, res){
    res.render('home.hbs', {
        pagetitle: ';home page',
        welcomemessage: 'welcome to my website',
        currentyear: new Date().getFullYear()
    });
});

app.get('/about', function(req, res){
    res.render('about.hbs', {
        pagetitle : 'about page',
        currentyear: new Date().getFullYear()
    });
});

// /bad
app.get('/bad', function(req, res){
    res.send({
        errorMessage: 'unable to handle req'
    });
});

app.listen(3000, function(){
    console.log("server is up on port 3000");
});