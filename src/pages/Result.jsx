// src/components/AiFeedback.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AiFeedback({ data }) {
  if (!data) return null;

  const feedbackItems = [
    { title: "Resume Score", value: data.resumeScore, type: "progress" },
    { title: "Skills Match", value: data.skillsMatch, type: "progress" },
    { title: "Career Fit", value: data.careerFit, type: "text" },
    { title: "Suggested Field", value: data.suggestedField, type: "text" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {feedbackItems.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-700/50 to-purple-500/50 backdrop-blur-xl p-6 rounded-3xl border border-purple-400/40 shadow-lg relative overflow-hidden"
        >
          <h2 className="text-xl font-semibold text-purple-200 mb-2">{item.title}</h2>

          {item.type === "progress" ? (
            <div className="w-full bg-purple-900/30 h-4 rounded-xl mt-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-4 bg-purple-400 rounded-xl shadow-inner"
              />
            </div>
          ) : (
            <p className="text-white text-lg mt-2">{item.value}</p>
          )}

          {/* Neon glow effect */}
          <div className="absolute inset-0 border-2 border-purple-400/20 rounded-3xl pointer-events-none animate-pulse"></div>
        </motion.div>
      ))}
    </div>
  );
}