import path from 'node:path';
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve('client/dist')));
app.use(express.json());

app.post('/api/create', (req, res) => {});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'));
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
