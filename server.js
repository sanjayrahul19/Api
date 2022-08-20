const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const router = require("./router/user");

app.use(express.json());
app.use("/user", router);
connectDB();

app.listen(PORT, () => {
  console.log("server is up and running");
});
