const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const Excursion = require('../models/excursionModel');

const excursionRouter = new Router();

// @desc   Fetch all excursions
// @route GET /api/excursions
// @access  Public
excursionRouter
  .get('/', asyncHandler(async (req, res) => {
    const excursions = await Excursion.find({});
    res.json(excursions);
  }));

// @desc   Fetch single excursion
// @route GET /api/excursions/:id
// @access  Public
excursionRouter
  .get('/:id', asyncHandler(async (req, res) => {
    const excursion = await Excursion.findById(req.params.id);
    if (excursion) {
      res.json(excursion);
    } else {
      res.status(404).json({ message: 'Excursion not found' });
    }
  }));

module.exports = excursionRouter;
