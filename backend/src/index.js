const express = require("express");
const app = express();
const jokeGenerator = require("./joke-generator");
const middleware = require("./middleware");

app.listen(5000, () => {
  console.log("app running on port 5000");
  
  middleware.init(app);
  jokeGenerator.init(app);
});
