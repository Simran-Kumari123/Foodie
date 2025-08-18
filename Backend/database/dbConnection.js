import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "reservation",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error(`Some error occurred while connecting to database: ${err}`);
  }
};
