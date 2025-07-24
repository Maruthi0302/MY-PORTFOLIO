import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Mail, FileText, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';

const Home = () => {
  const skills = ['React', 'Python', 'AI/ML', 'Docker', 'AWS', 'FastAPI'];
  const tools = ['ChatGPT', 'Claude', 'Perplexity', 'Napkin AI', 'Notion', 'Cursor AI', 'n8n', 'Lovable', 'VS Code', 'Gemini'];
  const recentProjects = [{
    name: 'EcoVeda',
    tech: 'React • Node.js • AI',
    color: 'from-green-400 to-emerald-600'
  }, {
    name: 'Giving Plate',
    tech: 'Python • ML • FastAPI',
    color: 'from-blue-400 to-cyan-600'
  }, {
    name: 'Resume-Job Fit Evaluator',
    tech: 'FastAPI • Docker • Scikit-learn • PostgreSQL • Redis',
    color: 'from-teal-400 to-cyan-600'
  }];

  return (
    <div className="min-h-screen">
      {/* Particles Background */}
      <div className="particles-bg">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">A Thiruven Maruthi</span>
                <br />
                <span className="text-2xl md:text-3xl font-exo font-light text-white/80">AI Powered Developer</span>
              </h1>
              
              <p className="text-lg md:text-xl font-exo text-white/70 mb-6 max-w-2xl">
                Passionate about building innovative AI-powered solutions and scalable web applications. 
                I specialize in full-stack development with a focus on machine learning integration and modern web technologies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild className="bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold px-6 py-3 rounded-full neon-glow transition-all duration-300 hover:scale-105">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                
                <div className="flex space-x-3">
                  <a href="https://github.com/Maruthi0302" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-neon-blue/20 transition-all duration-300 hover:scale-110 group">
                    <Github className="h-5 w-5 group-hover:text-neon-blue transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/thiruven-maruthi-a-8740402ab/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-neon-blue/20 transition-all duration-300 hover:scale-110 group">
                    <Linkedin className="h-5 w-5 group-hover:text-neon-blue transition-colors" />
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=thiruvenmaruthi@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-neon-blue/20 transition-all duration-300 hover:scale-110 group">
                    <Mail className="h-5 w-5 group-hover:text-neon-blue transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 glass-card p-4 rounded-2xl neon-glow">
                  <img
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    src="/images/picofme.png"
                    alt="A Thiruven Maruthi"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-neon-blue/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-neon-purple/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-neon-blue" />
          </div>
        </div>
      </section>

      {/* Skills Preview - Tech Stack Modernized */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-10 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-emerald-900/50 border-2 border-blue-400 shadow-[0_0_24px_2px_rgba(56,189,248,0.3)] rounded-2xl">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-10 neon-text tracking-wide">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Example: Use Lucide icons for popular techs, emoji for others */}
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#20232A"/><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#61DAFB"/><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/></svg>
                React
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-blue-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#3178C6"/><text x="6" y="18" font-size="12" fill="white">TS</text></svg>
                TypeScript
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-yellow-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><text x="6" y="18" font-size="12" fill="#222">JS</text></svg>
                JavaScript
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-blue-300">
                <span role="img" aria-label="Python">🐍</span> Python
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-green-400">
                <span role="img" aria-label="Node.js">🟢</span> Node.js
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-cyan-400">
                <span role="img" aria-label="FastAPI">⚡</span> FastAPI
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-orange-400">
                <span role="img" aria-label="Flask">🍶</span> Flask
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-blue-300">
                <span role="img" aria-label="Docker">🐳</span> Docker
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-yellow-200">
                <span role="img" aria-label="AWS">☁️</span> AWS
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-blue-500">
                <span role="img" aria-label="PostgreSQL">🐘</span> PostgreSQL
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-green-500">
                <span role="img" aria-label="MongoDB">🍃</span> MongoDB
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-red-400">
                <span role="img" aria-label="Firebase">🟥</span> Firebase
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-cyan-300">
                <span role="img" aria-label="Tailwind CSS">🌬️</span> Tailwind CSS
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-orange-500">
                <span role="img" aria-label="Git">🔧</span> Git
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-gray-300">
                <span role="img" aria-label="Linux">🐧</span> Linux
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-blue-400">
                <span role="img" aria-label="VS Code">🖥️</span> VS Code
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-pink-400">
                <span role="img" aria-label="TensorFlow">🧠</span> TensorFlow
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-green-400">
                <span role="img" aria-label="Scikit-learn">🔬</span> Scikit-learn
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-purple-400">
                <span role="img" aria-label="NLTK">📚</span> NLTK
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-orange-300">
                <span role="img" aria-label="HTML5">🟧</span> HTML5
              </span>
              <span className="flex items-center gap-2 text-lg font-exo font-semibold text-blue-200">
                <span role="img" aria-label="CSS3">🟦</span> CSS3
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section - Marquee Style */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12 neon-text">
            Tools Assist My Workflow
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-xl glass-card border border-neon-purple/30 neon-glow">
              <Marquee
                gradient={true}
                gradientColor="#0A0A0A"
                speed={40}
                pauseOnHover={true}
                className="py-4"
              >
                {/* Tool icons and names */}
                <div className="flex items-center gap-12">
                  {/* Example icons: use Lucide, emoji, or SVG as appropriate */}
                  <span className="flex items-center gap-2 text-neon-green text-lg font-exo font-semibold">
                    <span role="img" aria-label="ChatGPT">🤖</span> ChatGPT
                  </span>
                  <span className="flex items-center gap-2 text-neon-blue text-lg font-exo font-semibold">
                    <span role="img" aria-label="Claude">🧠</span> Claude
                  </span>
                  <span className="flex items-center gap-2 text-neon-purple text-lg font-exo font-semibold">
                    <span role="img" aria-label="Perplexity">💡</span> Perplexity
                  </span>
                  <span className="flex items-center gap-2 text-neon-yellow text-lg font-exo font-semibold">
                    <span role="img" aria-label="Napkin AI">📝</span> Napkin AI
                  </span>
                  <span className="flex items-center gap-2 text-neon-pink text-lg font-exo font-semibold">
                    <span role="img" aria-label="Notion">🗒️</span> Notion
                  </span>
                  <span className="flex items-center gap-2 text-neon-blue text-lg font-exo font-semibold">
                    <span role="img" aria-label="Cursor AI">🖱️</span> Cursor AI
                  </span>
                  <span className="flex items-center gap-2 text-neon-green text-lg font-exo font-semibold">
                    <span role="img" aria-label="n8n">🔗</span> n8n
                  </span>
                  <span className="flex items-center gap-2 text-neon-purple text-lg font-exo font-semibold">
                    <span role="img" aria-label="Lovable">💖</span> Lovable
                  </span>
                  <span className="flex items-center gap-2 text-neon-blue text-lg font-exo font-semibold">
                    <span role="img" aria-label="VS Code">🖥️</span> VS Code
                  </span>
                  <span className="flex items-center gap-2 text-neon-yellow text-lg font-exo font-semibold">
                    <span role="img" aria-label="Gemini">✨</span> Gemini
                  </span>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold neon-text">
              Featured Projects
            </h2>
            <Link to="/projects">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black">
                View All Projects
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <div
                key={project.name}
                className={`glass-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer animate-slide-in-up bg-gradient-to-br ${project.color} bg-opacity-10`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:text-neon-blue transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/70 font-exo">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8 neon-text">
            Professional Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/internships" className="glass-card p-8 hover:bg-neon-purple/10 transition-all duration-300 hover:scale-105 group">
              <Calendar className="h-12 w-12 text-neon-purple mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:text-neon-purple transition-colors">
                Internships
              </h3>
              <p className="text-white/70 font-exo">2 successful internships building real-world solutions</p>
            </Link>
            
            <Link to="/hackathons" className="glass-card p-8 hover:bg-neon-green/10 transition-all duration-300 hover:scale-105 group">
              <FileText className="h-12 w-12 text-neon-green mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:text-neon-green transition-colors">
                Hackathons
              </h3>
              <p className="text-white/70 font-exo">5+ hackathons with innovative project solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card p-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 neon-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl font-exo text-white/70 mb-8">
            Ready to collaborate on your next project?
          </p>
          <Link to="/contact">
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-black font-semibold px-8 py-3 rounded-full neon-glow transition-all duration-300 hover:scale-105">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
