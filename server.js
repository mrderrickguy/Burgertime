var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT||8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.get("/", function(req, res) {
 res.render('index');
})

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
