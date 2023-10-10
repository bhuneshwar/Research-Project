// models/Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  name: String,
  statement: String,
  difficulty: String,
});

module.exports = mongoose.model('Problem', problemSchema);
