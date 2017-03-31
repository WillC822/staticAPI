var express = require('express');
var body_parser = require('body-parser');
var app = express();

//Config
var port = 3000;

/*
app.get('/', function(req, res){
    res.json({hello: 'world'});
});
*/

app.use('/api', require('../routes/api.js')(express));

var server = app.listen(port, function(){
    console.log('Server active on', port);
});

module.exports = server;