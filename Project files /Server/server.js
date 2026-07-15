require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db/config");

const userRoutes = require("./routes/userRoutes");
const suggestionRoutes = require("./routes/suggestionRoutes");
const mealPlanRoutes = require("./routes/mealPlanRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/suggestions", suggestionRoutes);
app.use("/api/meal-plans", mealPlanRoutes);

app.get("/", (req, res) => {
  res.send("Nutrition Assistant API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});