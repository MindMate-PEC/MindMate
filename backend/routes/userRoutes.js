// userRoutes.js
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');

// User Routes
router.get('/users', authMiddleware, adminMiddleware, userController.getAllUsers);
router.get('/users/:userId', authMiddleware, adminMiddleware, userController.getUserById);
router.put('/users/:userId', authMiddleware, adminMiddleware, userController.updateUser);
router.delete('/users/:userId', authMiddleware, adminMiddleware, userController.deleteUser);

module.exports = router;
