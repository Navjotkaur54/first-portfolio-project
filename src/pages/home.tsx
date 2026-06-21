import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";


const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
        data-testid="progress-bar"
      />
      
      <header className="fixed top-0 w-full px-6 py-6 md:px-10 md:py-8 flex justify-between items-center ...">
        <div className="font-serif text-xl font-medium tracking-tight" data-testid="text-logo">Navjot Kaur.</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#work" className="hover:opacity-70 transition-opacity" data-testid="link-nav-work">Projects</a>
          <a href="#about" className="hover:opacity-70 transition-opacity" data-testid="link-nav-about">Skills</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity" data-testid="link-nav-contact">Contact</a>
        </nav>
      </header>

      <main className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* HERO */}
        <section className="min-h-[90vh] flex flex-col justify-center pt-24 pb-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-4xl"
          >
            <motion.div variants={FADE_UP} className="mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest" data-testid="text-availability">Open to internships and learning opportunities</span>
            </motion.div>
            
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] tracking-tight mb-8" data-testid="text-hero-title">
              BCA Student & Future Web Developer.
            </motion.h1>
            
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light" data-testid="text-hero-subtitle">
              Hi, I'm Navjot Kaur, a first-year BCA student at Amity University, Noida. I am learning HTML, CSS, Java, and web development while building projects to improve my skills. 
            </motion.p>
            
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 group" data-testid="button-view-work">
                View my work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-border bg-transparent text-foreground font-medium hover:bg-secondary transition-colors" data-testid="button-get-in-touch">
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* WORK */}
        <section id="work" className="py-24 md:py-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="mb-16 md:mb-24 flex items-end justify-between"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight" data-testid="text-section-work">Projects</h2>
            <div className="hidden md:block w-1/3 h-px bg-border mb-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {[
              {
                title: "Personal Portfolio Website",
                role: "Frontend Developer",
                desc: "Built a personal portfolio website to showcase my education, skills, and projects.",
                color: "bg-neutral-100",
                year: "2026"
              },
              {
                title: "HTML Practice Projects",
                role: "Student Project",
                desc: "Created webpages using HTML to learn structure, forms, and semantic elements.",
                color: "bg-neutral-100",
                year: "2026",
                mt: "md:mt-24"
              },
              {
                title: "CSS Learning Journey",
                role: "Learning Project",
                desc: "Practicing layouts, colors, responsive design, and styling techniques using CSS.",
                color: "bg-neutral-100",
                year: "2026"
              },
              {
                title: "Java Fundamentals",
                role: "Programming Practice",
                desc: "Learning Java programming through problem-solving exercises and academic coursework.",
                color: "bg-neutral-100",
                year: "2026",
                mt: "md:mt-24"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={FADE_UP}
                className={`group flex flex-col gap-6 ${project.mt || ''}`}
                data-testid={`card-project-${i}`}
              >
                <div className={`aspect-[4/3] rounded-2xl ${project.color} overflow-hidden relative p-8 flex flex-col justify-between border border-border/50 transition-colors group-hover:border-border`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white border border-border rounded-full text-xs font-medium shadow-sm text-black">
                      {project.year}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="w-full h-1/2 bg-white/50 border border-border/50 rounded-xl backdrop-blur-sm self-end translate-y-12 group-hover:translate-y-8 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-2">{project.title}</h3>
                  <div className="text-sm font-medium text-primary mb-3">{project.role}</div>
                  <p className="text-muted-foreground font-light leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="about" className="py-24 md:py-32 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-8" data-testid="text-section-expertise">Skills</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md" data-testid="text-expertise-desc">
                I am currently learning web development and computer applications. My goal is to become a skilled software developer and build useful digital solutions.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "HTML",
                  desc: "Learning to create structured and accessible web pages."
                },
                {
                  title: "CSS",
                  desc: "Learning responsive layouts and modern website styling."
                },
                {
                  title: "Java",
                  desc: "Building programming fundamentals and problem-solving skills."
                },
                {
                  title: "MS Office",
                  desc: "Comfortable with MS Word and Excel."
                }
              ].map((skill, i) => (
                <motion.div key={i} variants={FADE_UP} className="flex flex-col gap-3" data-testid={`card-expertise-${i}`}>
                  <h4 className="text-lg font-medium">{skill.title}</h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
                
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mt-24 pt-12 border-t border-border flex flex-wrap gap-8 items-center justify-between text-muted-foreground"
          >
            <div className="text-sm font-medium uppercase tracking-widest">
              Currently Learning: HTML • CSS • Java • MS Office
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 md:py-48 mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6" data-testid="text-section-contact">Let's Connect.</h2>
            <p className="text-lg text-muted-foreground font-light mb-12">
              I'm always open to learning opportunities, internships, and networking with fellow students and professionals.
            </p>
            <a 
              href="mailto:n7467517@gmail.com" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground text-lg font-medium transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
              data-testid="link-email"
            >
              n7467517@gmail.com
            </a>
          </motion.div>
        </section>

      </main>

      <footer className="py-8 px-6 md:px-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
        <div data-testid="text-footer-copy">
          © {new Date().getFullYear()} Navjot Kaur. All rights reserved.
        </div>
        
      </footer>
    </div>
  );
}

export default Home;
