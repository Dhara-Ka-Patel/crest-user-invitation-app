const express = require('express');
// const request = require("request");
const cors = require('cors');
// const bodyParser = require("body-parser");
// const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'src', 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8081;
app.listen(port, err => {
  if (err) {
    // console.log('server start error ', err);
  } else {
    // console.log('server started at port ', port);
  }
});
