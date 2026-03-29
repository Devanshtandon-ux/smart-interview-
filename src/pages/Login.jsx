// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Demo credentials (hidden)
  const demoEmail = "devansh123@gmail.com";
  const demoPassword = "password123";

  const handleLogin = () => {
    if (email === demoEmail && password === demoPassword) {
      setError("");
      navigate("/dashboard"); // Go to dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/login-bg.jpg')" }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>

      {/* Login Card */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-md mx-auto mt-24 bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl text-white"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-400">
          AI Prep Login
        </h1>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 mb-4 text-center font-medium"
          >
            {error}
          </motion.p>
        )}

        <div className="flex flex-col gap-4">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#9f7aea" }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 placeholder-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#9f7aea" }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/20 placeholder-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(159,122,234,0.6)" }}
            onClick={handleLogin}
            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-xl mt-2 font-semibold transition"
          >
            Login
          </motion.button>
        </div>

        <p className="mt-4 text-center text-gray-300">
          Don't have an account?{" "}
          <span
            className="text-purple-400 hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </motion.div>
    </div>
  );
}