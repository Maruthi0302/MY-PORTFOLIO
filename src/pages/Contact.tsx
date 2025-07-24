import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thiruvenmaruthi@gmail.com',
      href: 'mailto:thiruvenmaruthi@gmail.com',
      color: 'text-neon-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Maruthi0302',
      href: 'https://github.com/Maruthi0302',
      color: 'text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/Thiruven Maruthi A',
      href: 'https://www.linkedin.com/in/thiruven-maruthi-a-8740402ab/',
      color: 'text-neon-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null,
      color: 'text-neon-green'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 neon-text">
            Let's Connect
          </h1>
          <p className="text-xl font-exo text-white/70 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities? 
            I'd love to hear from you!
          </p>
        </section>

        {/* Get In Touch */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="glass-card p-8 w-full">
            <h2 className="text-2xl font-orbitron font-bold mb-6 neon-text text-center">
              Get In Touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex items-center p-4 glass border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                    <IconComponent className={`h-6 w-6 mr-4 ${item.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className="font-exo font-medium text-white/80 text-sm">
                        {item.label}
                      </div>
                      <div className="font-exo text-white">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className="glass-card p-8 w-full">
            <h3 className="text-xl font-orbitron font-bold mb-4 neon-text text-center">
              Availability
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-neon-green rounded-full mr-3 animate-pulse"></div>
                <span className="font-exo text-white/80">Open to new opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-neon-blue rounded-full mr-3"></div>
                <span className="font-exo text-white/80">Available for freelance projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-neon-purple rounded-full mr-3"></div>
                <span className="font-exo text-white/80">Response time: 24-48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
