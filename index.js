var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('
              <!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello World!</h1></body></html>
');
    res.end();
}).listen(process.env.PORT || 3000);
