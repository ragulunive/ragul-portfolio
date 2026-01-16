import React from "react";
import { MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Aaruraa Technologies Pvt Ltd",
      location: "India",
      period: "Mar 2023 - Present",
      type: "Full-time",
      description:
        "Backend development for a multi-company ERP system with a strong focus on MySQL performance, secure APIs, and scalable architecture.",
      achievements: [
        "Developed REST APIs for a multi-company ERP system enabling automated sales-to-purchase data flow across linked organizations",
        "Implemented authentication and authorization using role-based access control (RBAC) to secure add, edit, and delete operations",
        "Optimized MySQL queries using indexing and performance tuning techniques to improve reporting and transaction efficiency",
        "Designed and maintained MVC-based backend architecture for scalable and maintainable code",
        "Built Excel bulk upload functionality with JSON validation to reduce manual data entry during onboarding",
        "Developed and maintained core master data modules ensuring data consistency and accuracy across the ERP ecosystem",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "REST API",
        "MVC Architecture",
        "Git",
      ],
    },
    {
      title: "Junior Engineer (QA/QC)",
      company: "Patel Infrastructure Limited",
      location: "India",
      period: "Mar 2021 - May 2022",
      type: "Full-time",
      description:
        "Worked in quality assurance and quality control processes for large-scale infrastructure projects, ensuring compliance with engineering standards.",
      achievements: [
        "Performed QA/QC inspections to ensure materials and construction met required standards",
        "Maintained detailed documentation and reports for quality audits",
        "Coordinated with engineering and site teams to resolve quality-related issues",
        "Ensured adherence to safety, quality, and project specifications",
      ],
      technologies: [
        "QA/QC",
        "Documentation",
        "Process Compliance",
        "Reporting",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hands-on experience in backend development and enterprise systems
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-600 p-6 hover:border-blue-500 transition"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">
                  {experience.title}
                </h3>
                <div className="text-blue-500 font-semibold text-lg mb-2">
                  {experience.company}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </div>
                  <div className="px-2 py-1 bg-slate-800 text-blue-400 rounded text-xs">
                    {experience.type}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-md text-sm border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
