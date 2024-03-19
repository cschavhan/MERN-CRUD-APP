import mongoose from "mongoose";

const connectionToDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);

    if (connection) {
      console.log(`connected to the MongoDb ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectionToDb;
