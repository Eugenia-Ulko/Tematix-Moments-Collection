const { Router } = require('express');
const {
  getExcursions,
  getExcursionById
} = require('../controllers/excursionController');

const excursionRouter = new Router();

excursionRouter
  .route('/').get(getExcursions);

excursionRouter
  .route('/:id').get(getExcursionById);

module.exports = excursionRouter;
