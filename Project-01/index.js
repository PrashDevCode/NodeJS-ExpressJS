const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 3000;

// Connection mongoDb...
mongoose
  .connect("mongodb://127.0.0.1:27017/yt-app-1")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error", err));



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
