const mongoose = require('mongoose');
require('dotenv').config();
const users = require('./users');
const excursions = require('./excursions');
const User = require('./src/models/userModel');
const Booking = require('./src/models/bookingModel');
const Excursion = require('./src/models/excursionModel');
const connectDB = require('./src/config/databaseConfig');

connectDB();

const importData = async () => {
  try {
    await Booking.deleteMany();
    await Excursion.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[1].id;

    const sampleExcursions = excursions.map((excursion) => ({ ...excursion, user: adminUser }));

    await Excursion.insertMany(sampleExcursions);

    console.log('Data imported bitchezzzz!!!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Booking.deleteMany();
    await Excursion.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed bitchezzzz!!!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
