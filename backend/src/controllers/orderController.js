/* eslint-disable no-underscore-dangle */
const asyncHandler = require('express-async-handler');
const Booking = require('../models/bookingModel');

// @desc   Create new booking
// @route POST /api/bookings
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    bookingItems,
    clientAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice
  } = req.body;

  if (bookingItems && bookingItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    // eslint-disable-next-line no-unreachable
    return;
  }
  const booking = new Booking({
    bookingItems,
    user: req.user._id,
    clientAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice
  });

  const createdOrder = await booking.save();

  res.status(201).json(createdOrder);
});

module.exports = addOrderItems;
