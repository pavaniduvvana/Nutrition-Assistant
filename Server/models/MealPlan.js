const mongoose = require("mongoose");

const MealPlanSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    mealType: {
      type: String,
      required: true,
    },

    calories: {
      type: Number,
      required: true,
    },

    goal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "MealPlan",
  MealPlanSchema
);