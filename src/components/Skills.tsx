import React from 'react';
import { Server, Code, Database, Cloud, Settings, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Go', level: 80 },
        { name: 'Rust', level: 70 },
        { name: 'C#', level: 75 },
      ],
    },
    {
      icon: Server,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js/Express', level: 95 },
        { name: 'Django/FastAPI', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'GraphQL', level: 90 },
        { name: 'gRPC', level: 85 },
        { name: 'Socket.io', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 95 },
        { name: 'MongoDB', level: 90 },
        { name: 'Redis', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Elasticsearch', level: 80 },
        { name: 'Neo4j', level: 70 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Docker/Kubernetes', level: 90 },
        { name: 'Google Cloud Platform', level: 85 },
        { name: 'Azure', level: 80 },
        { name: 'Terraform', level: 85 },
        { name: 'Serverless Framework', level: 80 },
      ],
    },
    {
      icon: Settings,
      title: 'DevOps Tools',
      skills: [
        { name: 'CI/CD (GitHub Actions)', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'Monitoring (Datadog)', level: 90 },
        { name: 'ELK Stack', level: 85 },
        { name: 'Nginx', level: 90 },
        { name: 'Load Balancing', level: 85 },
      ],
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      skills: [
        { name: 'OAuth 2.0/JWT', level: 95 },
        { name: 'API Security', level: 90 },
        { name: 'Unit Testing', level: 95 },
        { name: 'Integration Testing', level: 90 },
        { name: 'Security Auditing', level: 85 },
        { name: 'Penetration Testing', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable backend systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-200"
              >
                <div className="flex items-center mb-6">
                  <Icon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-500 text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;