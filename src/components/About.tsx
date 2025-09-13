"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white relative inline-block">
          About Us
          <span className="block w-16 sm:w-20 lg:w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded"></span>
        </h2>

        {/* Intro */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          At{" "}
          <span className="text-amber-600 dark:text-amber-400 font-semibold">
            Reliable Electrical Services (RES)
          </span>
          , we take pride in being one of the most trusted names in the
          electrical industry. With years of experience, we specialize in
          delivering innovative, safe, and cost-effective solutions for{" "}
          <strong>residential, commercial, and industrial projects</strong>.
        </p>

        {/* Details */}
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Our team of certified electricians and engineers ensures that every
          project — whether a simple home wiring upgrade, a complex commercial
          installation, or a large-scale industrial setup — is completed with
          precision, safety, and efficiency.
        </p>

        {/* Values Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Safety First",
              desc: "Strict adherence to national and international electrical standards.",
            },
            {
              title: "Innovation",
              desc: "Modern technology like smart home automation and energy-efficient systems.",
            },
            {
              title: "Reliability",
              desc: "24/7 support and quick response to emergency service calls.",
            },
            {
              title: "Sustainability",
              desc: "Promoting eco-friendly electrical solutions and renewable energy systems.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl">⚡</div>
              <h3 className="mt-3 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <p className="mt-10 text-base sm:text-lg lg:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
          At RES, our mission is simple:{" "}
          <span className="text-amber-600 dark:text-amber-400 font-bold">
            Powering homes, businesses, and industries with dependable solutions
            you can trust.
          </span>
        </p>
      </div>
    </section>
  );
}
