const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  // For token handling (optional)
const router = express.Router();
const db = require('../models');

// User registration route
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingEmail = await db.User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({ error: 'Email already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.User.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token, userId: user.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
