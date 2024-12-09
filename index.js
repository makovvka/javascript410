"use strict";

const express = require("express");
const app = express();

app.get("/math/circle", (req, res) => {
  const r = req.query;

  if (!r) {
    return res.status(400);
  }

  const pole = Math.PI * r.r * r.r;
  const obwod = 2 * Math.PI * r.r;

  res.json({ pole, obwod });
});

//TODO2

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});