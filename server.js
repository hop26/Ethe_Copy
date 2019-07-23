var fs = require('fs');
var http = require('http');
var express = require('express')
var app = express();
//so app is a function that has methods and properties

var port = process.env.PORT || 8080;
//Important. Listening on a port like 3000 makes your app available only on your local server. In a production context, you want the app to be accessed on whatever port the server is listening on. That will be represented by the server's global object: process.env.PORT. If that doesn't exist because you're not in production, it'll default to 3000.
// app.use('/static', express.static('./public'))
//when someone makes a request to the path passed to use, express provides access to the files in the public folder
app.get('/', function(req, res){
	res.sendFile('./index.html', {root: __dirname });
	//you don't need to specify a content-type. the express methods and express response object (wrapper around http_parser res object) looks at what you're sending and takes care of it.
})
//this is the routing part. It gives you the request and response objects to work with. When you receive a GET request to /, do this...

app.listen(port, (req, res)=>{console.log(`server listening on port: ${port}`)});
//the listen method in express does all the work that the http.createServer method does.






// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5000;
//
// //Route setup
// app.get('/', (req, res) => {    res.send('root route');
