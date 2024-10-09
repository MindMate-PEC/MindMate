const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./src/models");
const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

db.sequelize.sync();

const UserRoutes = require("./src/routes/User");
const NotesRoutes = require("./src/routes/Post");

app.use("/user", UserRoutes);
app.use("/notes", NotesRoutes);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
