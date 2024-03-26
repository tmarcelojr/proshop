import mongoose from "mongoose";
const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connect;
