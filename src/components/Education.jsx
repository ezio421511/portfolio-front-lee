import React from "react";
import { useDarkMode } from "../DarkModeContext"; 

const educationDetails = [
  {
    id: 1,
    degree: "M.S. in Computer Science",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA, USA",
    duration: "2020",
    status: "Graduated",
    highlights: [
      "Specialized coursework in advanced computer science topics and software engineering.",
      "Developed strong foundations in scalable systems, algorithms, and cloud-based applications.",
      "Collaborated on academic projects with focus on performance optimization and security."
    ],
    type: "graduate"
  },
  {
    id: 2,
    degree: "Fullstack Engineering Bootcamp",
    institution: "Rithm School",
    location: "San Jose, CA, USA",
    duration: "2018",
    status: "Completed",
    highlights: [
      "Hands-on training in fullstack development using JavaScript, React, and Node.js.",
      "Built and deployed real-world projects with modern web technologies.",
      "Focused on pair programming, agile workflows, and industry best practices."
    ],
    type: "bootcamp"
  },
];

const Education = () => {
  const { darkMode } = useDarkMode();

  const GraduationCapIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  return (
    <section
      id="education"
      className={`px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 w-full transition-all duration-500 ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="w-8 h-8">
              <GraduationCapIcon />
            </div>
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-[#2C3E50]'
          }`}>
            Edu<span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">cation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {educationDetails.map((edu) => (
            <div key={edu.id} className="relative group">
              <div className={`ml-0 md:ml-20 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                darkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-blue-500/50 shadow-xl hover:shadow-2xl"
                  : "bg-white border border-gray-200/50 hover:border-blue-400/50 shadow-lg hover:shadow-xl"
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                      {edu.degree}
                    </h3>
                    <p className={`text-lg font-semibold mb-3 ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}>
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          <LocationIcon />
                        </div>
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                          {edu.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          <CalendarIcon />
                        </div>
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Key Highlights</h4>
                  <ul className="grid gap-3">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="text-sm lg:text-base leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
