const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const notFound = require('./src/middleware/errorMiddleware');
const errorHandler = require('./src/middleware/errorMiddleware');
const connectDB = require('./src/config/databaseConfig');

const excursionRouter = require('./src/routes/excursionRouter');
const userRouter = require('./src/routes/userRouter');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5003;

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/excursions', excursionRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

app.listen(
  port,
  () => console.log(`Server is running successfully on http://localhost:${port}`)
);
