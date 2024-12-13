import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    userEmail: {
      type: String,
    },
    tourName:{
        type:String,
        required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    bookAt:{
        type:Date,
        required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", reviewSchema);