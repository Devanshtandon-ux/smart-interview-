// src/pages/Interview.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Interview() {
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hi! I'm your AI interviewer. Let's start." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    // User message
    setMessages((prev) => [...prev, { type: "user", text: input }]);

    // Simulate AI response
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
    <div
      className="flex flex-col min-h-screen text-white"
      style={{ backgroundImage: "url('/dashboard-bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="flex-1 backdrop-blur-md bg-black/50 p-6 overflow-y-auto flex flex-col">
        <h1 className="text-4xl font-bold mb-6 text-purple-400">AI Interview</h1>

        {/* Chat Box */}
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

        {/* Input Area */}
        <div className="flex gap-3 items-center">
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
    </div>
  );
}