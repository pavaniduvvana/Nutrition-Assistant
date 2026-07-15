function generateDiet(age, height, weight) {

  const bmi = (
    weight / ((height / 100) ** 2)
  ).toFixed(1);

  let calories;
  let suggestion;
  let meals = [];

  // Underweight
  if (bmi < 18.5) {

    calories = 2400;

    suggestion =
      "You are underweight. Increase healthy calories and protein intake.";

    meals = [
      "🥣 Breakfast: Oats, banana, milk, boiled eggs",
      "🍚 Lunch: Rice, dal, chicken, vegetables",
      "🥜 Snack: Nuts and fruit juice",
      "🍛 Dinner: Chapati, paneer curry, salad"
    ];

  }

  // Normal
  else if (bmi >= 18.5 && bmi < 25) {

    calories = 2000;

    suggestion =
      "Your BMI is healthy. Maintain a balanced diet and regular exercise.";

    meals = [
      "🥞 Breakfast: Idli with sambar",
      "🍲 Lunch: Brown rice, dal, vegetables",
      "🍎 Snack: Fruits and yogurt",
      "🥗 Dinner: Chapati and mixed vegetables"
    ];

  }

  // Overweight
  else {

    calories = 1700;

    suggestion =
      "You are overweight. Reduce sugar and increase physical activity.";

    meals = [
      "🍵 Breakfast: Green tea and oats",
      "🥗 Lunch: Grilled chicken with salad",
      "🍏 Snack: Apple and almonds",
      "🥣 Dinner: Vegetable soup and chapati"
    ];

  }

  return {
    age,
    height,
    weight,
    bmi,
    calories,
    water: "2.5 - 3 liters per day",
    exercise: "30 minutes walking daily",
    suggestion,
    meals
  };
}

module.exports = generateDiet;  