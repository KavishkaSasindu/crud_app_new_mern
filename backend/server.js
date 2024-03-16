const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const postRoutes = require("./routes/postRoutes");

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mernapp.hofxkqv.mongodb.net/${process.env.MONGODB}`
  )
  .then(() => {
    console.log("DB is connected");
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//   routes
app.use(postRoutes);
