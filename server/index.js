console.log("app is loading");

const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server 123"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
