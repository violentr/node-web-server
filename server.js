const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello Express')
});

app.listen(3000);


