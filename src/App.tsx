/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Linkedin, 
  Dribbble, 
  Github,
  ChevronRight,
  Brain,
  Database,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  X,
  Code2,
  Wrench,
  Briefcase
} from "lucide-react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && <p className="text-white/60 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="h-1.5 w-20 bg-accent mt-6 mx-auto rounded-full" />
  </div>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      title: "Automated Attendance System", 
      category: "Computer Vision", 
      img: "ChatGPT Image Feb 25, 2026, 07_22_48 PM.png",
      tags: ["CNN", "OpenCV", "Python"],
      description: "A contactless, automated attendance management system designed to streamline institutional processes. It utilizes advanced facial recognition algorithms to identify individuals and log their presence in real-time.",
      objective: "To develop a contactless, automated Attendance management system.",
      methods: "Computer Vision, CNN, Machine Learning"
    },
    { 
      title: "Energy Forecasting System", 
      category: "Deep Learning", 
      img: "ChatGPT Image Feb 25, 2026, 09_39_03 PM.png",
      tags: ["LSTM", "Flask", "Pandas"],
      description: "A real-time energy demand forecasting system that predicts power requirements based on historical load data and weather parameters. This helps in efficient energy distribution and management.",
      objective: "To build a real-time energy demand forecasting system using historical load data and weather parameters.",
      methods: "Deep Learning (LSTM/CNN), Python, Pandas, MinMaxScaler, Flask Web App, Data Visualization"
    },
    { 
      title: "Enhanced Human Behavior Recognition in Smart Environments using Deep Artificial Neural Networks", 
      category: "Deep Learning", 
      img: "ChatGPT Image Feb 25, 2026, 09_43_36 PM.png",
      tags: ["ANN", "Deep Learning", "Smart Environments", "Python"],
      description: "A sophisticated human behavior recognition system designed for smart environments. It leverages deep artificial neural networks to analyze and categorize complex human activities with high precision, enabling intelligent responses in automated spaces.",
      objective: "To enhance human behavior recognition accuracy in smart environments using advanced deep learning architectures.",
      methods: "Deep Artificial Neural Networks (ANN), Data Preprocessing, Feature Extraction, Python"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-bg-dark/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <Briefcase className="text-accent" size={28} />
            <span>Portfolio</span>
          </div>
          
          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#home" className="text-accent">Home</a>
            <a href="#skills" className="text-white/80 hover:text-accent transition-colors">Skills</a>
            <a href="#about" className="text-white/80 hover:text-accent transition-colors">About me</a>
            <a href="#experience" className="text-white/80 hover:text-accent transition-colors">Experience</a>
            <a href="#education" className="text-white/80 hover:text-accent transition-colors">Education</a>
            <a href="#portfolio" className="text-white/80 hover:text-accent transition-colors">Portfolio</a>
            <a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contact me</a>
          </div>

          <a href="mailto:shreeshanthgoud@gmail.com" className="btn-primary hidden md:block">Hire Me</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl font-medium text-white/90 mb-2">Hi I am</p>
              <h2 className="text-2xl font-semibold text-white/90 mb-4">Koyyada Shreeshanth</h2>
              <h1 className="text-6xl md:text-8xl font-bold text-accent mb-10 leading-tight">
                AI/ML <br /> Engineer
              </h1>
              
              <div className="flex gap-4 mb-12">
                <a href="https://www.linkedin.com/in/koyyada-shreeshanth-a17414285" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20} /></a>
                <a href="https://github.com/shreeshanthgoud" target="_blank" rel="noreferrer" className="social-icon"><Github size={20} /></a>
                <a href="mailto:shreeshanthgoud@gmail.com" className="social-icon"><Mail size={20} /></a>
              </div>

              <div className="flex flex-wrap gap-6 mb-16">
                <a href="mailto:shreeshanthgoud@gmail.com" className="btn-primary px-12">Hire Me</a>
                <a 
                  href="/resume.pdf" 
                  download="Resume_Feb.pdf"
                  className="btn-outline px-12 inline-flex items-center justify-center"
                >
                  Download CV
                </a>
              </div>

              {/* Stats Section */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-3 gap-8 max-w-md bg-white/5 p-8 rounded-2xl border border-white/5"
              >
                {[
                  { label: "Experiences", value: "1+" },
                  { label: "Project done", value: "5+" },
                  { label: "Certifications", value: "3+" }
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-accent mb-1">{stat.value}</h3>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                {/* Circular Mask for Image */}
                <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-accent/20">
                  <img 
                    src="IMG1.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Skills Section - Marquee Style */}
        <section id="skills" className="py-24 scroll-mt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] text-center">Technical Expertise</h2>
          </div>
          
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
              {[
                "Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", 
                "Pandas", "NumPy", "Flask", "Docker", "Git", "MATLAB", "Java",
                "CNN", "LSTM", "Computer Vision", "Deep Learning", "NLP", "Keras", "Figma"
              ].concat([
                "Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", 
                "Pandas", "NumPy", "Flask", "Docker", "Git", "MATLAB", "Java",
                "CNN", "LSTM", "Computer Vision", "Deep Learning", "NLP", "Keras", "Figma"
              ]).map((skill, i) => (
                <span 
                  key={i} 
                  className="text-3xl md:text-4xl font-bold text-white hover:text-accent transition-colors cursor-default select-none tracking-tighter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex overflow-x-hidden mt-12">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4" style={{ animationDirection: 'reverse' }}>
              {[
                "Data Preprocessing", "Model Validation", "Modular Coding", 
                "Data Visualization", "Face Recognition", "Energy Forecasting",
                "Multimodal ML", "Time Series", "Neural Networks", "API Design",
                "Cloud Computing", "Research", "Problem Solving", "Innovation"
              ].concat([
                "Data Preprocessing", "Model Validation", "Modular Coding", 
                "Data Visualization", "Face Recognition", "Energy Forecasting",
                "Multimodal ML", "Time Series", "Neural Networks", "API Design",
                "Cloud Computing", "Research", "Problem Solving", "Innovation"
              ]).map((skill, i) => (
                <span 
                  key={i} 
                  className="text-2xl md:text-3xl font-medium text-white/80 hover:text-accent transition-colors cursor-default select-none italic"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-accent/20">
                <img 
                  src="vecteezy_myself-vector-icon-design_21098416.jpg" 
                  alt="Research" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">About <span className="text-accent">Me</span></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Dedicated and detail-oriented technology enthusiast with hands-on experience in AI/ML and full-stack
                development. Passionate about problem-solving, continuous learning and applying AI techniques to innovative
                projects.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Machine Learning", value: 90 },
                  { label: "Deep Learning", value: 85 },
                  { label: "Computer Vision", value: 80 },
                  { label: "Python Programming", value: 95 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.label}</span>
                      <span className="text-accent">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 scroll-mt-20">
          <SectionHeader title="Experience" subtitle="My professional journey and research contributions" />
          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                role: "Research Assistant",
                company: "Manav Rachna University, Faridabad",
                period: "September 2025 – November 2025",
                points: [
                  "Research on Alzheimer Detection",
                  "Developed a ML model using multimodal method"
                ],
                icon: <Brain className="text-accent" />
              },
              {
                role: "Graphic Designer",
                company: "Manav Rachna University, Faridabad",
                period: "February 2025 – April 2025",
                points: [
                  "Designed Monthly Newsletters for Computer Science Department"
                ],
                icon: <ChevronRight className="text-accent" />
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 border-l-2 border-white/5 pb-12 last:pb-0"
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-bg-dark border-2 border-accent flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                
                <div className="bg-bg-card p-8 rounded-[2rem] border border-white/5 hover:border-accent/20 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-accent text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-white/60 text-sm flex items-start gap-3 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-32 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader title="Education" />
              <div className="space-y-8">
                {[
                  {
                    degree: "B.Tech. [Computer Science Engineering in AI & ML]",
                    school: "Manav Rachna University",
                    period: "July 2023 – Present",
                    info: "CGPA: 7.8/10",
                    icon: <GraduationCap className="text-accent" />
                  },
                  {
                    degree: "Intermediate Education",
                    school: "Gurukrupa Junior College",
                    period: "July 2021 – March 2023",
                    info: "Percentage: 96.9%",
                    icon: <GraduationCap className="text-white/40" />
                  }
                ].map((edu, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 rounded-3xl bg-bg-card border border-white/5 hover:border-accent/20 transition-all"
                  >
                    <div className="p-4 bg-white/5 rounded-2xl h-fit">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <p className="text-white/60 text-sm mb-2">{edu.school}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">{edu.period}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{edu.info}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Certifications" />
              <div className="grid grid-cols-1 gap-4">
                {[
                  "NPTEL - Design Thinking - A Primer",
                  "NPTEL - Design Technology and Innovation",
                  "NPTEL - The Joy of Computing using Python"
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-accent/20 transition-all group"
                  >
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                      <Award size={20} />
                    </div>
                    <span className="font-medium text-white/80">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 scroll-mt-20">
          <SectionHeader title="My Portfolio" subtitle="Showcasing my latest research projects and technical implementations" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-[2.5rem] overflow-hidden bg-bg-card border border-white/5 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-white">
                  <img src={project.img} alt={project.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-xs text-white/60">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] bg-bg-dark/90 backdrop-blur-xl flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-bg-card w-full max-w-4xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all z-10"
                >
                  <X size={24} />
                </button>

                <div className="p-10 md:p-14 md:pr-24">
                  <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{selectedProject.category}</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">{selectedProject.title}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Objective</h4>
                      <p className="text-white/80 leading-relaxed">{selectedProject.objective}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Description</h4>
                      <p className="text-white/80 leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Methods & Tools</h4>
                      <p className="text-white/80 leading-relaxed">{selectedProject.methods}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {selectedProject.tags.map((tag: string) => (
                        <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white/60 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section id="contact" className="py-32 scroll-mt-20">
          <div className="bg-accent rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-10">Let's Work Together</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-16">
                I am currently looking for new opportunities and research collaborations. 
                Feel free to reach out if you have any questions or just want to say hi!
              </p>
              
              <div className="flex flex-wrap justify-center gap-10 mb-20">
                <a href="mailto:shreeshanthgoud@gmail.com" className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 transition-all">
                  <Mail className="text-white" />
                  <span className="font-bold">shreeshanthgoud@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl">
                  <Phone className="text-white" />
                  <span className="font-bold">+91 9553561888</span>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-accent transition-all"><Instagram /></a>
                <a href="https://www.linkedin.com/in/koyyada-shreeshanth-a17414285" target="_blank" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-accent transition-all"><Linkedin /></a>
                <a href="https://github.com/shreeshanthgoud" target="_blank" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-accent transition-all"><Github /></a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/40 text-sm">© 2026 Koyyada Shreeshanth. All rights reserved.</p>
      </footer>
    </div>
  );
}
