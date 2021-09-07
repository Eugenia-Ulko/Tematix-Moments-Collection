const { Router } = require('express');
const {
  authUser
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .post('/login', authUser);

module.exports = userRouter;
