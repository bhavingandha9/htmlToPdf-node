const fs = require('fs');
const pdf = require('html-pdf');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const options = {
  format: 'Letter'
};
// lots of options there for modifications, look on at https://github.com/marcbachmann/node-html-pdf

app.post('/', function (req, res) {
  let html = req.body.html;

  // we can get to the toFile, toBuffer or toStream here we have used the toStream, you can look on the documents

  pdf.create(html, options).toStream((err, pdfRes) => {
    res.setHeader('Content-type', 'application/pdf')
    stream.pipe(res)
  });
});


app.listen(4400, () => {
  console.log('Magic happens on port :' + 4400)
});