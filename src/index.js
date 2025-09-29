import express from 'express';
import users from './db/users.json' with { type: "json" };

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// app.use(express.static('dist'));
app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, '../dist') }))
app.get('/api/getUsers', (req, res) => res.send({ users }));

app.listen(8080, () =>
  console.log(`Listening on port 8080!`)
);
