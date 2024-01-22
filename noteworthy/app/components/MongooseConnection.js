// File: lib/mongooseConnection.js
import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection string

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB via Mongoose');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
};

export default connectToDatabase;

