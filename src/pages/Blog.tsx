
import { Calendar, Clock, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Full Stack', 'DevOps', 'Career'];
  
  const blogPosts = [
    {
      title: 'Building AI-Powered Applications: From Concept to Production',
      excerpt: 'A comprehensive guide on developing and deploying machine learning models in real-world applications, covering everything from data preprocessing to model monitoring.',
      category: 'AI/ML',
      readTime: '8 min read',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      featured: true,
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      url: 'https://vercel.com/guides/how-to-build-ai-app'
    },
    {
      title: 'The Full Stack Developer\'s Guide to Modern Web Architecture',
      excerpt: 'Exploring microservices, containerization, and cloud-native development practices that every full stack developer should know in 2024.',
      category: 'Full Stack',
      readTime: '10 min read',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      featured: false,
      tags: ['React', 'Node.js', 'AWS', 'Microservices'],
      url: 'https://dev.to/vincent_natalie_900aed10e/how-to-build-an-ai-app-17i1'
    },
    {
      title: 'Hackathon Success: How to Build and Present Winning Projects',
      excerpt: 'Essential strategies for hackathon success, from rapid prototyping techniques to creating compelling presentations that impress judges.',
      category: 'Career',
      readTime: '6 min read',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      featured: false,
      tags: ['Hackathons', 'Prototyping', 'Presentation'],
      url: 'https://angelhack.com/blog/hackathon-examples//'
    },
    {
      title: 'DevOps Best Practices: CI/CD Pipeline Implementation',
      excerpt: 'Learn how to set up robust CI/CD pipelines using Docker, GitHub Actions, and cloud platforms for seamless deployment workflows.',
      category: 'DevOps',
      readTime: '12 min read',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      featured: true,
      tags: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS'],
      url: 'https://aws.amazon.com/blogs/devops/best-practices-for-managing-terraform-state-files-in-aws-ci-cd-pipeline/'
    },
    {
      title: 'From Intern to Full-Time: Navigating Your Tech Career',
      excerpt: 'Insights and advice for transitioning from internships to full-time roles in tech, including skill development and interview preparation.',
      category: 'Career',
      readTime: '7 min read',
      date: 'February 20, 2024',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      featured: false,
      tags: ['Career', 'Internships', 'Interviews'],
      url: 'https://hbr.org/2021/01/how-i-turned-my-internship-into-a-full-time-job'
    },
    {
      title: 'Machine Learning in Production: Lessons Learned',
      excerpt: 'Real-world experiences and challenges faced while deploying ML models in production environments, with practical solutions.',
      category: 'AI/ML',
      readTime: '9 min read',
      date: 'February 15, 2024',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      featured: false,
      tags: ['Machine Learning', 'Production', 'MLOps'],
      url: 'https://mlinproduction.com/why-i-started-mlinproduction/'
    }
  ];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            Tech Blog
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            Sharing insights, experiences, and knowledge from the world of software development, 
            AI, and emerging technologies.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const categoryGradients = [
                'bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 hover:from-neon-blue hover:to-neon-purple',
                'bg-gradient-to-r from-neon-green/80 to-neon-blue/80 hover:from-neon-green hover:to-neon-blue',
                'bg-gradient-to-r from-neon-purple/80 to-neon-pink/80 hover:from-neon-purple hover:to-neon-pink',
                'bg-gradient-to-r from-neon-pink/80 to-neon-yellow/80 hover:from-neon-pink hover:to-neon-yellow',
                'bg-gradient-to-r from-neon-yellow/80 to-neon-green/80 hover:from-neon-yellow hover:to-neon-green'
              ];
              
              return (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? "default" : "outline"}
                  className={`
                    ${filter === category 
                      ? `${categoryGradients[index % 5]} text-black neon-glow` 
                      : 'border-white/30 text-white hover:bg-white/10'
                    }
                    font-exo font-medium transition-all duration-300 hover:scale-105
                  `}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </section>

        {/* Featured Posts */}
        {filter === 'All' && (
          <section className="mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-neon-blue neon-text">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const featuredGradients = [
                  'bg-gradient-to-br from-slate-800/90 via-blue-900/30 to-purple-900/30',
                  'bg-gradient-to-br from-slate-800/90 via-emerald-900/30 to-teal-900/30'
                ];
                
                return (
                  <article
                    key={post.title}
                    className={`${featuredGradients[index % 2]} backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group animate-slide-in-up neon-glow hover:border-neon-blue/50`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue border border-neon-blue/30 rounded-full text-sm font-exo font-medium neon-glow">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-white/60 text-sm font-exo mb-3">
                        <Calendar className="h-4 w-4 mr-2 text-neon-blue" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="h-4 w-4 mr-2 text-neon-purple" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-neon-blue transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/70 font-exo mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 text-xs font-exo font-medium rounded-full backdrop-blur-sm ${
                              tagIndex % 4 === 0 ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                              tagIndex % 4 === 1 ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' :
                              tagIndex % 4 === 2 ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' :
                              'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button className="bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 hover:from-neon-blue hover:to-neon-purple text-black font-exo font-semibold border-0 neon-glow">
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center w-full h-full">
                          Read More
                          <ArrowDown className="ml-2 h-4 w-4 rotate-[-45deg]" />
                        </a>
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-neon-blue neon-text">
            {filter === 'All' ? 'Latest Articles' : `${filter} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filter === 'All' ? regularPosts : filteredPosts).map((post, index) => {
              const cardGradients = [
                'bg-gradient-to-br from-slate-800/90 via-blue-900/30 to-purple-900/30',
                'bg-gradient-to-br from-slate-800/90 via-emerald-900/30 to-teal-900/30',
                'bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-pink-900/30',
                'bg-gradient-to-br from-slate-800/90 via-pink-900/30 to-red-900/30',
                'bg-gradient-to-br from-slate-800/90 via-yellow-900/30 to-orange-900/30',
                'bg-gradient-to-br from-slate-800/90 via-cyan-900/30 to-blue-900/30'
              ];
              
              return (
                <article
                  key={post.title}
                  className={`${cardGradients[index % 6]} backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group animate-slide-in-up neon-glow hover:border-neon-blue/50`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/20 text-white border border-white/30 rounded-full text-xs font-exo font-medium backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center text-white/60 text-xs font-exo mb-2">
                      <Calendar className="h-3 w-3 mr-1 text-neon-blue" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="h-3 w-3 mr-1 text-neon-purple" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-orbitron font-bold mb-2 group-hover:text-neon-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 font-exo text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs font-exo font-medium rounded-full backdrop-blur-sm ${
                            tagIndex % 2 === 0 ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                            'bg-neon-green/20 text-neon-green border border-neon-green/30'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs font-exo font-medium text-white/50">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <Button size="sm" className="w-full bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 hover:from-neon-blue hover:to-neon-purple text-black font-exo font-semibold border-0 neon-glow">
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center w-full h-full justify-center">
                        Read Article
                      </a>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
