var express = require('express'),
app = express(),
port = 3000,
mongoose = require('mongoose'),
Contact = require('./api/models/contactsModel'), //importing contacts module
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sumit:sumit@cluster0-shard-00-00-6g9cl.azure.mongodb.net:27017,'+
    'cluster0-shard-00-01-6g9cl.azure.mongodb.net:27017,cluster0-shard-00-02-6g9cl.azure.mongodb.net:'+
    '27017/ContactsDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser:true});
    

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var routes = require('./api/routes/contactsRoutes'); //importing routes module
routes(app); //register the route


app.listen(port);
module.exports = app; //needed for testing