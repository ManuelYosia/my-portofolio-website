/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Database, 
  Construction, 
  ArrowRight, 
  Terminal, 
  Share2, 
  Mail,
  Code2,
  Download,
  Menu,
  X,
  ArrowUp,
  BarChart3,
  CheckCircle2,
  School,
  HardDrive,
  Send,
  ExternalLink
} from "lucide-react";

// Custom icons to match Material Symbols if possible, or use Lucide equivalents
const AnalyticsIcon = () => <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-container/20 flex items-center justify-center border border-primary-container/20"><BarChart3 className="w-8 h-8 text-primary-container" /></div>;
const TaskIcon = () => <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-container/20 flex items-center justify-center border border-primary-container/20"><CheckCircle2 className="w-8 h-8 text-primary-container" /></div>;
const SchoolIcon = () => <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-container/20 flex items-center justify-center border border-primary-container/20"><School className="w-8 h-8 text-primary-container" /></div>;
const StorageIcon = () => <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-container/20 flex items-center justify-center border border-primary-container/20"><HardDrive className="w-8 h-8 text-primary-container" /></div>;

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Frontend",
    icon: <Layers className="w-6 h-6" />,
    description: "Building pixel-perfect, responsive interfaces",
    tags: ["React & Next.js", "Tailwind CSS", "TypeScript", "HTML & CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    description: "Designing scalable APIs and data systems",
    tags: ["Node.js", "PostgreSQL", "PHP", "MySQL", "REST API"],
  },
  {
    title: "Tools",
    icon: <Construction className="w-6 h-6" />,
    description: "The environment powering my workflow",
    tags: ["Git & GitHub", "Figma", "Docker", "Supabase", "Postman", "Vite"],
  },
];

const projects = [
  {
    title: "Lume Analytics Platform",
    description: "A real-time data visualization tool for tracking developer performance metrics using high-frequency data streams.",
    icon: <BarChart3 className="w-8 h-8 text-primary-container" />,
    tags: ["NEXT.JS", "TAILWIND", "SUPABASE"],
    github: "#",
    demo: "#",
    isLive: true,
  },
  {
    title: "DevFlow Task Engine",
    description: "Mobile-first workflow automation for engineering teams, integrating directly with Jira and GitHub APIs.",
    icon: <CheckCircle2 className="w-8 h-8 text-primary-container" />,
    tags: ["REACT NATIVE", "NODE.JS"],
    github: "#",
    demo: "#",
    isLive: false,
  },
  {
    title: "Chemistry Adventure Game",
    description: "Educational 2D Unity game teaching high school students about chemical bonding through interactive puzzles and level progression.",
    icon: <School className="w-8 h-8 text-primary-container" />,
    tags: ["PHP", "MYSQL", "UNITY"],
    github: "#",
    demo: "#",
    isLive: false,
  },
  {
    title: "Campus Resource Manager",
    description: "A full-stack campus-wide resource management system built with a team of 5 students, used daily by university staff.",
    icon: <HardDrive className="w-8 h-8 text-primary-container" />,
    tags: ["POSTGRESQL", "NODE.JS"],
    github: "#",
    demo: "#",
    isLive: false,
  },
];

const experiences = [
  {
    role: "Open Source Contributor",
    company: "Global Dev Community",
    period: "2023 — PRESENT",
    description: "Actively maintaining several React component libraries and contributing to large-scale CSS-in-JS frameworks used by thousands of developers worldwide.",
    isCurrent: true,
  },
  {
    role: "Lead Developer (Academic)",
    company: "University Informatics Lab",
    period: "2022 — 2023",
    description: "Headed a team of 5 students to build a campus-wide resource management system using PostgreSQL and Node.js, delivering the project on time for 1,200+ active users.",
    isCurrent: false,
  },
  {
    role: "Junior Web Intern",
    company: "Nexus Tech Solutions",
    period: "2021 — 2022",
    description: "Assisted in the migration of legacy jQuery codebases to modern React.js architectures for corporate clients, reducing load time by 40%.",
    isCurrent: false,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary-container/25 selection:text-white">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 glass-nav ambient-glow">
        <nav className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <a href="#" className="text-xl font-black tracking-tighter gradient-text select-none">LUME.DEV</a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`nav-link transition-colors duration-300 ${activeSection === link.href.slice(1) ? 'text-primary' : 'text-white/60 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="btn-primary hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold">
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#131313]/95 px-6 pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-2 text-sm font-medium text-white/70">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#" className="btn-primary inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold w-fit">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 max-w-7xl mx-auto lume-glow-hero overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 max-w-4xl relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest/50 ghost-border">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] text-on-surface">
              Aspiring Web<br />Developer & <br />
              <span className="gradient-text">Informatics Student</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
              Designing and engineering high-performance digital experiences with a focus on clean architecture and technical elegance.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
                <Layers className="w-5 h-5" />
                View Projects
              </a>
              <a href="#contact" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a href="#" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-3 pt-6">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-outline-variant"></div>
              <span className="text-xs uppercase tracking-widest text-outline font-medium">Scroll to explore</span>
            </div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-28 md:py-36 px-6 md:px-10 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group order-2 md:order-1"
            >
              <div className="absolute -inset-4 bg-primary/8 rounded-2xl blur-2xl group-hover:bg-primary/15 transition-all duration-700 pointer-events-none"></div>
              <div className="relative lume-glow-card rounded-2xl overflow-hidden ghost-border">
                <div className="aspect-square bg-surface-container-lowest flex flex-col items-center justify-center gap-4">
                  <div className="w-32 h-32 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-container/20">
                    <Terminal className="w-16 h-16 text-primary-container/60" />
                  </div>
                  <p className="text-xs text-outline uppercase tracking-widest">Your Photo Here</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8 order-1 md:order-2"
            >
              <div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">The Architect</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Beyond the Code.</h2>
              </div>

              <p className="text-lg text-on-surface-variant leading-[1.75] font-light">
                My journey in Informatics has been driven by a fascination with how data moves and how users interact with complexity. I don't just write scripts; I build scalable structures that bridge the gap between human intuition and machine efficiency.
              </p>
              <p className="text-lg text-on-surface-variant leading-[1.75] font-light">
                Currently focusing on modern frontend frameworks and robust backend systems, I strive to create products that are as aesthetically pleasing as they are technically sound.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: "GPA Score", value: "3.84" },
                  { label: "Projects Built", value: "15+" },
                  { label: "Years Coding", value: "3" },
                  { label: "Tech Stack", value: "8+" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl bg-surface-container-lowest stat-glow ghost-border">
                    <div className="gradient-text font-black text-4xl">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-outline mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-28 md:py-36 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Technical Toolkit.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-surface-container-low ghost-border hover:border-primary/25 transition-all duration-300 group lume-glow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary-container/15 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container/20 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{skill.title}</h3>
                  <p className="text-sm text-outline mb-5 font-light">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                      <span key={tag} className="skill-tag px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs uppercase tracking-wider text-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-28 md:py-36 px-6 md:px-10 bg-surface-container-low/40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Selected Works.</h2>
              </div>
              <a href="#" className="text-primary-container font-semibold flex items-center gap-2 group text-sm">
                Explore all projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="project-card group bg-surface-container rounded-2xl overflow-hidden ghost-border"
                >
                  <div className="aspect-video bg-surface-container-lowest relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center lume-glow-card">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-container/20 flex items-center justify-center border border-primary-container/20">
                          {project.icon}
                        </div>
                        <p className="text-xs text-outline uppercase tracking-widest">Project Screenshot</p>
                      </div>
                    </div>
                    {project.isLive && (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/15 border border-tertiary/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-tertiary">Live</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2.5 py-1 bg-primary-container/15 text-primary-container rounded-lg border border-primary-container/20 font-semibold tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-on-surface-variant font-light mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-6">
                      <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors">
                        <Terminal className="w-4 h-4" /> GitHub
                      </a>
                      <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-28 md:py-36 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Career Path</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Experience.</h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`exp-row p-8 rounded-2xl pl-10 flex flex-col md:flex-row justify-between items-start gap-4 cursor-default ${exp.isCurrent ? 'active bg-surface-container-lowest' : 'bg-surface-container-low'}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                      {exp.isCurrent && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary border border-tertiary/25 font-semibold uppercase tracking-wider">Current</span>
                      )}
                    </div>
                    <p className={`${exp.isCurrent ? 'text-primary-container' : 'text-on-surface-variant'} font-medium mb-3`}>{exp.company}</p>
                    <p className="text-on-surface-variant font-light leading-relaxed max-w-xl">
                      {exp.description}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-outline whitespace-nowrap mt-1">{exp.period}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 md:py-36 px-6 md:px-10 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Interaction</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-2 tracking-tight">Get in Touch.</h2>
            </motion.div>

            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
              Have a project in mind or just want to chat about Informatics? Drop me a message and let's build something extraordinary together.
            </p>

            <a href="mailto:hello@lume.dev" className="contact-email text-2xl md:text-4xl font-bold inline-block">
              hello@lume.dev
            </a>

            <div className="bg-surface-container rounded-2xl ghost-border p-8 text-left mt-8">
              <h3 className="text-xl font-bold mb-6 text-center">Or send a message directly</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-outline mb-2 block">Name</label>
                    <input type="text" placeholder="Your name"
                      className="w-full bg-surface-container-highest border border-outline-variant/25 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-300"/>
                  </div>
                  <div>
                    <label class="text-xs font-semibold uppercase tracking-widest text-outline mb-2 block">Email</label>
                    <input type="email" placeholder="your@email.com"
                      className="w-full bg-surface-container-highest border border-outline-variant/25 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-300"/>
                  </div>
                </div>
                <div>
                  <label class="text-xs font-semibold uppercase tracking-widest text-outline mb-2 block">Message</label>
                  <textarea rows={5} placeholder="Tell me about your project..."
                    className="w-full bg-surface-container-highest border border-outline-variant/25 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-300 resize-none"></textarea>
                </div>
                <button className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-8 pt-4">
              <a href="#" className="icon-btn text-on-surface-variant" aria-label="GitHub">
                <Terminal className="w-10 h-10" />
              </a>
              <a href="#" className="icon-btn text-on-surface-variant" aria-label="LinkedIn">
                <Share2 className="w-10 h-10" />
              </a>
              <a href="#" className="icon-btn text-on-surface-variant" aria-label="Email">
                <Mail className="w-10 h-10" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 bg-[#131313] border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 max-w-7xl mx-auto gap-6">
          <div>
            <div className="gradient-text font-black text-lg tracking-tighter mb-1">LUME.DEV</div>
            <div className="text-xs text-white/30 uppercase tracking-[0.1em]">© 2024 The Digital Architect. Engineered with Precision.</div>
          </div>
          <div className="flex gap-8">
            {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map(social => (
              <a key={social} href="#" className="text-xs text-white/30 hover:text-white/80 transition-colors uppercase tracking-[0.1em]">{social}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl btn-primary flex items-center justify-center shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}


