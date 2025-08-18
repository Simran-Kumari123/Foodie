import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be at least 3 characters"],
    maxLength: [30, "First name must be at most 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be at least 3 characters"],
    maxLength: [30, "Last name must be at most 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be at least 10 digits"],
    maxLength: [11, "Phone number must be at most 11 digits"],
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Reservation", reservationSchema);
