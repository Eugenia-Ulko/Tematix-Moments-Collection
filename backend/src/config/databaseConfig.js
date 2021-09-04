const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    console.log(`Mongo connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
