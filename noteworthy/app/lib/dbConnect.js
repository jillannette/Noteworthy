import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected');
    return;
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('MongoDB Connected...');
};