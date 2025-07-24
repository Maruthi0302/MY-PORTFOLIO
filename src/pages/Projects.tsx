import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'EcoVeda',
      description: 'Gamified sustainable living platform that encourages eco-friendly habits through interactive challenges and rewards.',
      // image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
      image: '/images/ecoveda.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Gamification API'],
      liveDemo: 'https://eco-veda.vercel.app/',
      github: 'https://github.com/Maruthi0302/EcoVeda',
      color: 'from-green-400 to-emerald-600',
      featured: true
    },
    {
      title: 'Giving Plate',
      description: 'AI-powered platform connecting food donors with NGOs to reduce food waste and help communities in need.',
      // image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop',
      image: '/images/givingplate.png',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'AWS'],
      liveDemo: 'https://giving-plate.vercel.app/',
      github: 'https://github.com/Maruthi0302/GIVING-PLATE',
      color: 'from-orange-400 to-red-600',
      featured: true
    },
    {
      title: 'News Filter',
      description: 'Machine learning-powered fake news detection system using NLP to analyze and classify news articles.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tech: ['Python', 'Scikit-learn', 'NLTK', 'Flask', 'React'],
      liveDemo: 'https://github.com/Maruthi0302/News-Filter',
      github: 'https://github.com/Maruthi0302/News-Filter',
      color: 'from-purple-400 to-pink-600',
      featured: false
    },
    {
      title: 'Legal Assistant Chatbot',
      description: 'NLP-powered chatbot providing legal assistance and document analysis for common legal queries.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      tech: ['Python', 'spaCy', 'Rasa', 'Flask', 'Vue.js'],
      liveDemo: 'https://legal-assistant-demo.com',
      github: 'https://github.com/username/legal-assistant',
      color: 'from-indigo-400 to-purple-600',
      featured: false
    },
    {
      title: 'Resume-Job Fit Evaluator',
      description: 'Microservice that evaluates resume compatibility with job descriptions using ML algorithms.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tech: ['FastAPI', 'Docker', 'Scikit-learn', 'PostgreSQL', 'Redis'],
      liveDemo: 'https://github.com/Maruthi0302/Turtil-Internship-Project',
      github: 'https://github.com/Maruthi0302/Turtil-Internship-Project',
      color: 'from-teal-400 to-cyan-600',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            Project Portfolio
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            A showcase of innovative solutions built with cutting-edge technologies, 
            from AI-powered platforms to sustainable tech initiatives.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold mb-8 neon-text">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card overflow-hidden hover:scale-105 transition-all duration-500 group animate-slide-in-up bg-gradient-to-br ${project.color} bg-opacity-5`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl text-white font-orbitron font-bold mb-3 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 font-exo mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-exo font-medium bg-white/10 text-white/80 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      className="flex-1 bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold"
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold mb-8 neon-text">
            More Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              // Harmonized glassmorphism gradients for each card
              // Order: blue-cyan, purple-pink (for News Filter), teal-emerald, repeat
              const cardGradients = [
                'from-blue-900/80 via-cyan-700/70 to-cyan-500/60', // blue-cyan
                'from-purple-500/80 via-pink-500/70 to-pink-400/60', // purple-pink (for News Filter)
                'from-teal-900/80 via-emerald-700/70 to-emerald-500/60', // teal-emerald
              ];
              const borderGlow =
                index % 3 === 0
                  ? 'border-blue-400 shadow-[0_0_16px_2px_rgba(56,189,248,0.7)]'
                  : index % 3 === 1
                  ? 'border-purple-400 shadow-[0_0_16px_2px_rgba(232,121,249,0.7)]'
                  : 'border-emerald-400 shadow-[0_0_16px_2px_rgba(52,211,153,0.7)]';
              return (
                <div
                  key={project.title}
                  className={`glass-card p-6 rounded-xl flex flex-col justify-between transition-all duration-300 group animate-slide-in-up bg-gradient-to-br ${cardGradients[index % 3]} border-2 ${borderGlow} hover:scale-105 relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s`, backgroundBlendMode: 'soft-light' }}
                >
                  {/* Soft white overlay for reduced brightness */}
                  <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" style={{mixBlendMode: 'soft-light'}}></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-orbitron font-bold mb-3 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 font-exo text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-exo font-medium bg-white/10 text-white/80 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs font-exo font-medium text-white/60">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 bg-neon-blue/20 text-neon-blue border border-neon-blue/30 rounded-lg text-sm font-semibold hover:bg-neon-blue hover:text-black transition-all duration-300"
                      >
                        Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack Summary */}
        <section className="mb-20">
          <div className="glass-card p-10 text-center bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-emerald-900/50 border-2 border-blue-400 shadow-[0_0_24px_2px_rgba(56,189,248,0.3)] rounded-2xl">
            <h2 className="text-3xl font-orbitron font-bold mb-8 neon-text tracking-wide">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from(new Set(projects.flatMap(p => p.tech))).map((tech) => {
                // Add icons or emoji for popular techs
                const techIcons = {
                  'React': '⚛️',
                  'Python': '🐍',
                  'FastAPI': '⚡',
                  'Tailwind CSS': '🌬️',
                  'Supabase': '🟩',
                  'OpenRouteService API': '🗺️',
                  'WeatherAPI': '☁️',
                  'Node.js': '🟢',
                  'MongoDB': '🍃',
                  'PostgreSQL': '🐘',
                  'Redis': '🟥',
                  'TensorFlow': '🧠',
                  'Scikit-learn': '🔬',
                  'NLTK': '📚',
                  'Docker': '🐳',
                  'AWS': '☁️',
                  'Vue.js': '🟩',
                  'Flask': '🍶',
                  'JavaScript': '🟨',
                  'TypeScript': '🟦',
                  'Socket.io': '🔌',
                  'Gamification API': '🎮',
                };
                return (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-5 py-2 font-exo font-medium bg-white/10 text-white/90 rounded-full border border-blue-400/30 shadow-[0_0_8px_1px_rgba(56,189,248,0.15)] hover:bg-blue-900/30 hover:shadow-[0_0_12px_2px_rgba(56,189,248,0.25)] transition-all duration-300 text-base backdrop-blur-md"
                  >
                    {techIcons[tech] && <span className="text-lg">{techIcons[tech]}</span>}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
