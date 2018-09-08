// import files and packages up here


// create your express server below
var express = require ('express');
var app = express();
var data = require ('./data.json');
var morgan = require ('morgan');
app.use(morgan('dev'));

app.use(express.static("/users/juanmartinez C/oca/startnow-web101-san-diego-top-spots"));
app.get('/', function(req, res){ 
    res.send('its working');
});
app.get('/data', function(req, res) {
    res.status(200).json(data);
});

// add your routes and middleware below

// finally export the express application
module.exports = app;
