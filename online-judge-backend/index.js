// index.js
const express = require('express');
const mongoose = require('mongoose');
const problemRoutes = require('./routes/problem');
const solutionRoutes = require('./routes/solution');
const testCaseRoutes = require('./routes/testCase');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/onlinejudge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Define your routes and controllers here
// Mount routes
app.use('/api/problems', problemRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/test-cases', testCaseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
