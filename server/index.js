console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body 
app.use(express.json());

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
