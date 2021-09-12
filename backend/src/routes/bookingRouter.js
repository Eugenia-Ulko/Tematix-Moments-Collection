const { Router } = require('express');
const { addOrderItems, getOrderById, updateOrderToPaid } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const bookingRouter = new Router();

bookingRouter.route('/').post(protect, addOrderItems);
bookingRouter.route('/:id').get(protect, getOrderById);
bookingRouter.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = bookingRouter;
