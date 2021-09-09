const { Router } = require('express');
const {
  authUser, registerUser, getUserProfile, updateUserProfile
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const userRouter = new Router();

userRouter
  .route('/').post(registerUser);
userRouter
  .post('/login', authUser);
userRouter
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = userRouter;
