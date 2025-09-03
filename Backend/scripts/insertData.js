import mongoose from "mongoose";
import data from "../../frontend/src/restApi.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "reservation",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error(`Error connecting to database: ${err}`);
    process.exit(1);
  }
};

const salesSchema = new mongoose.Schema({}, { strict: false });
const Sales = mongoose.model("Sales", salesSchema);

const insertData = async () => {
  await connectDB();
  try {
    await Sales.insertMany(data.data);
    console.log("Data inserted!");
  } catch (err) {
    console.error(`Error inserting data: ${err}`);
  } finally {
    mongoose.connection.close();
  }
};

insertData();
