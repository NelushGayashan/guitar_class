import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string
    const mongoURI = 'mongodb://localhost:27017/guitar_class_db';
    
    const conn = await connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

