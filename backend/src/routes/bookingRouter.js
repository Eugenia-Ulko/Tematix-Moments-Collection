const { Router } = require('express');
const {
  addOrderItems
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const bookingRouter = new Router();

bookingRouter
  .route('/').post(protect, addOrderItems);

module.exports = bookingRouter;
