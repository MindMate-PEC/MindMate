const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const db = require("../models");
const crypto = require("crypto");

router.use(cors());
router.use(morgan("dev"));
router.use(express.json());

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // Must be 32 bytes
 // Must be 256 bits (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text) {
  let iv = crypto.randomBytes(IV_LENGTH);
  let cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(text) {
  let textParts = text.split(":");
  let iv = Buffer.from(textParts.shift(), "hex");
  let encryptedText = Buffer.from(textParts.join(":"), "hex");
  let decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

// // Example usage:
// function saveNote(noteText) {
//   const encryptedNote = encrypt(noteText);
//   // Save encryptedNote to database
//   console.log('Encrypted note:', encryptedNote);
// }

// function analyzeNote(encryptedNote) {
//   const decryptedNote = decrypt(encryptedNote);
//   // Apply ML model to decryptedNote
//   console.log('Decrypted note:', decryptedNote);
// }

// // Test
// const testNote = "This is a secret note about my feelings.";
// saveNote(testNote);
// // Simulating retrieval from database
// const retrievedNote = encrypt(testNote); // In real scenario, this would be fetched from DB
// analyzeNote(retrievedNote);

router.post("/postNote", async (req, res) => {
  const { userId, heading, content } = req.body;
  // Validate input data
  try {
    if (!userId || !heading || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const encryptedNote = encrypt(content);
    const note = await db.Notes.create({ userId, heading, content: encryptedNote });
    res.status(201).json({ message: "Note added successfully", data: note });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res
        .status(409)
        .json({ error: "Student with this roll number already exists" });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

router.post("/getNotes", async (req, res) => {
  const { userId } = req.body;
  try {
    const notes = await db.Notes.findAll({ where: { userId } });
    res.json({ data: notes });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res
        .status(409)
        .json({ error: "Student with this roll number already exists" });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
