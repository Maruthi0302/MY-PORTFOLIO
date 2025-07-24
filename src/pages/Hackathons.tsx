import { MapPin, Calendar, Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hackathons = () => {
  const hackathons = [
    {
      name: 'HackFusion 2.0',
      location: 'Maharashtra, India',
      date: 'February 2025',
      project: 'Automated Paper-less communication',
      description: 'Developed a Automated paper-less communication system for college with centralized Data Base System using MongoDB',
      techStack: ['React', 'Node.js', 'MongoDB', 'Blockchain', 'Socket.io'],
      demoLink: 'https://college-voting-demo.com',
      impact: 'Manage communication in within college hierarchy (Principal - Deans - HODs - Students)',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Buildverse',
      location: 'Bangalore, India',
      date: 'May 2024',
      project: 'EcoVeda Pitch',
      description: 'Presented EcoVeda - a gamified sustainable living platform at Scaler\'s premier hackathon, focusing on environmental impact.',
      techStack: ['React', 'Node.js', 'AI/ML', 'Gamification', 'MongoDB'],
      demoLink: 'https://ecoveda-demo.com',
      impact: 'Attracted 50+ beta users and partnership interest from NGOs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Hack4SDG',
      location: 'IIT Hyderabad',
      date: 'October 2024',
      project: 'Giving Plate',
      description: 'Developed AI-powered platform connecting food donors with NGOs to tackle food waste and hunger using machine learning.',
      techStack: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'React'],
      demoLink: 'https://givingplate-demo.com',
      impact: 'Connected 100+ donors with 20+ NGOs in prototype phase',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'SIH internal hackathon',
      location: 'Vignan VITS',
      date: 'March 2025',
      project: 'EcoVeda',
      description: 'Developed EcoVeda, a gamified platform to promote sustainable living and eco-friendly habits among students.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Gamification', 'Tailwind CSS'],
      demoLink: 'https://ecoveda-demo.com',
      impact: 'Engaged among 200+ students in sustainability challenge and increased awareness on campus.',
      color: 'from-blue-400 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            Hackathon Journey
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            Innovative solutions built under pressure, showcasing rapid prototyping skills 
            and creative problem-solving in competitive environments.
          </p>
        </section>

        {/* Hackathon Cards */}
        <section className="relative mb-20">
          <div className="grid gap-8">
            {hackathons.map((hackathon, index) => {
              const gradients = [
                'bg-gradient-to-br from-slate-800/90 via-blue-900/30 to-purple-900/30',
                'bg-gradient-to-br from-slate-800/90 via-emerald-900/30 to-teal-900/30', 
                'bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-pink-900/30'
              ];
              
              return (
                <div
                  key={hackathon.name}
                  className={`glass-card p-8 rounded-xl flex flex-col justify-between transition-all duration-500 animate-slide-in-up shadow-lg bg-gradient-to-br ${gradients[index % 3]} border-2
                   ${index % 3 === 0
                     ? 'border-blue-400 shadow-[0_0_16px_2px_rgba(56,189,248,0.7)]'
                     : index % 3 === 1
                     ? 'border-emerald-400 shadow-[0_0_16px_2px_rgba(52,211,153,0.7)]'
                     : 'border-purple-400 shadow-[0_0_16px_2px_rgba(192,132,252,0.7)]'}
                   hover:scale-[1.02] relative overflow-hidden`}
                 style={{ animationDelay: `${index * 0.2}s`, backgroundBlendMode: 'soft-light' }}
                >
                  {/* Soft white overlay for reduced brightness */}
                  <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" style={{mixBlendMode: 'soft-light'}}></div>
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-3 neon-text" style={{ textShadow: '0 0 8px #60a5fa, 0 0 16px #fff' }}>
                          {hackathon.name}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-white/80 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-neon-blue" />
                            <span className="font-exo text-sm text-white/90">{hackathon.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-neon-purple" />
                            <span className="font-exo text-sm text-white/90">{hackathon.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Project Details */}
                      <div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-3 neon-text" style={{ textShadow: '0 0 8px #60a5fa, 0 0 16px #fff' }}>
                          {hackathon.project}
                        </h3>
                        <p className="text-white/80 font-exo leading-relaxed mb-4">
                          {hackathon.description}
                        </p>
                        <div className="bg-gradient-to-r from-neon-green/20 to-neon-blue/20 p-4 rounded-lg border border-neon-green/30 mb-4 backdrop-blur-sm">
                          <h4 className="font-orbitron font-bold text-neon-green mb-2 text-sm neon-text">Impact</h4>
                          <p className="text-white/90 font-exo text-sm">{hackathon.impact}</p>
                        </div>
                      </div>
                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-orbitron font-bold text-neon-yellow mb-4 neon-text">Technologies Used</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {hackathon.techStack.map((tech, techIndex) => (
                            <div
                              key={tech}
                              className={`px-4 py-2 text-sm font-exo font-medium rounded-lg border text-center hover:scale-105 transition-all duration-300 backdrop-blur-sm ${
                                techIndex % 4 === 0 ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/50 neon-glow' :
                                techIndex % 4 === 1 ? 'bg-neon-green/20 text-neon-green border-neon-green/50 neon-glow' :
                                techIndex % 4 === 2 ? 'bg-neon-purple/20 text-neon-purple border-neon-purple/50 neon-glow' :
                                'bg-neon-pink/20 text-neon-pink border-neon-pink/50 neon-glow'
                              }`}
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-slate-800/90 via-gray-800/30 to-slate-900/30 backdrop-blur-md border border-white/20 rounded-xl p-8 neon-glow hover:border-neon-blue/50">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-8 text-neon-blue neon-text">
              Hackathon Achievements
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-blue mb-2 neon-text">6+</div>
                <p className="text-white/70 font-exo">Hackathons Attended</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-green mb-2 neon-text">72</div>
                <p className="text-white/70 font-exo">Average Hours Coded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-purple mb-2 neon-text">5</div>
                <p className="text-white/70 font-exo">Different Tech Stacks</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-pink mb-2 neon-text">80%</div>
                <p className="text-white/70 font-exo">Project Completion Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Developed */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-8 text-neon-blue neon-text">
            Skills Developed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Rapid Prototyping',
              'Team Collaboration',
              'Time Management',
              'Creative Problem Solving',
              'Presentation Skills',
              'Technology Integration'
            ].map((skill, index) => {
              const skillGradients = [
                'bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border-neon-blue/50',
                'bg-gradient-to-br from-neon-green/20 to-neon-blue/20 border-neon-green/50',
                'bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 border-neon-purple/50',
                'bg-gradient-to-br from-neon-pink/20 to-neon-yellow/20 border-neon-pink/50',
                'bg-gradient-to-br from-neon-yellow/20 to-neon-green/20 border-neon-yellow/50',
                'bg-gradient-to-br from-neon-blue/20 to-neon-green/20 border-neon-blue/50'
              ];
              
              const textColors = [
                'text-neon-blue neon-text',
                'text-neon-green neon-text', 
                'text-neon-purple neon-text',
                'text-neon-pink neon-text',
                'text-neon-yellow neon-text',
                'text-neon-blue neon-text'
              ];
              
              return (
                <div
                  key={skill}
                  className={`${skillGradients[index % 6]} backdrop-blur-md border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-slide-in-up neon-glow`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className={`font-orbitron font-bold mb-2 ${textColors[index % 6]}`}>
                    {skill}
                  </h3>
                  <p className="text-white/70 font-exo text-sm">
                    Mastered through intense hackathon environments
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hackathons;
