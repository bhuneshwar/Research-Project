// models/Solution.js
const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
  },
  verdict: String,
  submittedAt: Date,
});

module.exports = mongoose.model('Solution', solutionSchema);
