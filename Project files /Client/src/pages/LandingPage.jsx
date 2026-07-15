import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import landingBg from "../assets/landing-bg.png";

export default function LandingPage() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>

        <nav style={styles.navbar}>
          <h2 style={styles.logo}>🥗 Nutrition Assistant</h2>

          <div style={styles.navLinks}>
            <Link to="/login" style={styles.loginBtn}>
              Login
            </Link>

            <Link to="/register" style={styles.registerBtn}>
              Register
            </Link>
          </div>
        </nav>

        <section style={styles.hero}>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.left}
          >
            <div style={styles.badge}>
              🌿 Eat Healthy, Live Better
            </div>

            <h1 style={styles.title}>
              Your Health,
              <br />
              <span style={styles.greenText}>
                Our Priority
              </span>
            </h1>

            <p style={styles.subtitle}>
              Get personalized nutrition plans, track your meals,
              and achieve your health goals with AI-powered guidance.
            </p>

            <div style={styles.actions}>
              <Link to="/register" style={styles.primaryBtn}>
                Get Started →
              </Link>

              <Link to="/login" style={styles.secondaryBtn}>
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            style={styles.summaryCard}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Today's Summary</h2>

            <div style={styles.stat}>
              <span>🔥 Calories</span>
              <strong>1850 kcal</strong>
            </div>

            <div style={styles.stat}>
              <span>💪 Protein</span>
              <strong>82 g</strong>
            </div>

            <div style={styles.stat}>
              <span>💧 Water</span>
              <strong>2.4 L</strong>
            </div>

            <div style={styles.stat}>
              <span>🎯 Goal Progress</span>
              <strong>78%</strong>
            </div>

            <div style={styles.progressBar}>
              <div style={styles.progress}></div>
            </div>
          </motion.div>

        </section>

        <motion.div
          style={styles.features}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div style={styles.featureCard}>
            🌱
            <h3>Healthy Recipes</h3>
            <p>Discover nutritious meals tailored for you.</p>
          </div>

          <div style={styles.featureCard}>
            📊
            <h3>Nutrition Tracking</h3>
            <p>Monitor calories, protein, and hydration easily.</p>
          </div>

          <div style={styles.featureCard}>
            ❤️
            <h3>Personalized Plans</h3>
            <p>AI-generated plans based on your goals.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

const styles = {
container: {
  minHeight: "100vh",
  backgroundImage: `
    linear-gradient(
      rgba(0, 40, 20, 0.55),
      rgba(0, 40, 20, 0.70)
    ),
    url(${landingBg})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  color: "white",
  fontFamily: "Segoe UI, sans-serif",
},
  overlay: {
    minHeight: "100vh",
    padding: "0 80px",
    backdropFilter: "blur(2px)",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 0",
  },

  logo: {
    fontWeight: "700",
    letterSpacing: "1px",
  },

  navLinks: {
    display: "flex",
    gap: "15px",
  },

  loginBtn: {
    color: "white",
    textDecoration: "none",
    padding: "12px 18px",
  },

  registerBtn: {
    background: "#84cc16",
    color: "white",
    textDecoration: "none",
    padding: "12px 22px",
    borderRadius: "12px",
    fontWeight: "bold",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "75vh",
    gap: "80px",
  },

  left: {
    maxWidth: "600px",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "999px",
    marginBottom: "25px",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: "72px",
    lineHeight: 1.1,
    marginBottom: "20px",
  },

  greenText: {
    color: "#84cc16",
  },

  subtitle: {
    fontSize: "20px",
    lineHeight: 1.8,
    maxWidth: "550px",
    opacity: 0.9,
  },

  actions: {
    display: "flex",
    gap: "20px",
    marginTop: "35px",
  },

  primaryBtn: {
    background: "#84cc16",
    color: "white",
    textDecoration: "none",
    padding: "16px 28px",
    borderRadius: "14px",
    fontWeight: "bold",
  },

  secondaryBtn: {
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    textDecoration: "none",
    padding: "16px 28px",
    borderRadius: "14px",
    backdropFilter: "blur(10px)",
  },

  summaryCard: {
    width: "360px",
    padding: "35px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.10)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.15)",
  },

  stat: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "22px",
    paddingBottom: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },

  progressBar: {
    marginTop: "30px",
    height: "10px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "999px",
  },

  progress: {
    width: "78%",
    height: "100%",
    background: "#84cc16",
    borderRadius: "999px",
  },

  features: {
    display: "flex",
    gap: "25px",
    paddingBottom: "40px",
  },

  featureCard: {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
  },
};