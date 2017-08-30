var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));
let port= 8080;
app.listen(8080)
console.log("Running " +port);
