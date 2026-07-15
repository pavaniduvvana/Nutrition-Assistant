import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import NewPlan from "./pages/Plans/NewPlan";
import NewSuggestion from "./pages/Plans/NewSuggestion";
import SuggestedNutrition from "./pages/Plans/SuggestedNutrition";
import MyPlans from "./pages/Plans/MyPlans";

import UserData from "./pages/User/UserData";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <Navbar />

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-plan"
          element={
            <ProtectedRoute>
              <NewPlan />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-suggestion"
          element={
            <ProtectedRoute>
              <NewSuggestion />
            </ProtectedRoute>
          }
        />

        <Route
          path="/suggested-nutrition"
          element={
            <ProtectedRoute>
              <SuggestedNutrition />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserData />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-plans"
          element={
            <ProtectedRoute>
              <MyPlans />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}