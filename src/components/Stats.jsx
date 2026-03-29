import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "10K+", label: "Interviews Taken" },
    { number: "95%", label: "Success Rate" },
    { number: "500+", label: "Companies Covered" },
  ];

  return (
    <div className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-10">
        Trusted by Thousands 🚀
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-lg"
          >
            <h3 className="text-4xl font-bold text-purple-400">
              {item.number}
            </h3>
            <p className="mt-2 text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}