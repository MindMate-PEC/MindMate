const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt"); 

const PORT = process.env.PORT || 3000;
const router = express.Router();
const db = require("../models"); 

router.use(cors());
router.use(morgan("dev"));
router.use(express.json());

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingEmail = await db.User.findOne({ where: { email } }); 
    if (existingEmail) {
      return res.status(409).json({ error: "Email already taken" }); 
    }

    const hashedPassword = await bcrypt.hash(password, 10); 


    const user = await db.User.create({
      email,
      password: hashedPassword 
    });

    // Send success response
    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(409).json({ error: "User with this email already exists" });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
