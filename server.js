// server.js
// This is the main file that starts your backend app

import express from 'express';
import cors from 'cors';
import chefyang from './api/route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/chefyang', chefyang);
app.use('/{*any}', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

export default app;
