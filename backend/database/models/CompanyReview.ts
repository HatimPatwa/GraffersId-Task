// models/Review.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
