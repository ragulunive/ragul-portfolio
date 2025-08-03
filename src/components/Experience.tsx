import React from 'react';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'TechScale Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading backend development for a high-growth fintech platform serving millions of users.',
      achievements: [
        'Architected microservices platform reducing deployment time by 70%',
        'Optimized database queries improving response time from 2s to 200ms',
        'Led migration to Kubernetes reducing infrastructure costs by $500K annually',
        'Mentored 5 junior developers and established code review processes',
      ],
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Kubernetes', 'GraphQL'],
    },
    {
      title: 'Backend Developer',
      company: 'CloudFlow Systems',
      location: 'Austin, TX',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed scalable backend services for enterprise cloud management platform.',
      achievements: [
        'Built real-time analytics system processing 1M+ events per minute',
        'Implemented OAuth 2.0 authentication system supporting SSO',
        'Designed and deployed CI/CD pipeline reducing deployment errors by 85%',
        'Achieved 99.9% uptime for critical production services',
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Jenkins'],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupLab',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Contract',
      description: 'Built complete web applications for various startup clients focusing on rapid prototyping and MVP development.',
      achievements: [
        'Delivered 12+ MVP applications for different clients',
        'Reduced client time-to-market by average of 40%',
        'Implemented automated testing increasing code coverage to 90%+',
        'Built reusable component library adopted across multiple projects',
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'Express', 'AWS Lambda', 'Stripe API'],
    },
    {
      title: 'Junior Backend Developer',
      company: 'DataTech Solutions',
      location: 'New York, NY',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Developed data processing pipelines and RESTful APIs for business intelligence platform.',
      achievements: [
        'Built ETL pipelines processing 100GB+ daily data',
        'Optimized existing APIs reducing response time by 60%',
        'Implemented comprehensive logging and monitoring system',
        'Contributed to open-source projects used by the team',
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Apache Kafka', 'Elasticsearch', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A track record of delivering high-impact backend solutions across different industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-600 p-6 hover:border-blue-500 transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl font-bold text-white mb-1">
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
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="text-slate-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
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

        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;