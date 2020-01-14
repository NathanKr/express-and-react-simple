console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body 
app.use(express.json());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
