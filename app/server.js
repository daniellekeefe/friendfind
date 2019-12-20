// Dependencies for various node packages
let express = require("express");
let path = require("path");

let app = express();
let port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port %s', port));

