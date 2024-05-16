import mongoose from 'mongoose';

const { Schema } = mongoose;

const candidateSchema = new Schema({
  first_name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
  last_name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value: string) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
      },
      message: 'Invalid email address'
    }
  },
  dob: { type: Date, required: true },
  residential_address_one: { type: String, required: true },
  residential_address_two: { type: String, required: true },
  permanent_address_one: { type: String },
  permanent_address_two: { type: String },
  documents: { type: Array, default: [] }
});

export const Candidates = mongoose.models.users || mongoose.model('users', candidateSchema);