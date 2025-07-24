import { Calendar, MapPin, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Internships = () => {
  const internships = [
    {
      company: 'Turtil.co',
      logo: '/screenshot.png',
      role: 'Backend Developer Intern',
      duration: 'May 2025 - June 2025',
      location: 'Hybrid',
      description: 'Built a comprehensive resume-job fit evaluation microservice that revolutionized their hiring process.',
      achievements: [
        'Developed FastAPI microservice with 95% accuracy in resume-job matching',
        'Implemented Docker containerization reducing deployment time by 60%',
        'Created skill-based learning path recommendations using ML algorithms'
      ],
      techStack: ['FastAPI', 'Docker', 'PostgreSQL', 'Machine Learning', 'Python'],
      demoLink: 'https://github.com/Maruthi0302/Turtil-Internship-Project/blob/main/README.md',
      githubLink: 'https://github.com/Maruthi0302/Turtil-Internship-Project',
      color: 'from-green-500 to-emerald-500',
      impact: 'Improved hiring efficiency by 40% and reduced time-to-hire by 2 weeks'
    },
    {
      company: 'TechSaksham',
      logo: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=100&h=100&fit=crop',
      role: 'AI/ML Developer Intern',
      duration: 'Dec 2024 - Jan 2025',
      location: 'Online Internship',
      description: 'Developed an intelligent NLP-powered chatbot for legal assistance, helping users navigate complex legal queries.',
      achievements: [
        'Built NLP chatbot using spaCy and Rasa with 87% query resolution rate',
        'Implemented document analysis system for legal document processing',
        'Created knowledge base with 50+ legal queries and responses'
      ],
      techStack: ['Python', 'ML', 'Scikit-learn', 'Flask', 'Numpy', 'NLP'],
      demoLink: 'https://github.com/Maruthi0302/TechSaksham-Project_4---NLP-Chatbot/blob/main/README.md',
      githubLink: 'https://github.com/Maruthi0302/TechSaksham-Project_4---NLP-Chatbot',
      color: 'from-purple-500 to-pink-500',
      impact: 'Standout with perfect working code and documentation'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            Professional Experience
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            Real-world experience building production systems and scalable solutions 
            that solve complex business problems.
          </p>
        </section>

        {/* Internships */}
        <section className="space-y-12">
          {internships.map((internship, index) => {
            const gradients = [
              'bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-emerald-500/60', // Softer green for Turtil
              'bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-pink-900/30' // TechSaksham (index 1)
            ];
            const borderGlow =
              index === 0
                ? 'border-green-300 shadow-[0_0_12px_2px_rgba(52,211,153,0.4)]'
                : 'border-purple-400 shadow-[0_0_16px_2px_rgba(192,132,252,0.7)]';
            
            return (
              <div
                key={internship.company}
                className={`glass-card p-8 rounded-xl flex flex-col justify-between transition-all duration-500 animate-slide-in-up shadow-lg ${gradients[index % 2]} border-2 ${borderGlow} hover:scale-[1.02] relative overflow-hidden`}
               style={{ animationDelay: `${index * 0.3}s`, backgroundBlendMode: 'soft-light' }}
              >
               {/* Soft white overlay for reduced brightness */}
               <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" style={{mixBlendMode: 'soft-light'}}></div>
               <div className="relative z-10">
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center mb-4">
                        <img
                          src={internship.logo}
                          alt={`${internship.company} logo`}
                          className="w-16 h-16 rounded-lg object-cover mr-4 neon-glow"
                        />
                        <div>
                          <h2 className="text-2xl font-orbitron font-bold text-neon-blue neon-text">
                            {internship.company}
                          </h2>
                          <p className="text-lg font-exo text-white/80">
                            {internship.role}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-white/70">
                          <Calendar className="h-5 w-5 mr-3 text-neon-blue" />
                          <span className="font-exo">{internship.duration}</span>
                        </div>
                        <div className="flex items-center text-white/70">
                          <MapPin className="h-5 w-5 mr-3 text-neon-purple" />
                          <span className="font-exo">{internship.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {internship.techStack.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm font-exo font-medium rounded-lg border text-center hover:scale-105 transition-all duration-300 backdrop-blur-sm ${
                              techIndex % 4 === 0 ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/50 neon-glow' :
                              techIndex % 4 === 1 ? 'bg-neon-green/20 text-neon-green border-neon-green/50 neon-glow' :
                              techIndex % 4 === 2 ? 'bg-neon-purple/20 text-neon-purple border-neon-purple/50 neon-glow' :
                              'bg-neon-pink/20 text-neon-pink border-neon-pink/50 neon-glow'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 hover:from-neon-blue hover:to-neon-purple text-black font-exo font-semibold border-0 neon-glow"
                        >
                          <a href={internship.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Demo
                          </a>
                        </Button>
                        
                        <Button
                          asChild
                          className="bg-gradient-to-r from-neon-purple/80 to-neon-pink/80 hover:from-neon-purple hover:to-neon-pink text-black font-exo font-semibold border-0 neon-glow"
                        >
                          <a href={internship.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-8">
                      <p className="text-white/80 font-exo text-lg mb-6 leading-relaxed">
                        {internship.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-blue neon-text">
                          Key Achievements
                        </h3>
                        <ul className="space-y-3">
                          {internship.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3 flex-shrink-0 neon-glow"></div>
                              <span className="text-white/80 font-exo">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-neon-green/20 to-neon-blue/20 p-4 rounded-lg border border-neon-green/30 backdrop-blur-sm neon-glow">
                        <h4 className="font-orbitron font-bold text-neon-green mb-2 neon-text">
                          Impact
                        </h4>
                        <p className="text-white/80 font-exo">
                          {internship.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Skills Gained */}
        <section className="mt-20 mb-20">
          <div className="bg-gradient-to-br from-slate-800/90 via-gray-800/30 to-slate-900/30 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center neon-glow hover:border-neon-blue/50">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-neon-blue neon-text">
              Professional Skills Gained
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-neon-blue mb-2 neon-text">API Development</div>
                <p className="text-white/70 font-exo text-sm">FastAPI, Flask, RESTful services</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-neon-green mb-2 neon-text">ML/AI Integration</div>
                <p className="text-white/70 font-exo text-sm">NLP, Model deployment, Data processing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-neon-purple mb-2 neon-text">DevOps</div>
                <p className="text-white/70 font-exo text-sm">Docker, CI/CD, Cloud deployment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-neon-pink mb-2 neon-text">System Design</div>
                <p className="text-white/70 font-exo text-sm">Microservices, Database optimization</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Internships;
