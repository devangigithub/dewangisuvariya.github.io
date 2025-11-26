import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Palette, Terminal } from "lucide-react";
import { BrutalistButton } from "@/components/ui/brutalist-button";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS, SKILLS, SOCIAL_LINKS } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b-2 border-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-xl font-black tracking-tighter uppercase border-2 border-black px-2 bg-primary text-white rotate-[-2deg]">
            DS.Dev
          </div>
          <div className="hidden md:flex gap-6 font-mono font-bold text-sm">
            <a href="#about" className="hover:underline decoration-2 underline-offset-4 decoration-accent">ABOUT</a>
            <a href="#work" className="hover:underline decoration-2 underline-offset-4 decoration-accent">WORK</a>
            <a href="#contact" className="hover:underline decoration-2 underline-offset-4 decoration-accent">CONTACT</a>
          </div>
          <BrutalistButton size="sm" variant="default" className="font-mono">
            <Mail className="mr-2 h-4 w-4" />
            HIRE ME
          </BrutalistButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 border-b-2 border-black overflow-hidden">
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
        
        <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border-2 border-black bg-secondary px-4 py-1 w-fit shadow-brutal-sm"
            >
              <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
              <span className="font-mono font-bold text-sm">AVAILABLE FOR FREELANCE</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
              >
                Devangi<br/>
                <span className="text-transparent text-stroke hover:text-accent transition-colors duration-300">Suvariya</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-3xl font-mono font-bold mt-4 bg-black text-white p-2 w-fit -rotate-1"
              >
                FLUTTER DEVELOPER & ILLUSTRATOR
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#work">
              <BrutalistButton size="lg" className="text-lg font-bold">
                VIEW PROJECTS <ArrowRight className="ml-2 h-5 w-5" />
              </BrutalistButton>
            </a>
              <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noopener noreferrer">
                <BrutalistButton variant="outline" size="lg" className="text-lg font-bold">
                  <Github className="mr-2 h-5 w-5" /> GITHUB
                </BrutalistButton>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 md:right-32 w-32 h-32 border-4 border-black rounded-full flex items-center justify-center animate-spin-slow hidden md:flex bg-accent text-white font-bold text-xs shadow-brutal">
          SCROLL DOWN
        </div>
      </section>

      {/* Marquee */}
      <div className="border-b-2 border-black bg-yellow-300 py-3 overflow-hidden whitespace-nowrap flex">
        <div className="animate-marquee inline-block font-black text-2xl md:text-4xl uppercase tracking-widest shrink-0">
          {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
            <span key={i} className="mx-4">
              {skill.name} •
            </span>
          ))}
        </div>
        <div className="animate-marquee inline-block font-black text-2xl md:text-4xl uppercase tracking-widest shrink-0" aria-hidden="true">
          {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
            <span key={i} className="mx-4">
              {skill.name} •
            </span>
          ))}
        </div>
      </div>

      {/* About & Skills Section */}
      <section id="about" className="py-20 border-b-2 border-black">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* About Text */}
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-1 font-mono font-bold text-lg -rotate-2 shadow-brutal-sm">
                ABOUT ME
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                Passionate Flutter Developer building cross-platform experiences.
              </h2>
              <p className="text-lg text-muted-foreground font-mono leading-relaxed border-l-4 border-accent pl-4">
                I am a detail-oriented Flutter Developer based in Rajkot, Gujarat. I specialize in building high-performance mobile applications for Android and iOS using Dart, Firebase, and REST APIs.
                <br/><br/>
                Currently working at <strong>GaminGuruz</strong>, I focus on creating scalable solutions with clean architecture and intuitive UI/UX designs.
              </p>
              
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border-2 border-black bg-white hover:bg-primary hover:text-white transition-colors shadow-brutal hover:shadow-brutal-sm"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              {/* Education & Experience Snippet */}
              <div className="pt-6 space-y-4">
                <h3 className="font-black text-xl uppercase border-b-2 border-black pb-2">Experience</h3>
                <div className="font-mono">
                  <div className="font-bold">Flutter Developer @ GaminGuruz</div>
                  <div className="text-sm text-muted-foreground">02/2025 – Present</div>
                </div>
                
                <h3 className="font-black text-xl uppercase border-b-2 border-black pb-2 mt-6">Education</h3>
                <div className="font-mono">
                  <div className="font-bold">Flutter Developer Course</div>
                  <div className="text-sm text-muted-foreground">Red & White Multimedia Education (Grade A)</div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="bg-muted/30 p-8 border-2 border-black shadow-brutal-lg">
              <h3 className="font-black text-2xl mb-6 uppercase flex items-center gap-2">
                <Terminal className="w-6 h-6" /> Tech Stack
              </h3>
              <div className="space-y-4">
                {SKILLS.map((skill) => (
                  <div 
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-1 font-mono font-bold text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-4 w-full border-2 border-black bg-white p-[1px]">
                      <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "circOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 border-b-2 border-black bg-secondary/10">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="inline-block bg-accent text-white px-4 py-1 font-mono font-bold text-lg rotate-1 shadow-brutal-sm mb-4">
                PORTFOLIO
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase">Selected Work</h2>
            </div>
            <BrutalistButton variant="outline">
              VIEW ALL REPOS ({PROJECTS.length})
            </BrutalistButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto bg-white border-2 border-black p-8 md:p-12 shadow-brutal-lg relative overflow-hidden">
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black uppercase mb-4">Let's Talk</h2>
              <p className="font-mono text-muted-foreground">
                Have a project in mind? Send me a message or email me at <a href="mailto:dewangisuvariya@gmail.com" className="text-primary font-bold hover:underline">dewangisuvariya@gmail.com</a>
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-bold text-sm uppercase">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    className="w-full h-12 px-4 border-2 border-black bg-muted/20 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all placeholder:text-muted-foreground/50 font-mono"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-bold text-sm uppercase">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full h-12 px-4 border-2 border-black bg-muted/20 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all placeholder:text-muted-foreground/50 font-mono"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-bold text-sm uppercase">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  className="w-full p-4 border-2 border-black bg-muted/20 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all placeholder:text-muted-foreground/50 font-mono resize-none"
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                ></textarea>
              </div>
              <BrutalistButton type="submit" size="lg" className="w-full text-lg font-bold shadow-brutal hover:shadow-brutal-lg">
                SEND MESSAGE <ArrowRight className="ml-2 h-5 w-5" />
              </BrutalistButton>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black text-white py-12">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase tracking-tighter">DS.Dev</h3>
            <p className="font-mono text-sm text-gray-400 mt-2">© {new Date().getFullYear()} Devangi Suvariya</p>
          </div>
          
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
