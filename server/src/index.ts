import express from 'express';
import cors from 'cors';
import sql from './sql.ts';

const app = express();
const port = 8080;

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', async (req, res) => {
  const tasks = await sql`SELECT * FROM tasks`;
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
