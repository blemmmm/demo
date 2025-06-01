import express from 'express';
import sql from './sql.ts';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const asd = await sql`SELECT * FROM tasks`;
console.log(asd);