var wagner = require('wagner-core');
var express = require('express');

var app = express();

app.use('api/v1',require('apis/api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!');