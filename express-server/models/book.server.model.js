import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  bookText: String,
  bookDesc: String
});

export default mongoose.model('Book', Schema);
