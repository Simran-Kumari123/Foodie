import mongoose from "mongoose";

export const dbConnection = async () => {
  if (!process.env.MONGO_URI) {
    console.log("MONGO_URI not set, skipping database connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "reservation",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error(`Some error occurred while connecting to database: ${err}`);
  }
};
