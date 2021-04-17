const express = require("express");

const app = express();
const Port = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});

app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});

