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
  // eslint-disable-next-line no-else-return
  } else {
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
  }
});

// @desc   Get booking by ID
// @route GET /api/bookings
// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (booking) {
    res.json(booking);
  } else {
    res.status(404);
    throw new Error('Booking not found');
  }
});

// @desc   Update booking to paid
// @route GET /api/bookings/:id/pay
// @access  Private

/* const updateOrderToPaid = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    booking.isPaid = true;
    booking.paidAt = Date.now();
    booking.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    };
    const updatedOrder = await booking.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Booking not found');
  }
}); */

// @desc   Get user's bookings
// @route GET /api/bookings/mybookings
// @access  Private

const getMyOrders = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id });
  res.json(bookings);
});

module.exports = {
  addOrderItems,
  getOrderById,
  getMyOrders
};
