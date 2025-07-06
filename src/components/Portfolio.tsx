import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import ThemeToggle from './ThemeToggle';

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Clean animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 opacity-30"
        >
          <div className="w-full h-full" style={{
            background: `
              radial-gradient(circle at 10% 20%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, hsl(var(--neon-purple) / 0.1) 0%, transparent 50%)
            `
          }} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
          <Skills />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
          <Projects />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Contact />
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative py-12 text-center border-t border-border/50"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple p-0.5"
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground mb-4">
              Crafted with ❤️ using React, Three.js, and Framer Motion
            </p>
            
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Developer. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Portfolio;