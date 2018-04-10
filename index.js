
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const query = require('./app/torrentquery');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public'+'/index.html'));
});

app.get('/save', function(req, res){
    query(req.query.name, req.query.phone);
    res.sendFile(path.join(__dirname + '/public' + '/success.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
