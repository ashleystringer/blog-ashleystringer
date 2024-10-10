const data = require('./posts.json');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/posts', function (req, res) {
  console.log(data);
  res.json(data);
});

app.get("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);

  console.log(`id: ${id}`);

  const post = data.articles.find(post => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))