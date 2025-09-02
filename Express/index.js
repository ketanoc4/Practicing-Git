// Creating the HTTP server

const express = require("express");
const port = 3500;
const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = sum(n);
  res.send("The output is: " +  ans);
});

app.listen(port);
