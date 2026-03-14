const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

// Set defaults if not loaded
process.env.MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://vishal3842kumar_db_user:hU1c54LqPSDNeF0a@cluster0.6eexiau.mongodb.net/donation-platform?retryWrites=true&w=majority';
process.env.PORT = process.env.PORT || '5000';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_here_make_it_long_and_random_123456789';
process.env.FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
console.log('🔗 Connecting to MongoDB at:', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    console.log('📦 Database URI:', process.env.MONGODB_URI);
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
  });

// Import routes
const donationRoutes = require('./routes/donations');
const charityRoutes = require('./routes/charities');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');

// Routes
app.use('/api/donations', donationRoutes);
app.use('/api/charities', charityRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  // Use '/*' for compatibility with newer express/path-to-regexp versions
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});