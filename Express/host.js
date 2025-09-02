const express = require("express");
const port = 3000;
const app = express();

const user = [
  {
    name: "john",
    age: 65,
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  // accessing the john's kidneys
  const johnKidneys = user[0].kidneys;
  // retrieves the total number of kidneys john has
  const noOfKidneys = johnKidneys.length;
  // Logic for finding Unhealthy kidneys
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy == true) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  // Logic for finding Unhealthy kidneys
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
 
app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.listen(port);
