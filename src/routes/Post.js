const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const db = require("../models");

router.use(cors());
router.use(morgan("dev"));
router.use(express.json());

router.post("/postNote", async (req, res) => {
  const { userId, heading, content } = req.body;

  // Validate input data
  try {
    if (!userId || !heading || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const note = await db.Notes.create({ userId, heading, content });
    res.status(201).json({ message: "Note added successfully", data: note });
  } catch (error) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res
        .status(409)
        .json({ error: "Student with this roll number already exists" });
    } else {
      console.error(err);
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
    if (err.name === "SequelizeUniqueConstraintError") {
      res
        .status(409)
        .json({ error: "Student with this roll number already exists" });
    } else {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
