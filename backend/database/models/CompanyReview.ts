// models/Review.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  rating: { 
    type: Number, required: true,
    min: [1, 'Rating must be between 1 and 5'],
    max: [5, 'Rating must be between 1 and 5'],
   },
  comment: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
