import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function NewPlan() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      localStorage.setItem(
        "nutritionData",
        JSON.stringify(formData)
      );

      toast.success(
        "Diet plan generated successfully! 🎉"
      );

      setTimeout(() => {
        navigate("/suggested-nutrition");
      }, 1000);

    } catch (error) {
      toast.error(
        "Failed to generate diet plan ❌"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f8f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#2e7d32",
            textAlign: "center",
          }}
        >
          Create Diet Plan
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            required
          />

          <br /><br />

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Generate Diet Plan
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPlan;