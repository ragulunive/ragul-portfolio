import React from 'react';
import { ExternalLink, Github, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Microservices Platform',
      description: 'Scalable microservices architecture handling 100K+ daily transactions with event-driven communication and CQRS pattern implementation.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ'],
      metrics: [
        { icon: Users, label: '500K+ Users', value: '500K+' },
        { icon: TrendingUp, label: '99.9% Uptime', value: '99.9%' },
        { icon: Zap, label: '<200ms Response', value: '<200ms' },
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: [
        'Reduced infrastructure costs by 40% through containerization',
        'Implemented auto-scaling that handles 10x traffic spikes',
        'Built comprehensive monitoring and alerting system',
      ],
    },
    {
      title: 'Real-time Analytics API',
      description: 'High-throughput data processing system handling 1M+ events per minute with real-time analytics and dashboard capabilities.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'FastAPI', 'Apache Kafka', 'ClickHouse', 'Redis', 'Grafana'],
      metrics: [
        { icon: Zap, label: '1M+ Events/Min', value: '1M+' },
        { icon: TrendingUp, label: '50ms Latency', value: '50ms' },
        { icon: Users, label: '1000+ Queries/Sec', value: '1000+' },
      ],
      github: 'https://github.com',
      highlights: [
        'Processes over 1.4 billion events daily',
        'Sub-second query response times for complex analytics',
        'Built distributed streaming architecture with fault tolerance',
      ],
    },
    {
      title: 'Multi-tenant SaaS Backend',
      description: 'Secure multi-tenant architecture serving 50+ enterprise clients with role-based access control and tenant isolation.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'AWS', 'Terraform'],
      metrics: [
        { icon: Shield, label: '50+ Tenants', value: '50+' },
        { icon: Users, label: '10K+ Users', value: '10K+' },
        { icon: TrendingUp, label: '99.95% SLA', value: '99.95%' },
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: [
        'Implemented row-level security for data isolation',
        'Built automated tenant provisioning system',
        'Achieved SOC 2 Type II compliance',
      ],
    },
    {
      title: 'GraphQL Federation Gateway',
      description: 'Unified API gateway federating multiple microservices with advanced caching, rate limiting, and security features.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['GraphQL', 'Apollo Federation', 'Node.js', 'Redis', 'Auth0', 'AWS'],
      metrics: [
        { icon: Zap, label: '10K+ RPS', value: '10K+' },
        { icon: TrendingUp, label: '95% Cache Hit', value: '95%' },
        { icon: Users, label: '20+ Services', value: '20+' },
      ],
      github: 'https://github.com',
      highlights: [
        'Unified 20+ microservices under single GraphQL endpoint',
        'Implemented intelligent query caching reducing latency by 60%',
        'Built comprehensive security layer with rate limiting',
      ],
    },
    {
      title: 'Blockchain Transaction Processor',
      description: 'High-performance blockchain transaction processing system with real-time validation and fraud detection capabilities.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Kubernetes', 'Prometheus'],
      metrics: [
        { icon: Zap, label: '50K+ TPS', value: '50K+' },
        { icon: Shield, label: '99.99% Accuracy', value: '99.99%' },
        { icon: TrendingUp, label: '<10ms Latency', value: '<10ms' },
      ],
      github: 'https://github.com',
      highlights: [
        'Processes over 50,000 transactions per second',
        'Implemented ML-based fraud detection system',
        'Built distributed consensus mechanism',
      ],
    },
    {
      title: 'IoT Data Ingestion Platform',
      description: 'Scalable IoT data processing platform handling millions of sensor readings with real-time processing and storage.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Rust', 'Apache Kafka', 'InfluxDB', 'MQTT', 'Docker', 'Kubernetes'],
      metrics: [
        { icon: Zap, label: '5M+ Messages/Min', value: '5M+' },
        { icon: Users, label: '100K+ Devices', value: '100K+' },
        { icon: TrendingUp, label: '99.8% Uptime', value: '99.8%' },
      ],
      github: 'https://github.com',
      highlights: [
        'Handles data from 100,000+ IoT devices simultaneously',
        'Built fault-tolerant message processing pipeline',
        'Implemented predictive maintenance algorithms',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world backend systems that demonstrate scalability, performance, and reliability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-500 transition-all duration-200 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metricIndex} className="text-center">
                        <Icon className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">
                          {metric.value}
                        </div>
                        <div className="text-slate-400 text-xs">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-slate-300 text-sm flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;