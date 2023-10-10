// models/TestCase.js
const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
  },
  input: String,
  output: String,
});

module.exports = mongoose.model('TestCase', testCaseSchema);
