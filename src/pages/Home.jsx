// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LearnMore from "../pages/LearnMore";
import ParticlesBg from "../components/Particlesbg";
import Stats from "../components/Stats";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <div className="h-screen relative text-white overflow-hidden">

        {/* 🌌 Animated Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>

        {/* 🔥 NAVBAR */}
        <div className="relative z-20 flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-xl border-b border-white/10">
          
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-purple-400"
          >
            AI Prep
          </motion.h1>

          <div className="hidden md:flex gap-8">
            {["Home", "Features", "Contact"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer text-gray-300 hover:text-purple-400"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => navigate("/login")}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-700"
          >
            Login
          </motion.button>
        </div>

        {/* 💎 HERO CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center h-[80%] px-6 text-center">

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl font-extrabold">
              Crack Your Dream Job
            </h1>

            <h2 className="text-purple-400 text-5xl font-bold mt-2">
              with AI
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-xl mt-6 mb-8 text-gray-200"
          >
            Practice interviews, get real-time AI feedback, and boost your confidence to land top MNC jobs.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.button
              onClick={() => navigate("/login")}
              whileHover={{ scale: 1.08 }}
              className="bg-purple-600 px-8 py-3 rounded-xl"
            >
              Get Started 🚀
            </motion.button>

            <motion.button
              onClick={() =>
                document.getElementById("learn-more").scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              className="border border-white px-8 py-3 rounded-xl"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* ✨ FLOATING CARD (CENTERED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 w-full flex justify-center px-4"
        >
          <div className="text-center backdrop-blur-xl bg-white/20 px-6 py-3 rounded-xl border border-white/30 shadow-2xl">
            💡 AI-powered mock interviews | Real-time feedback | Resume analysis
          </div>
        </motion.div>
      </div>

      {/* 🔽 LEARN MORE SECTION */}
      <LearnMore />
    </>
  );
}