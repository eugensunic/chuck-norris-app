const express = require("express");
const app = express();
const jokeGenerator = require("./joke-generator");

app.listen(3000, () => jokeGenerator.init());
