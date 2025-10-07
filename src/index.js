import express from 'express';
import users from './db/users.json' with { type: "json" };
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Vercel ignores express.static
// Use express.static for running locally or local development
app.use(express.static('public'));

// Use sendFile for deployment
// app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));

app.get('/api/getUsers', (req, res) => res.send({ users }));

app.listen(8080, () =>
  console.log(`Listening on port 8080!`)
);
