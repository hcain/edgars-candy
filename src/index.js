import express from 'express';
import users from './db/users.json' with { type: "json" };

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsers', (req, res) => res.send({ users }));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
