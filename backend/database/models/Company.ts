// models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
  founded: { type: Date, required: true },
});

//remove __v from the response

companySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Company = mongoose.model('Company', companySchema);

export default Company;
