// create a web server that listens on port 3000
// create a route for GET /comments that sends back a JSON response with the comments array
// create a route for POST /comments that reads the comment from the request body and adds it to the comments array
// create a route for DELETE /comments that reads the index from the request body and removes it from the comments array

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [
  'This is a comment',
  'This is another comment'
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json(comments);
});

app.delete('/comments', (req, res) => {
  const { index } = req.body;
  comments.splice(index, 1);
  res.json(comments);
});
