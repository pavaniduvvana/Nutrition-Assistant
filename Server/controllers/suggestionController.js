const getSuggestions = async (req, res) => {
  try {
    const { goal, bmi } = req.body;

    let suggestions = {};

    // BMI priority
    if (bmi && bmi < 18.5) {
      suggestions = {
        breakfast: [
          "Peanut Butter Banana Toast",
          "Masala Omelette",
          "Milk with Dry Fruits",
        ],

        lunch: [
          "Rice",
          "Chicken Curry",
          "Paneer Fry",
          "Curd",
        ],

        dinner: [
          "Chapati",
          "Paneer Butter Masala",
          "Sweet Potato",
        ],

        snacks: [
          "Dates",
          "Almonds",
          "Banana Shake",
        ],

        calories: "2200–2500 kcal",
        message:
          "You are underweight. Focus on healthy weight gain."
      };
    }

    else if (goal === "Weight Loss") {
      suggestions = {
        breakfast: [
          "Oats Upma",
          "Boiled Eggs",
          "Green Tea",
        ],

        lunch: [
          "Brown Rice",
          "Grilled Chicken",
          "Mixed Salad",
        ],

        dinner: [
          "Vegetable Soup",
          "Paneer",
          "Broccoli",
        ],

        snacks: [
          "Apple",
          "Papaya",
          "Nuts",
        ],

        calories: "1500–1800 kcal",
        message:
          "Maintain a calorie deficit and stay active."
      };
    }

    else if (goal === "Weight Gain") {
      suggestions = {
        breakfast: [
          "Peanut Butter Sandwich",
          "Banana Shake",
          "Omelette",
        ],

        lunch: [
          "Rice",
          "Chicken Curry",
          "Curd",
        ],

        dinner: [
          "Chapati",
          "Paneer Curry",
          "Dry Fruits",
        ],

        snacks: [
          "Dates",
          "Cashews",
          "Milk",
        ],

        calories: "2300–2800 kcal",
        message:
          "Increase calories with nutritious foods."
      };
    }

    else if (goal === "Muscle Gain") {
      suggestions = {
        breakfast: [
          "Egg Whites",
          "Oats",
          "Milk",
        ],

        lunch: [
          "Chicken Breast",
          "Brown Rice",
          "Vegetables",
        ],

        dinner: [
          "Fish",
          "Sweet Potato",
          "Salad",
        ],

        snacks: [
          "Protein Shake",
          "Bananas",
          "Peanuts",
        ],

        calories: "2500–3000 kcal",
        message:
          "Prioritize protein and strength training."
      };
    }

    else {
      suggestions = {
        breakfast: [
          "Idli",
          "Fruit Bowl",
          "Milk",
        ],

        lunch: [
          "Rice",
          "Dal",
          "Vegetables",
        ],

        dinner: [
          "Soup",
          "Chapati",
          "Paneer",
        ],

        snacks: [
          "Fruits",
          "Nuts",
        ],

        calories: "1800–2200 kcal",
        message:
          "Maintain a balanced lifestyle."
      };
    }

    res.json(suggestions);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getSuggestions,
};