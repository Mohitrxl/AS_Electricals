"use client";
import { motion } from "framer-motion";
import {
  FileCheck,
  Shield,
  Leaf,
  FileText,
  AlertTriangle,
  Factory,
  ScrollText,
} from "lucide-react";

const manufacturingRequirements = [
  {
    title: "Government Licenses",
    description:
      "Multiple licenses and approvals from central and state governments",
    icon: <FileCheck className="w-6 h-6" />,
    details: [
      "Factory License",
      "Trade License",
      "BIS Certification",
      "Import-Export Code (if applicable)",
    ],
  },
  {
    title: "Pollution Control",
    description: "Environmental compliance and waste management systems",
    icon: <Shield className="w-6 h-6" />,
    details: [
      "Air pollution control devices",
      "Water pollution control systems",
      "Waste management authorization",
      "Regular environmental audits",
    ],
  },
  {
    title: "Environmental Clearance",
    description: "State government permissions for environmental safety",
    icon: <Leaf className="w-6 h-6" />,
    details: [
      "Environmental Impact Assessment",
      "State PCB clearance",
      "Hazardous material handling permits",
      "Regular compliance reporting",
    ],
  },
  {
    title: "Self-Declaration",
    description: "Conformity declarations for Registration Scheme",
    icon: <FileText className="w-6 h-6" />,
    details: [
      "Product safety standards",
      "Quality management system",
      "Testing reports",
      "Technical documentation",
    ],
  },
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Factory className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Manufacturing Requirements
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Essential requirements and compliance needs for electrical
              equipment manufacturing
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {manufacturingRequirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-500">
                  {req.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {req.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {req.description}
              </p>
              <ul className="space-y-2">
                {req.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-yellow-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Important Compliance Notice
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ensure all manufacturing processes comply with the latest BIS
            standards and safety regulations. Regular audits and updates may be
            required to maintain compliance.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="/contact"
              className="flex-1 text-center bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Contact Our Experts
            </a>
            <a
              href="/download-guide"
              className="flex-1 text-center bg-transparent border-2 border-yellow-500 text-yellow-500 dark:text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Download Complete Guide
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <ScrollText className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
          <p className="text-gray-600 dark:text-gray-300">
            Need help with documentation or compliance? Our experts are here to
            assist you.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
