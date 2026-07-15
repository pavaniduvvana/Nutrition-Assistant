function SuggestedNutrition() {

  const data =
    JSON.parse(
      localStorage.getItem("nutritionData")
    ) || {};

  const age = Number(data.age);
  const height = Number(data.height);
  const weight = Number(data.weight);

  const bmi = (
    weight /
    ((height / 100) * (height / 100))
  ).toFixed(1);

  let suggestion = "";
  let calories = 0;

  if (bmi < 18.5) {
    suggestion = "Increase healthy calorie intake.";
    calories = 2400;
  } else if (bmi < 25) {
    suggestion = "Maintain your current lifestyle.";
    calories = 2000;
  } else {
    suggestion = "Reduce processed foods and exercise regularly.";
    calories = 1700;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f8f4",
        padding: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#2e7d32",
            textAlign: "center",
          }}
        >
          🥗 Personalized Nutrition Plan
        </h1>

        <hr />

        <h3>BMI: {bmi}</h3>
        <h3>Recommended Calories: {calories} kcal/day</h3>
        <h3>Water Intake: 2.5 - 3 Liters/day</h3>

        <br />

        <h2>Breakfast 🍳</h2>
        <p>Oats + Milk + Banana + Almonds</p>

        <h2>Lunch 🍚</h2>
        <p>Brown Rice + Dal + Vegetables + Curd</p>

        <h2>Dinner 🥗</h2>
        <p>2 Chapatis + Paneer + Salad</p>

        <h2>Healthy Snacks 🍎</h2>
        <p>Fruits, Nuts, Green Tea</p>

        <h2>Recommendation 💡</h2>

        <p>{suggestion}</p>

        <br />

        <h2>Daily Tips</h2>

        <ul>
          <li>Drink enough water.</li>
          <li>Walk 30 minutes daily.</li>
          <li>Sleep 7–8 hours.</li>
          <li>Avoid processed foods.</li>
          <li>Eat seasonal fruits.</li>
        </ul>

      </div>
    </div>
  );
}

export default SuggestedNutrition;