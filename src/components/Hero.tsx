import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
import { Suspense, useState, useEffect } from 'react';

// Sophisticated gradient mesh background
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Smooth gradient mesh */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, hsl(var(--neon-cyan) / 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, hsl(var(--neon-purple) / 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, hsl(var(--neon-pink) / 0.2) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Subtle animated orbs */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 30% 70%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 40%)`,
              `radial-gradient(circle at 70% 30%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 40%)`,
              `radial-gradient(circle at 30% 70%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 40%)`
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Soft particles */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-30"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Typewriter effect component
const TypewriterText = () => {
  const texts = ["Alex Developer", "Full-Stack Developer", "React Specialist", "UI/UX Enthusiast"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text min-h-[1.2em]">
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Animated Typewriter Name */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm uppercase tracking-widest text-neon-cyan font-medium"
              >
                Hi, I'm
              </motion.div>
              
              <TypewriterText />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
            >
              Crafting exceptional digital experiences with modern technologies
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <button className="btn-neon group text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </button>
              
              <button className="btn-ghost-neon group text-sm sm:text-base">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12" />
                View GitHub
              </button>
              
              <button className="btn-ghost-neon group text-sm sm:text-base">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110" />
                Connect
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Alex Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -inset-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-cyan rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;