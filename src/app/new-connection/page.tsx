"use client";
import { motion } from "framer-motion";
import { FileCheck, Home, Building2, Image as ImageIcon } from "lucide-react";

const requirements = [
  {
    title: "Identity Proof",
    description:
      "Valid government-issued ID such as Aadhaar card, passport, or voter ID",
    icon: <FileCheck className="w-6 h-6" />,
    category: "both",
  },
  {
    title: "Address Proof",
    description:
      "Rent agreement, utility bill, or government document with new address",
    icon: <Home className="w-6 h-6" />,
    category: "both",
  },
  {
    title: "Photographs",
    description: "Two recent passport-sized photographs",
    icon: <ImageIcon className="w-6 h-6" />,
    category: "both",
  },
  {
    title: "Commercial Documents",
    description: "Additional documentation for business establishments",
    icon: <Building2 className="w-6 h-6" />,
    category: "commercial",
  },
];

export default function NewConnection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          New Connection Requirements
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Residential Connection
            </h2>
            <div className="space-y-6">
              {requirements
                .filter((req) => req.category === "both")
                .map((req, index) => (
                  <motion.div
                    key={req.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-yellow-500">{req.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {req.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {req.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Commercial Connection
            </h2>
            <div className="space-y-6">
              {requirements
                .filter(
                  (req) =>
                    req.category === "both" || req.category === "commercial"
                )
                .map((req, index) => (
                  <motion.div
                    key={req.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-yellow-500">{req.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {req.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {req.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            Apply for New Connection
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
