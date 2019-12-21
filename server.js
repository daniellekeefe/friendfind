// Dependencies for various node packages
let express = require("express");
let path = require("path");

let app = express();
let port = process.env.PORT || 3000;


//express MIDDLEWARE
app.use(express.static('app/public'));//serves yorr static files
app.use(express.urlencoded({extended:true}))//this parses url
app.use(express.json())

//required routes 
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes')(app);

//console log to confirm we are able to listen on port 3000
app.listen(port, () => console.log('listening on port %s', port));