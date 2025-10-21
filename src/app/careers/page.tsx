"use client";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Briefcase } from "lucide-react";

const careerPaths = [
  {
    title: "ITI Electrician",
    requirements: [
      "Minimum 50% in 10th grade",
      "Age: 16-28 years",
      "Basic mathematics and science knowledge",
      "Good physical fitness",
    ],
    duration: "2 years",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    title: "Electrical Engineer",
    requirements: [
      "Bachelor's/Master's in Electrical Engineering",
      "Strong analytical skills",
      "Technical expertise",
      "Communication skills",
      "Internship experience preferred",
    ],
    duration: "4 years",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-purple-500",
  },
  {
    title: "Commercial Electrician",
    requirements: [
      "Advanced electrical knowledge",
      "Complex system understanding",
      "Industrial experience",
      "Safety protocol expertise",
      "Project management skills",
    ],
    duration: "3-5 years experience",
    icon: <Briefcase className="w-8 h-8" />,
    color: "bg-yellow-500",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Electrical Career Paths
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore various career opportunities in the electrical field and
            find the path that matches your aspirations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div
                className={`${career.color} p-6 flex items-center justify-center text-white`}
              >
                {career.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {career.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Duration: {career.duration}
                </p>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Requirements:
                </h4>
                <ul className="space-y-2">
                  {career.requirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-yellow-500">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`/careers/${career.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="mt-6 inline-block w-full text-center bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Learn More
                </a>
              </div>
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
            Start Your Electrical Career Journey
          </h2>
          <div className="space-x-4">
            <a
              href="/apply"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/training-programs"
              className="inline-block bg-transparent border-2 border-yellow-500 text-yellow-500 dark:text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              View Training Programs
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
