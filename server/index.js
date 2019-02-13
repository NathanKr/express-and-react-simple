console.log("app is loading");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("root is accessed");
  res.send("Hello Express");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
