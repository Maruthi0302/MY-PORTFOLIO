
const About = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Professional Breakthrough',
      description: 'Secured internships at Turtil and TechSaksham, built production-ready systems',
      color: 'from-neon-blue to-cyan-500'
    },
    {
      year: '2024',
      title: 'Innovation & Impact',
      description: 'Focused on AI-powered solutions and Attended multiple hackathons',
      color: 'from-neon-purple to-pink-500'
    },
    {
      year: 'Early 2024',
      title: 'Full Stack Excellence',
      description: 'Learning modern tech stack and AI integration',
      color: 'from-neon-green to-emerald-500'
    }
  ];

  const techDNA = [
    { label: 'Favorite Languages', value: 'Python, JavaScript, TypeScript' },
    { label: 'Preferred IDE', value: 'Cursor IDE & VS Code' },
    { label: 'Cloud Platform', value: 'AWS, Docker, Kubernetes' },
    { label: 'Databases', value: 'PostgreSQL, MongoDB, Redis' },
    { label: 'Hobbies', value: 'Hackathons, Open Source, Tech Blogging' },
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full glass-card p-2 neon-glow">
              <img
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                src="/images/picofme.png"
                alt="Developer Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            My Developer Journey
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            From writing my first "Hello World" to building AI-powered platforms that solve real-world problems, 
            here's the story of my evolution as a developer.
          </p>
        </section>

        {/* Growth Timeline Section - Card Style with Connecting Line */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12 neon-text">
            Growth Timeline
          </h2>
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 z-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-60 rounded-full" style={{ minWidth: '100%', pointerEvents: 'none' }}></div>
            <div className="relative grid md:grid-cols-3 gap-8 z-10">
              {timeline.map((item, index) => {
                // Softer, modern gradient backgrounds
                const cardGradients = [
                  'from-blue-900/80 via-cyan-700/70 to-cyan-500/60', // blue-cyan
                  'from-purple-900/80 via-indigo-700/70 to-indigo-500/60', // purple-indigo
                  'from-teal-900/80 via-emerald-700/70 to-emerald-500/60', // teal-emerald
                ];
                // Pick an icon for each card
                const icons = [
                  <span role="img" aria-label="Trophy" className="text-3xl">🏆</span>,
                  <span role="img" aria-label="Rocket" className="text-3xl">🚀</span>,
                  <span role="img" aria-label="Code" className="text-3xl">💻</span>,
                ];
                return (
                  <div
                    key={item.year}
                    className={`glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} border-2 animate-slide-in-up shadow-lg ${
                      index % 3 === 0
                        ? 'border-blue-400 shadow-[0_0_16px_2px_rgba(56,189,248,0.7)]'
                        : index % 3 === 1
                        ? 'border-purple-400 shadow-[0_0_16px_2px_rgba(192,132,252,0.7)]'
                        : 'border-emerald-400 shadow-[0_0_16px_2px_rgba(52,211,153,0.7)]'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s`, backgroundBlendMode: 'soft-light' }}
                  >
                    <div className="mb-4">{icons[index % icons.length]}</div>
                    <div className="text-2xl font-orbitron font-bold mb-2 neon-text">{item.year}</div>
                    <h3 className="text-lg font-exo font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech DNA Section */}
        <section className="mb-20">
          <div className="glass-card p-10 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-emerald-900/50 border-2 border-blue-400 shadow-[0_0_24px_2px_rgba(56,189,248,0.3)] rounded-2xl">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-10 neon-text tracking-wide">
              Tech DNA
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {techDNA.map((item, index) => {
                const icons = {
                  'Favorite Languages': '💻',
                  'Preferred IDE': '🖥️',
                  'Cloud Platform': '☁️',
                  'Databases': '🗄️',
                  'Hobbies': '🎯',
                };
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 px-8 py-6 bg-white/10 rounded-xl border border-blue-400/30 shadow-[0_0_8px_1px_rgba(56,189,248,0.15)] hover:bg-blue-900/30 hover:shadow-[0_0_12px_2px_rgba(56,189,248,0.25)] transition-all duration-300 animate-slide-in-up backdrop-blur-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl mb-1">{icons[item.label]}</span>
                    <h3 className="font-orbitron font-bold text-neon-blue mb-1 text-lg">{item.label}</h3>
                    <p className="font-exo text-white/90 text-base text-center">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-orbitron font-bold mb-6 neon-text">
              Development Philosophy
            </h2>
            <blockquote className="text-xl font-exo text-white/80 italic mb-6">
              "Code is not just about solving problems; it's about creating solutions that make the world a better place. 
              Every line I write is driven by the desire to build sustainable, scalable, and impactful technology."
            </blockquote>
            <div className="flex justify-center space-x-9">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-green">10+</div>
                <div className="text-sm font-exo text-white/70">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-blue">5+</div>
                <div className="text-sm font-exo text-white/70">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-purple">6+</div>
                <div className="text-sm font-exo text-white/70">Hackathons Attended</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-neon-pink">2</div>
                <div className="text-sm font-exo text-white/70">Professional Internships</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
