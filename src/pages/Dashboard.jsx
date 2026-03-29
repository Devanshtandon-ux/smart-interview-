// src/pages/Dashboard.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ResumeAnalyzer from "../pages/ResumeAnalyzer.jsx";

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const menu = ["Dashboard", "Interviews", "Resume", "AI Feedback"];
  const features = ["Mock Interview", "Resume Analysis", "AI Feedback"];
  const stats = [
    { title: "120+", desc: "Interviews" },
    { title: "95%", desc: "Success Rate" },
    { title: "24/7", desc: "AI Support" },
  ];

  // --- Chat state for Interviews ---
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hi! I'm your AI interviewer. Let's start." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: `AI Response to: "${input}"` },
      ]);
    }, 1000);

    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen text-white overflow-hidden font-sans">

      {/* Sidebar */}
      <div className="w-64 bg-black/40 backdrop-blur-xl p-6 flex flex-col z-20 relative">
        <h1 className="text-3xl font-bold mb-10 text-purple-400">AI Prep</h1>
        <div className="space-y-3">
          {menu.map((item) => (
            <motion.div
              key={item}
              onClick={() => setActive(item)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-xl cursor-pointer transition-all ${
                active === item
                  ? "bg-purple-600/40 text-white font-semibold"
                  : "hover:bg-white/10 text-gray-200"
              }`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 relative overflow-y-auto">

        {/* Background */}
        <div
          className="fixed inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/dashboard.bg.jpg')" }}
        />
        <div className="fixed inset-0 bg-black/70 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 space-y-12">

          {/* HEADER */}
          <h1 className="text-5xl font-bold text-white mb-4">{active}</h1>
          <p className="text-gray-300 text-lg mb-6">
            {active === "Interviews"
              ? "Practice your interviews with AI in real time."
              : active === "Resume"
              ? "Upload your resume to get instant AI analysis."
              : active === "AI Feedback"
              ? "View your AI feedback and digital insights."
              : "Manage your AI interview preparation efficiently."}
          </p>

          {/* Conditional Rendering */}
          {active === "Interviews" && (
            <div className="flex flex-col h-[70vh] bg-black/30 backdrop-blur-lg p-6 rounded-3xl overflow-y-auto">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-xl px-4 py-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-purple-600 self-end text-white"
                        : "bg-white/20 text-gray-200 self-start"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                <div ref={chatEndRef}></div>
              </div>

              <div className="flex gap-3 items-center mt-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your answer..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-purple-500 px-6 py-3 rounded-2xl hover:bg-purple-600 transition font-semibold"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {active === "Resume" && <ResumeAnalyzer />}

          {active === "AI Feedback" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Resume AI Score", value: "85/100" },
                { title: "Interview AI Score", value: "90/100" },
                { title: "Confidence Level", value: "High" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 text-center shadow-md transition-all"
                >
                  <h2 className="text-2xl font-bold text-purple-400">{item.title}</h2>
                  <p className="text-gray-200 text-xl mt-2">{item.value}</p>
                </motion.div>
              ))}
            </div>
          )}

          {active === "Dashboard" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-lg cursor-pointer transition-all"
                  >
                    <h2 className="text-xl font-semibold text-purple-300 mb-2">{item}</h2>
                    <p className="text-gray-200 text-sm">
                      AI-powered tool to practice and improve your skills.
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 text-center shadow-md transition-all"
                  >
                    <h2 className="text-2xl font-bold text-purple-400">{stat.title}</h2>
                    <p className="text-gray-300">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}