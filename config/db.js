const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopolog: true,
  });
  console.log(`Mongo conected ${conn.connection.host}`.cyan.underline.bold);
};

console.log(connectDB);

module.exports = connectDB;
