require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const excursions = require('./excursions');

const app = express();
const port = process.env.PORT || 5003;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/excursions', (req, res) => {
  res.json(excursions);
});

app.get('/api/excursions/:id', (req, res) => {
  const excursion = excursions.find((exc) => exc.id === req.params.id);
  res.json(excursion);
});

app.listen(
  port,
  () => debug(`Server is running successfully on http://localhost:${port}`)
);
