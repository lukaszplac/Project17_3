var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile;
var app = express();
app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
	});
})

app.post('/updateNote/:note', function(req, res) {
	stringifyFile += req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(err) {
	    if (err) throw err;
	    console.log('file updated');
	    res.send(stringifyFile);
	});
})

var server = app.listen(3000, function() {
	console.log('Aplikacja nasluchuje na http://localhost:3000');
})