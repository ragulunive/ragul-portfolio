import React from "react";
import { Code, Database, Server, Wrench } from "lucide-react";

const Skills: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: "Programming Languages",
      items: ["JavaScript", "Python"],
    },
    {
      icon: Database,
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      icon: Server,
      title: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      icon: Wrench,
      title: "Tools",
      items: ["Git"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg">
            Core technologies I work with in backend development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
