import React from "react";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      value: "3+",
      label: "Projects Worked",
    },
    {
      icon: Users,
      value: "30+",
      label: "Clients Served",
    },
    {
      icon: Clock,
      value: "3+",
      label: "Years Experience",
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "System Uptime",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building robust backend systems that scale and perform under
            pressure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a passionate backend developer who thrives on solving
                complex technical challenges. With over 3 years of experience in
                building distributed systems, I've had the privilege of working
                with startups and enterprise companies to architect solutions
                that scale from thousands to millions of users.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                My expertise lies in designing microservices architectures,
                optimizing database performance, and implementing robust APIs
                that form the backbone of modern applications. I'm particularly
                passionate about cloud-native development, DevOps practices, and
                building systems that are not just functional, but maintainable
                and efficient.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source
                projects, writing technical blogs, or mentoring junior
                developers. I believe in continuous learning and staying
                up-to-date with the latest industry trends and technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "System Architecture",
                "API Design",
                "Database Optimization",
                "Cloud Infrastructure",
                "DevOps",
                "Microservices",
                "Performance Tuning",
                "Security",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-md text-sm border border-blue-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-600 text-center hover:bg-slate-750 transition-colors duration-200"
                >
                  <Icon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
