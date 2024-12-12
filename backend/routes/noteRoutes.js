// noteRoutes.js
const express = require('express');
const router = express.Router();

const noteController = require('./controllers/noteController');
const authMiddleware = require('./middleware/auth');

// Note Routes
router.post('/notes', authMiddleware, noteController.createNote);
router.get('/notes', authMiddleware, noteController.getUserNotes);
router.get('/notes/:noteId', authMiddleware, noteController.getNoteById);
router.delete('/notes/:noteId', authMiddleware, noteController.deleteNote);

module.exports = router;