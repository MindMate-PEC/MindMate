// noteController.js
const Note = require('../models/Note'); // Note model
const sentimentAnalysis = require('../utils/sentimentAPI'); // Mocked sentiment analysis function

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.userId; // Assume userId is injected by auth middleware

    if (!content) {
      return res.status(400).json({ message: 'Content is required.' });
    }

    const sentimentScore = await sentimentAnalysis(content);

    const newNote = new Note({
      userId,
      content,
      sentimentScore,
    });

    await newNote.save();
    res.status(201).json({ message: 'Note created successfully.', note: newNote });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Get all notes for a user
exports.getUserNotes = async (req, res) => {
  try {
    const userId = req.user.userId; // Assume userId is injected by auth middleware

    const notes = await Note.find({ userId });
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Get a specific note
exports.getNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: 'Note not found.' });
    }

    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findByIdAndDelete(noteId);

    if (!note) {
      return res.status(404).json({ message: 'Note not found.' });
    }

    res.status(200).json({ message: 'Note deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};