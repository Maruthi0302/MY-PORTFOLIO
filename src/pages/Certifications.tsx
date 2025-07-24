import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Software Engineering Job Simulation',
      provider: 'JPMorgan Chase & Co. (Forage)',
      grade: 'Completed',
      date: 'August 2024',
      description: 'Completed the JPMorgan Chase & Co. Software Engineering Job Simulation, including interfacing with a stock price data feed, using JPMorgan frameworks, visualizing data for traders, and open source contribution.',
      skills: ['Software Engineering', 'Data Feeds', 'Visualization', 'Open Source', 'Finance'],
      credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_FoWQE4o2L5ETJudNj_1724600597900_completion_certificate.pdf',
      color: 'from-blue-800 to-blue-400',
      image: '/images/jpg certificate.jpeg'
    },
    {
      title: 'Data Analytics and Visualization Job Simulation',
      provider: 'Accenture (Forage)',
      grade: 'Completed',
      date: 'September 2024',
      description: 'Completed the Accenture Data Analytics and Visualization Job Simulation, including project understanding, data cleaning & modeling, data visualization & storytelling, and client presentation.',
      skills: ['Data Analytics', 'Data Cleaning', 'Data Visualization', 'Storytelling', 'Client Presentation'],
      credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_FoWQE4o2L5ETJudNj_1726564481173_completion_certificate.pdf',
      color: 'from-purple-600 to-pink-400',
      image: '/images/accenture certificate.png'
    },
    {
      title: 'GenAI Job Simulation',
      provider: 'BCGX (Forage)',
      grade: 'Completed',
      date: 'October 2024',
      description: 'Completed the BCGX GenAI Job Simulation, including data extraction, initial analysis, and developing an AI-powered financial chatbot.',
      skills: ['GenAI', 'Data Analysis', 'AI Chatbot', 'Financial Technology'],
      credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/gabev3vXhuACr48eb_BCG_FoWQE4o2L5ETJudNj_1727883838471_completion_certificate.pdf',
      color: 'from-green-600 to-teal-400',
      image: '/images/BCGX_Completion.png'
    },
    {
      title: 'Cloud Computing',
      provider: 'NPTEL',
      grade: 'Elite Silver',
      date: 'March 2024',
      description: 'Comprehensive course covering cloud architecture, AWS services, and deployment strategies',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
      credentialUrl: 'https://nptel.ac.in/certificate',
      color: 'from-blue-500 to-cyan-500',
      // image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
      image: '/images/NPTEL CERTIFICATION.png'
    },
    {
      title: 'Zero to Mastery Python Udemy',
      provider: 'Udemy',
      grade: 'Certified',
      date: 'February 2024',
      description: 'In-depth Python programming course from beginner to advanced, including projects and real-world applications.',
      skills: ['Python', 'OOP', 'Data Structures', 'Problem Solving'],
      credentialUrl: 'https://www.udemy.com/course/complete-python-developer-zero-to-mastery/',
      color: 'from-yellow-500 to-orange-500',
      // image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop'
      image: '/images/udemy.png'
    },
    {
      title: 'CS50 Python Harvard (on going)',
      provider: 'HarvardX',
      grade: 'Certified',
      date: 'January 2024',
      description: "Harvard CS50's Introduction to Programming with Python, covering foundational concepts and hands-on projects.",
      skills: ['Python', 'Algorithms', 'CS Fundamentals', 'Projects'],
      credentialUrl: 'https://cs50.harvard.edu/certificates',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.includes('Gold')) return 'text-neon-yellow border-neon-yellow/50 bg-neon-yellow/20 neon-text';
    if (grade.includes('Silver')) return 'text-gray-300 border-gray-300/50 bg-gray-300/20';
    if (grade.includes('Elite')) return 'text-neon-blue border-neon-blue/50 bg-neon-blue/20 neon-text';
    return 'text-neon-green border-neon-green/50 bg-neon-green/20 neon-text';
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            Certifications
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            Continuous learning and skill development through recognized certification programs 
            from top educational platforms and industry leaders.
          </p>
        </section>

        {/* Certifications Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 animate-slide-in-up border border-white/20 hover:border-neon-blue/50 neon-glow hover:shadow-2xl hover:shadow-neon-blue/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[200%] object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    style={{ transform: 'translateY(-25%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-orbitron font-bold text-white mb-2 neon-text-glow">
                        {cert.title}
                      </h3>
                      <p className="text-neon-purple font-exo text-sm mb-1 neon-text">{cert.provider}</p>
                      <div className="flex items-center text-neon-green text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-exo font-medium border backdrop-blur-sm ${getGradeColor(cert.grade)}`}>
                      {cert.grade}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 font-exo text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 text-xs font-exo font-medium rounded-md border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                            skillIndex % 4 === 0 ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/50 neon-glow' :
                            skillIndex % 4 === 1 ? 'bg-neon-green/20 text-neon-green border-neon-green/50 neon-glow' :
                            skillIndex % 4 === 2 ? 'bg-neon-purple/20 text-neon-purple border-neon-purple/50 neon-glow' :
                            'bg-neon-pink/20 text-neon-pink border-neon-pink/50 neon-glow'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-neon-blue/80 to-cyan-500/80 hover:from-neon-blue hover:to-cyan-500 text-black font-exo font-semibold border-0 neon-glow"
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="glass-card p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 neon-glow">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-8 neon-text">
              Learning Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-blue mb-2 neon-text">3</div>
                <p className="text-white/60 font-exo">Certifications Earned</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-green mb-2 neon-text">2</div>
                <p className="text-white/60 font-exo">Elite Grades</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-purple mb-2 neon-text">100+</div>
                <p className="text-white/60 font-exo">Learning Hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neon-pink mb-2 neon-text">9+</div>
                <p className="text-white/60 font-exo">Skills Acquired</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="mb-16">
          <div className="glass-card p-8 text-center bg-gradient-to-br from-white/5 to-white/10 border border-white/20 neon-glow">
            <Award className="h-16 w-16 text-neon-blue mx-auto mb-6" />
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-neon-blue neon-text">
              Commitment to Excellence
            </h2>
            <p className="text-white/70 font-exo max-w-2xl mx-auto leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              Each certification represents not just theoretical knowledge, but practical skills 
              that I apply in real-world projects to deliver exceptional results.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
