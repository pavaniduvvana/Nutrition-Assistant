const express = require("express");
const router = express.Router();

const {
  createMealPlan,
  getMealPlans,
  deleteMealPlan,
} = require("../controllers/mealPlanController");

router.post("/", createMealPlan);

router.get("/:email", getMealPlans);

router.delete("/:id", deleteMealPlan);

module.exports = router;