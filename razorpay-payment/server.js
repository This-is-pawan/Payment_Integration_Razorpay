require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* 👇 PASS KEY TO EJS */
app.get("/", (req, res) => {
  res.render("index", {
    key: process.env.RAZORPAY_KEY_ID,
  });
});


const paymentRoutes = require("./routes/paymentRoutes");
app.use("/", paymentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});



