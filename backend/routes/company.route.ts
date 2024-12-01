// routes/companyRoutes.js
import mongoose from 'mongoose';
import express from 'express';
import Company from '../database/models/Company.js';
const router = express.Router();

// Create a company
router.post('/', async (req, res) => {
  const { name, founded, location } = req.body;
  try {
    const company = new Company({ name, founded, location });
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to create company' });
  }
});

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.aggregate([
      {
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'company',
          as: 'reviews',
        },
      },
      {
        $addFields: {
          averageRating: { $avg: '$reviews.rating' },
          reviewCount: { $size: '$reviews' }
        },
      },
    ])


    res.status(200).json(companies);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to fetch companies' });
  }
});

// Update a company
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const company = await Company.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    )

    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update company' });
  }
});

// Delete a company
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Company.findByIdAndDelete(id);
    res.status(200).json({ message: 'Company deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete company' });
  }
});

export default router;
