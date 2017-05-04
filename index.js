var express = require('express');

var app = new express();

app.get( '*', function (req, res) {
	return res.send('OK')
});


app.listen(3000, () => {
	console.log('http://localhost:3000');
});
