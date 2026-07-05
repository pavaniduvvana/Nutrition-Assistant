import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userData = user?.user || user;

  const [water, setWater] = useState(
    Number(localStorage.getItem("water")) || 0
  );

  const addWater = () => {
    const newValue = Math.min(water + 1, 8);

    setWater(newValue);

    localStorage.setItem(
      "water",
      newValue
    );
  };

  const [mealPlansCount, setMealPlansCount] =
  useState(0);

  const resetWater = () => {
    setWater(0);

    localStorage.setItem(
      "water",
      0
    );
  };

  const [mealPlans, setMealPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);

  const bmi =
    userData?.height && userData?.weight
      ? (
          userData.weight /
          ((userData.height / 100) ** 2)
        ).toFixed(1)
      : null;

  const nutritionScore = (() => {
  let score = 50;

  if (water >= 8) score += 20;

  if (bmi && bmi >= 18.5 && bmi < 25) {
    score += 30;
  }

  return Math.min(score, 100);
})();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
  const fetchMealPlans = async () => {
    try {
      const res = await API.get(
        `/meal-plans/${userData.email}`
      );

      setMealPlansCount(res.data.length);

    } catch (error) {
      console.log(error);
    }
  };

  if (userData?.email) {
    fetchMealPlans();
  }
}, []); 

  const todayTip =
  tips[new Date().getDate() % tips.length];

  const todayMeal = getTodayMeal(userData?.goal);

  const dailyGoals = getDailyGoals(userData?.goal);

  return (
    <div className="dashboard-page">
      <motion.div
        className="dashboard-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="dashboard-header">
          <div>
            <h1>
              Welcome, {userData?.name || "User"} 🥗
            </h1>

            <p>
              Stay healthy, stay consistent,
              and achieve your nutrition goals.
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h2>🔥 Recommended Calories</h2>
            <p>{getCalories(userData?.goal, bmi)}</p>
          </div>

          <div className="card">
            <h2>💧 Water Intake</h2>

            <p>
              {water} / 8 glasses
            </p>

            <div className="water-buttons">
              <button onClick={addWater}>
                + Add Glass
              </button>

              <button
                className="reset-btn"
                onClick={resetWater}
              >
                Reset
              </button>
            </div>
          </div>


          <div className="card">
            <h2>⚖️ BMI</h2>

            <p>
              {bmi
                ? `${bmi} (${getBMIStatus(bmi)})`
                : "Complete Profile"}
            </p>
          </div>

          <div className="card tip-card">
            <h2>💡 Today's Health Tip</h2>

            <p>{todayTip}</p>
          </div>

          <div className="card profile-summary">
            <h2>👤 My Health Profile</h2>

            <p>
              <strong>🎯 Goal:</strong>{" "}
              {userData?.goal || "Not Set"}
            </p>

            <p>
              <strong>🎂 Age:</strong>{" "}
              {userData?.age || "N/A"} years
            </p>

            <p>
              <strong>📏 Height:</strong>{" "}
              {userData?.height || "N/A"} cm
            </p>

            <p>
              <strong>⚖️ Weight:</strong>{" "}
              {userData?.weight || "N/A"} kg
            </p>
          </div>

          <div className="card progress-card">
            <h2>📈 Progress Overview</h2>

            <p>
              💧 Water Goal:
              <strong> {water}/8 glasses</strong>
            </p>

            <p>
              🍽️ Meal Plans:
              <strong> {mealPlansCount}</strong>
            </p>

            <p>
              ⚖️ BMI Status:
              <strong>
                {" "}
                {bmi
                  ? getBMIStatus(bmi)
                  : "Unknown"}
              </strong>
            </p>
            
           <div className="score-card">
            <h2>⭐ Daily Nutrition Score</h2>

            <div className="score-circle">
                {nutritionScore}%
            </div>

            <p>
              {nutritionScore >= 90
                ? "Excellent! Keep it up! 🎉"
                : nutritionScore >= 70
                ? "Good progress! 👍"
                 : "Let's improve your daily habits 💪"}
            </p>
          </div>
            <p>
              🎯 Goal:
              <strong>
                {" "}
                {userData?.goal || "Not Set"}
              </strong>
            </p>
          </div>

          <div className="card">
            <h2>🍎 Recommended Fruits</h2>
            <p>{getFruits(userData?.goal, bmi)}</p>
          </div>

          <div className="card">
            <h2>🥦 Recommended Vegetables</h2>
            <p>{getVegetables(userData?.goal, bmi)}</p>
          </div>
            

            <div className="card">
              <h2>🍽️ Today's Recommended Meal</h2>

              <p><strong>🥞 Breakfast:</strong> {todayMeal.breakfast}</p>

              <p><strong>🍛 Lunch:</strong> {todayMeal.lunch}</p>

              <p><strong>🌙 Dinner:</strong> {todayMeal.dinner}</p>

              <p><strong>🥜 Snack:</strong> {todayMeal.snack}</p>
            </div>

            <div className="card">
              <h2>🎯 Daily Goals</h2>

              {dailyGoals.map((goal, index) => (
                <p key={index}>{goal}</p>
              ))}
            </div>


          <div className="card actions">

          <button
            onClick={() =>
              navigate("/new-plan")
            }
          >
            Create Meal Plan
          </button>

          <button
            onClick={() =>
              navigate("/new-suggestion")
            }
          >
            AI Suggestions
          </button>

          <button
            onClick={() =>
              navigate("/profile")
            }
          >
            My Profile
          </button>

          <button
            onClick={() =>
              navigate("/my-plans")
            }
          >
            My Meal Plans
          </button>

        </div>

        </div>
      </motion.div>
    </div>
  );
}
function getCalories(goal, bmi) {
  bmi = Number(bmi);

  if (bmi < 18.5) {
    return "2,200–2,500 kcal (Recommended for healthy weight gain)";
  }

  switch (goal) {
    case "Weight Loss":
      return "1,500–1,800 kcal";

    case "Weight Gain":
      return "2,300–2,800 kcal";

    case "Muscle Gain":
      return "2,500–3,000 kcal";

    default:
      return "1,800–2,200 kcal";
  }
}

function getFruits(goal, bmi) {
  bmi = Number(bmi);

  if (bmi < 18.5) {
    return "Banana, Mango, Dates";
  }

  switch (goal) {
    case "Weight Loss":
      return "Apple, Orange, Papaya";

    case "Weight Gain":
      return "Banana, Mango, Avocado";

    case "Muscle Gain":
      return "Banana, Dates, Berries";

    default:
      return "Apple, Banana, Grapes";
  }
}

function getVegetables(goal, bmi) {
  bmi = Number(bmi);

  if (bmi < 18.5) {
    return "Sweet Potato, Peas, Beetroot";
  }

  switch (goal) {
    case "Weight Loss":
      return "Broccoli, Spinach, Cucumber";

    case "Weight Gain":
      return "Potato, Sweet Potato, Peas";

    case "Muscle Gain":
      return "Spinach, Beetroot, Carrots";

    default:
      return "Carrot, Beans, Cauliflower";
  }
}

function getTodayMeal(goal) {
  switch (goal) {
    case "Weight Loss":
      return {
        breakfast: "Oatmeal & Green Tea",
        lunch: "Grilled Chicken Salad",
        dinner: "Vegetable Soup & Brown Rice",
        snack: "Apple & Almonds",
      };

    case "Weight Gain":
      return {
        breakfast: "Banana, Milk & Peanut Butter Toast",
        lunch: "Rice, Chicken Curry & Eggs",
        dinner: "Paneer, Chapati & Sweet Potato",
        snack: "Dry Fruits & Milkshake",
      };

    case "Muscle Gain":
      return {
        breakfast: "Oats, Eggs & Milk",
        lunch: "Chicken Breast, Brown Rice",
        dinner: "Fish, Sweet Potato & Vegetables",
        snack: "Protein Shake & Nuts",
      };

    default:
      return {
        breakfast: "Idli & Sambar",
        lunch: "Rice, Dal & Vegetables",
        dinner: "Chapati & Curry",
        snack: "Fruits",
      };
  }
}

function getDailyGoals(goal) {
  const commonGoals = [
    "💧 Drink 8 glasses of water",
    "🚶 Walk for 30 minutes",
    "😴 Sleep for 7–8 hours",
  ];

  if (goal === "Weight Loss") {
    commonGoals.push("🥗 Eat low-calorie meals");
  } else if (goal === "Weight Gain") {
    commonGoals.push("🥛 Consume extra healthy calories");
  } else if (goal === "Muscle Gain") {
    commonGoals.push("💪 Eat high-protein meals");
  }

  return commonGoals;
}

function getBMIStatus(bmi) {
  bmi = Number(bmi);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";

  return "Obese";
}
const tips = [
  "💧 Drink water before meals to improve digestion.",
  "🥗 Fill half your plate with vegetables.",
  "🚶 Walk for at least 30 minutes every day.",
  "🍎 Eat seasonal fruits for better nutrition.",
  "😴 Sleep 7–8 hours to support your health goals.",
  "🥜 Healthy snacks are better than skipping meals.",
  "☀️ Get some morning sunlight for Vitamin D.",
  "🍽️ Eat slowly and enjoy your meals.",
];

const todayTip =
  tips[new Date().getDate() % tips.length];