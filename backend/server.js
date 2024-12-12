require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // Enable CORS for client
app.use(helmet()); // Add security headers
app.use(morgan('dev')); // Logging HTTP requests
app.use(cookieParser()); // Parse cookies

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/notes', noteRoutes); // Note-related routes
app.use('/api/users', userRoutes); // User management routes

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running.' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});