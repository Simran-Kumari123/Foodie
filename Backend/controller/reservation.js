import Errorhandler from "../error/error.js";  // default import of class
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new Errorhandler("Please fill all the fields", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, phone, date, time });
    res.status(200).json({
      success: true,
      message: "Reservation created successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new Errorhandler(validationErrors.join(", "), 400));
    }
    return next(new Errorhandler(error.message, 400));
  }
};
