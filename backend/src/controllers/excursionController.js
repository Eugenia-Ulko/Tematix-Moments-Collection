/* eslint-disable no-underscore-dangle */
const asyncHandler = require('express-async-handler');
const Excursion = require('../models/excursionModel');

// @desc   Fetch all excursions
// @route GET /api/excursions
// @access  Public
const getExcursions = asyncHandler(async (req, res) => {
  const excursions = await Excursion.find({});
  res.json(excursions);
});

// @desc   Fetch single excursion
// @route GET /api/excursions/:id
// @access  Public
const getExcursionById = asyncHandler(async (req, res) => {
  const excursion = await Excursion.findById(req.params.id);
  if (excursion) {
    res.json(excursion);
  } else {
    res.status(404);
    throw new Error('Excursion not found');
  }
});

module.exports = {
  getExcursions,
  getExcursionById

};
