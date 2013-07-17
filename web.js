var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static('public'));

app.set('view engine', 'coffee')

//consider moving to teacup?

app.set('views', 'src/views')
app.register('.coffee', require('coffeekup').adapters.express)

app.get('/', function(request, response) {
	response.render('index.coffee')
    //response.send(fs.readFileSync('src/views/index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
