const MealPlan = require("../models/MealPlan");

// Create Meal Plan
const createMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.create(req.body);

    res.status(201).json(mealPlan);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get User Meal Plans
const getMealPlans = async (req, res) => {
  try {
    const plans = await MealPlan.find({
      userEmail: req.params.email,
    }).sort({ createdAt: -1 });

    res.json(plans);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Meal Plan
const deleteMealPlan = async (req, res) => {
  try {
    await MealPlan.findByIdAndDelete(req.params.id);

    res.json({
      message: "Meal Plan Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMealPlan,
  getMealPlans,
  deleteMealPlan,
};