const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Config
const port = 3000;


/*app.get('/', function(req, res){
    //route to get to main homepage
});

app.post('/api/shorten', function(req, res){
    //route to create shortened URL
});

app.get('/:encoded_id', function(req,res){
    //route to redirect visitor to original URL
});

var server = app.listen(port, function(){
    console.log('Server active on', port);
});
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use('/', require('/status')(express));

exports.server = app.listen(port, () => {
    console.log('Server Active On', port);
})


//module.exports = server;