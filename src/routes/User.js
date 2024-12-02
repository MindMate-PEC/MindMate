const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // For token handling (optional)
const router = express.Router();
const db = require("../models");

// User registration route
router.post("/register", async (req, res) => {
  try {
    const { email, name, password, isDoctor } = req.body;

    const existingEmail = await db.User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({ error: "Email already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.User.create({
      email,
      password: hashedPassword,
      name,
      isDoctor,
    });

    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    await user.update({ token });

    res
      .status(200)
      .json({ message: "Login successful", token, userId: user.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/deleteNotes", async (req, res) => {
  try {
    const { noteId } = req.body;

    // Check if the note exists
    const note = await db.Notes.findByPk(noteId);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Delete the note
    await note.destroy();

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
