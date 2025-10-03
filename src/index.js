import express from 'express';
import users from './db/users.json' with { type: "json" };


const app = express();

// vercel automatically serves static assets
// app.use(express.static('dist'));
app.get('/api/getUsers', (req, res) => res.send({ users }));

app.listen(8080, () =>
  console.log(`Listening on port 8080!`)
);
