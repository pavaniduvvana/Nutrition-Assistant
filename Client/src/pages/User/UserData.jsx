import { useState } from "react";
import { motion } from "framer-motion";
import "./UserData.css";
import API from "../../services/api";
import toast from "react-hot-toast";

export default function UserData() {
 const storedData = JSON.parse(
  localStorage.getItem("user")
);

const user = storedData?.user || storedData;

const [profile, setProfile] = useState({
  age: user?.age || "",
  height: user?.height || "",
  weight: user?.weight || "",
  goal: user?.goal || "",
});

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
  try {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const userInfo = currentUser.user || currentUser;

    const response = await API.put(
      "/users/profile",
      {
        email: userInfo.email,
        ...profile,
      }
    );

    // Preserve token if it exists
    const updatedUser = currentUser.token
      ? {
          token: currentUser.token,
          user: response.data,
        }
      : response.data;

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

   toast.success("Profile updated successfully!");

  } catch (error) {
    console.log(error);
    console.log(error.response?.data);

    alert(
      error.response?.data?.message ||
      error.message ||
      "Failed to update profile"
    );
  }
};

  return (
    <div className="profile-page">
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>👤 My Profile</h1>

        <p className="subtitle">
          Complete your health information for personalized recommendations.
        </p>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
        />

        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={profile.height}
          onChange={handleChange}
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={profile.weight}
          onChange={handleChange}
        />

        <select
          name="goal"
          value={profile.goal}
          onChange={handleChange}
        >
          <option value="">Select Goal</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Weight Gain">Weight Gain</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="Healthy Lifestyle">
            Healthy Lifestyle
          </option>
        </select>

        <button onClick={handleSave}>
          Save Profile
        </button>
      </motion.div>
    </div>
  );
}