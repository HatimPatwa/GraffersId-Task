// routes/reviewRoutes.js
import express from 'express';
import Review from '../database/models/CompanyReview.js';
const router = express.Router();

// Create a review
router.post('/', async (req, res) => {
  const { companyId, rating, comment } = req.body;
  try {
    const review = new Review({ company: companyId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create review' });
  }
});

// Get reviews for a company
router.get('/:companyId', async (req, res) => {
  const { companyId } = req.params;
  try {
    const reviews = await Review.find({ company: companyId }).populate('company');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch reviews' });
  }
});

export default router;
