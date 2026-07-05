import { useState } from "react";
import "./WeeklyMealPlanner.css";

export default function WeeklyMealPlanner({ goal }) {
  const [favorites, setFavorites] = useState([]);

  const meals = getMeals(goal);

  const toggleFavorite = (day) => {
    if (favorites.includes(day)) {
      setFavorites(
        favorites.filter((item) => item !== day)
      );
    } else {
      setFavorites([...favorites, day]);
    }
  };

  return (
    <div className="card weekly-planner">
      <h2>🗓️ Weekly Meal Planner</h2>

      <p>
        Personalized meals for:
        <strong> {goal}</strong>
      </p>

      <div className="weekly-meals">

        {meals.map((meal) => (

          <div
            key={meal.day}
            className="day-card"
          >
            <button
              className="heart-btn"
              onClick={() =>
                toggleFavorite(meal.day)
              }
            >
              {favorites.includes(meal.day)
                ? "❤️"
                : "🤍"}
            </button>

            <h3>{meal.day}</h3>

            <p>🔥 {meal.calories}</p>

            <p>
              🌅 <strong>Breakfast:</strong>
              {" "}
              {meal.breakfast}
            </p>

            <p>
              ☀️ <strong>Lunch:</strong>
              {" "}
              {meal.lunch}
            </p>

            <p>
              🌙 <strong>Dinner:</strong>
              {" "}
              {meal.dinner}
            </p>

            <p>
              🥜 <strong>Snack:</strong>
              {" "}
              {meal.snack}
            </p>
          </div>

        ))}

      </div>
    </div>
  );
}

function getMeals(goal) {

  if (goal === "Weight Loss") {
    return [
      {
        day: "Monday",
        calories: "1600 kcal",
        breakfast: "Oatmeal, Apple",
        lunch: "Brown Rice, Salad",
        dinner: "Vegetable Soup",
        snack: "Almonds",
      },
      {
        day: "Tuesday",
        calories: "1550 kcal",
        breakfast: "Fruit Bowl",
        lunch: "Grilled Fish",
        dinner: "Boiled Vegetables",
        snack: "Walnuts",
      },
      {
        day: "Wednesday",
        calories: "1650 kcal",
        breakfast: "Sprouts",
        lunch: "Dal, Chapati",
        dinner: "Paneer Salad",
        snack: "Orange",
      },
    ];
  }

  if (goal === "Weight Gain") {
    return [
      {
        day: "Monday",
        calories: "2500 kcal",
        breakfast: "Banana Shake, Omelette",
        lunch: "Rice, Chicken Curry",
        dinner: "Paneer Curry",
        snack: "Dry Fruits",
      },
      {
        day: "Tuesday",
        calories: "2400 kcal",
        breakfast: "Peanut Butter Toast",
        lunch: "Paneer, Rice",
        dinner: "Grilled Chicken",
        snack: "Nuts",
      },
      {
        day: "Wednesday",
        calories: "2550 kcal",
        breakfast: "Banana, Oats",
        lunch: "Fish Curry",
        dinner: "Egg Salad",
        snack: "Milkshake",
      },
    ];
  }

  return [
    {
      day: "Monday",
      calories: "2800 kcal",
      breakfast: "Egg Whites, Oats, Milk",
      lunch: "Chicken Breast, Brown Rice",
      dinner: "Fish, Sweet Potato",
      snack: "Protein Bar",
    },
    {
      day: "Tuesday",
      calories: "2750 kcal",
      breakfast: "Protein Smoothie",
      lunch: "Paneer, Rice",
      dinner: "Grilled Chicken",
      snack: "Nuts",
    },
    {
      day: "Wednesday",
      calories: "2850 kcal",
      breakfast: "Banana, Oats",
      lunch: "Fish Curry",
      dinner: "Egg Salad",
      snack: "Greek Yogurt",
    },
  ];
}