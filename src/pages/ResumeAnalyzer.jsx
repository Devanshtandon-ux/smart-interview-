// src/components/ResumeAnalyzer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ResumeAnalyzer({ onAnalyze }) {
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    // Simulate AI analysis with predictable results
    const result = {
      resumeScore: 87,
      skillsMatch: 90,
      careerFit: "Sales & Marketing",
      suggestedField: "Developer / Tech / Marketing",
    };
    setAnalysis(result);

    // Pass results to Dashboard for AI Feedback
    if (onAnalyze) onAnalyze(result);
  };

  return (
    <div className="flex flex-col gap-6 bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-white">
      <h2 className="text-2xl font-bold text-purple-400">Resume Analyzer</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleUpload}
        className="text-gray-200 p-2 bg-white/20 rounded-lg"
      />

      {fileName && <p className="text-gray-300">Uploaded: {fileName}</p>}

      {analysis && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
        >
          {Object.entries(analysis).map(([key, value]) => (
            <div
              key={key}
              className="bg-purple-600/20 backdrop-blur-xl p-4 rounded-2xl text-center"
            >
              <h3 className="text-lg font-semibold text-purple-300">{key}</h3>
              <p className="text-white mt-2">{value}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}