import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import API from "../../services/api";
import "./MyPlans.css";

export default function MyPlans() {
  const [plans, setPlans] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const user =
    currentUser.user || currentUser;

  const fetchPlans = async () => {
    try {
      const res = await API.get(
        `/meal-plans/${user.email}`
      );

      setPlans(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deletePlan = async (id) => {
    try {
      await API.delete(
        `/meal-plans/${id}`
      );

      fetchPlans();

    } catch (error) {
      console.log(error);
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text(
      "Nutrition Assistant - Meal Plans",
      20,
      20
    );

    let y = 40;

    plans.forEach((plan, index) => {
      doc.text(
        `${index + 1}. ${plan.mealType}`,
        20,
        y
      );

      y += 10;

      doc.text(
        `Calories: ${plan.calories} kcal`,
        25,
        y
      );

      y += 10;

      doc.text(
        `Goal: ${plan.goal}`,
        25,
        y
      );

      y += 20;
    });

    doc.save("meal-plans.pdf");
  };

  const filteredPlans = plans.filter((plan) =>
    plan.mealType
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="myplans-page">
      <motion.div
        className="myplans-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>🥗 My Meal Plans</h1>

        <button
          className="pdf-btn"
          onClick={exportPDF}
        >
          📄 Export PDF
        </button>

        <input
          type="text"
          placeholder="Search meal plans..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-box"
        />

        {plans.length === 0 ? (

          <div className="empty-state">
            <h2>🍽️ No Meal Plans Yet</h2>

            <p>
              Start creating healthy meal plans
              to track your nutrition journey.
            </p>

            <button
              onClick={() =>
                navigate("/new-plan")
              }
            >
              Create Your First Plan
            </button>
          </div>

        ) : (

          filteredPlans.map((plan) => (
            <motion.div
              key={plan._id}
              className="plan-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2>{plan.mealType}</h2>

              <p>
                🔥 {plan.calories} kcal
              </p>

              <p>
                🎯 {plan.goal}
              </p>

              <button
                onClick={() =>
                  deletePlan(plan._id)
                }
              >
                Delete
              </button>
            </motion.div>
          ))

        )}
      </motion.div>
    </div>
  );
}