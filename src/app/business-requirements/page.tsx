"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Award,
  DollarSign,
  ClipboardCheck,
  Calculator,
  Wrench,
} from "lucide-react";

const businessRequirements = [
  {
    title: "Business Plan",
    description:
      "A comprehensive plan outlining your business strategy, target market, and financial projections",
    icon: <FileText className="w-6 h-6" />,
    color: "text-blue-500",
  },
  {
    title: "Training and Licensing",
    description:
      "Required state electrical license and professional certifications",
    icon: <Award className="w-6 h-6" />,
    color: "text-green-500",
  },
  {
    title: "Funding",
    description:
      "Initial capital investment and working capital for operations",
    icon: <DollarSign className="w-6 h-6" />,
    color: "text-yellow-500",
  },
  {
    title: "Registration and Insurance",
    description:
      "Business registration, liability insurance, and worker's compensation",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "text-purple-500",
  },
  {
    title: "Accounting System",
    description: "Professional accounting setup for business finances",
    icon: <Calculator className="w-6 h-6" />,
    color: "text-red-500",
  },
  {
    title: "Tools and Supplies",
    description: "Essential electrical equipment and inventory management",
    icon: <Wrench className="w-6 h-6" />,
    color: "text-indigo-500",
  },
];

export default function BusinessRequirements() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Start Your Electrical Business
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Everything you need to know about starting and running a successful
          electrical business
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessRequirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`${req.color} mb-4`}>{req.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {req.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {req.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Ready to Get Started?
          </h2>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/resources"
              className="inline-block bg-transparent border-2 border-yellow-500 text-yellow-500 dark:text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Download Guide
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
