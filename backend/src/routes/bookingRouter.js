const { Router } = require('express');
const {
  addOrderItems, getOrderById, getMyOrders
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const bookingRouter = new Router();

bookingRouter.route('/').post(protect, addOrderItems);
bookingRouter.route('/mybookings').get(protect, getMyOrders);
bookingRouter.route('/:id').get(protect, getOrderById);

module.exports = bookingRouter;
