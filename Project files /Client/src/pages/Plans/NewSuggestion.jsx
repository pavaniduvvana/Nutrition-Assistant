import { useState } from "react";
import { motion } from "framer-motion";
import API from "../../services/api";
import "./NewSuggestion.css";

export default function NewSuggestion() {
  const [foods, setFoods] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const user = currentUser.user || currentUser;

  const getSuggestions = async () => {
    try {
      setLoading(true);

      const bmi =
        user.height && user.weight
          ? user.weight / ((user.height / 100) ** 2)
          : null;

      const res = await API.post(
        "/suggestions",
        {
          goal: user.goal,
          bmi,
        }
      );

      setFoods(res.data);

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Failed to get suggestions"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="suggestion-page">
      <motion.div
        className="suggestion-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>🤖 Smart Nutrition Assistant</h1>

        <p>
          Goal: {user.goal || "Not Set"}
        </p>

        <button
          onClick={getSuggestions}
          disabled={loading}
        >
          {loading
            ? "Generating..."
            : "Generate Suggestions"}
        </button>

        {foods && (
          <>
            <div className="calorie-box">
              <h2>🔥 Recommended Calories</h2>
              <p>{foods.calories}</p>
            </div>

            <div className="message-box">
              <p>{foods.message}</p>
            </div>

            <div className="food-grid">

              <div className="food-box">
                <h2>🥞 Breakfast</h2>

                {foods?.breakfast?.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              <div className="food-box">
                <h2>🍛 Lunch</h2>

                {foods?.lunch?.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              <div className="food-box">
                <h2>🌙 Dinner</h2>

                {foods?.dinner?.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              <div className="food-box">
                <h2>🥜 Healthy Snacks</h2>

                {foods?.snacks?.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}