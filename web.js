var app = require("./http_simple");
var port = process.env.PORT || 3000;

app.listen(port, function() {    
    var addr = app.address();
    console.log("server on http://" + addr.address + ":" + addr.port);
});
