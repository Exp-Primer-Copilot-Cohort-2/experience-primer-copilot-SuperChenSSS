// Create web server
// Create a route for comments
// Create a route for comments/:commentId
// Create a route for comments/:commentId/replies

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:commentId', (req, res) => {
  const commentId = Number(req.params.commentId);
  const comment = comments.find((comment) => comment.id === commentId);
  res.json(comment);
});

app.get('/comments/:commentId/replies', (req, res) => {
  const commentId = Number(req.params.commentId);
  const comment = comments.find((comment) => comment.id === commentId);
  res.json(comment.replies);
});

// Add a comment for testing
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Add a reply for testing
// Assuming comments is defined somewhere in your code
const comments = [
    { id: 1, text: 'First comment', replies: [] },
    { id: 2, text: 'Second comment', replies: [] }
  ];
  
  app.post('/comments/:commentId/replies', (req, res) => {
    const commentId = Number(req.params.commentId);
    const reply = req.body;
    
    // Find the comment by id
    const comment = comments.find((comment) => comment.id === commentId);
    
    // Check if the comment exists
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    // Add the reply to the comment's replies array
    comment.replies.push(reply);
    
    // Respond with the added reply
    res.json(reply);
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});