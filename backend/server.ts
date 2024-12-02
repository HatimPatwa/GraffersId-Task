console.log('Server Starting...');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import CompanyRoutes from './routes/company.route.js';
import CompanyReviewRoutes from './routes/company-review.route.js';

mongoose.connect('mongodb://localhost:27017/graffers-id-task-hatim',)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

const app = express();

//cors
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/companies', CompanyRoutes);
app.use('/api/reviews', CompanyReviewRoutes);




app.listen(3000, () => {
  console.log('Server listening on port 3000');
});




