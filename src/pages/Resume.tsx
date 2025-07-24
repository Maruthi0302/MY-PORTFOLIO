
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 px-4 flex flex-col items-center bg-gradient-to-br from-background to-cyan-950/40">
      <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 neon-text text-center drop-shadow-lg">My Resume</h1>
      <p className="text-lg text-white/70 font-exo mb-8 text-center max-w-2xl">Download or view my latest resume. For the best experience, use desktop or tablet.</p>
      <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
        <Button className="mb-8 bg-gradient-to-r from-neon-blue to-cyan-500 text-black font-semibold px-8 py-3 rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center gap-2">
          <Download className="h-5 w-5" />
          Download PDF
        </Button>
      </a>
      <div className="glass-card neon-glow w-full max-w-4xl mx-auto p-4 md:p-8 rounded-2xl shadow-2xl border border-neon-blue/30 mb-12 flex justify-center">
        <div className="w-full flex justify-center">
          <embed
            src="/resume.pdf"
            type="application/pdf"
            width="100%"
            style={{
              aspectRatio: '210/297', // A4 aspect ratio
              height: 'auto',
              maxWidth: '800px', // A4 width at 96dpi is about 794px
              minHeight: '0',
              borderRadius: '1rem',
              boxShadow: '0 8px 32px 0 rgba(0,212,255,0.15)',
              display: 'block',
            }}
            className="rounded-xl border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
