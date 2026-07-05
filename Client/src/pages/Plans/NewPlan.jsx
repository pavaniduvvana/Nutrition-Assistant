import { useState } from "react";
import { motion } from "framer-motion";
import "./NewPlan.css";
import API from "../../services/api";

export default function NewPlan() {
  const [plan, setPlan] = useState({
    mealType: "",
    calories: "",
    goal: "",
  });

  const handleChange = (e) => {
    setPlan({
      ...plan,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const userData =
      currentUser.user || currentUser;

    await API.post("/meal-plans", {
      userEmail: userData.email,
      mealType: plan.mealType,
      calories: Number(plan.calories),
      goal: plan.goal,
    });

    alert("Meal Plan Created Successfully! 🥗");

    setPlan({
      mealType: "",
      calories: "",
      goal: "",
    });

  } catch (error) {
    console.log(error);
    console.log(error.response?.data);

    alert(
      error.response?.data?.message ||
      error.message ||
      "Failed to create meal plan"
    );
  }
};

  return (
    <div className="meal-page">
      <motion.div
        className="meal-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>📝 Create Meal Plan</h1>

        <p className="subtitle">
          Build a personalized nutrition plan according to your goals.
        </p>

        <form onSubmit={handleSubmit}>
          <select
            name="mealType"
            value={plan.mealType}
            onChange={handleChange}
            required
          >
            <option value="">Select Meal Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
          </select>

          <input
            type="number"
            name="calories"
            placeholder="Target Calories"
            value={plan.calories}
            onChange={handleChange}
            required
          />

          <select
            name="goal"
            value={plan.goal}
            onChange={handleChange}
            required
          >
            <option value="">Select Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Weight Gain">Weight Gain</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Healthy Lifestyle">
              Healthy Lifestyle
            </option>
          </select>

          <button type="submit">
            Create Plan
          </button>
        </form>
      </motion.div>
    </div>
  );
}