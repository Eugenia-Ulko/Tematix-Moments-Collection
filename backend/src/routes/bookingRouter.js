const { Router } = require('express');
const { addOrderItems, getOrderById } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const bookingRouter = new Router();

bookingRouter.route('/').post(protect, addOrderItems);
bookingRouter.route('/:id').get(protect, getOrderById);

module.exports = bookingRouter;
