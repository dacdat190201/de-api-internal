const express = require("express");

const app = express();

const hostname = "localhost";
const port = 8081;

app.get("/", function (req, res) {
  res.send("text abcs");
});

app.listen(port, () => {
  console.log(
    `hello, setup project name app-internal at server: http://localhost:${port}`
  );
});
