const express = require('express');
const users = require('./db/users.json');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsers', (req, res) => res.send({ users }));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
