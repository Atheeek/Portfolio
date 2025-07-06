import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/profile4.png';
import { Suspense, useState, useEffect } from 'react';

// Sophisticated gradient mesh background
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60" />
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
const texts = [
  "Mahammad Atheek",
  "Full-Stack MERN Developer",
  "Frontend Developer ",
  "Backend Developer",
  "React Developer",
  "UI/UX-Focused Engineer"
 
];
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
<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text min-h-[2.5em] sm:min-h-[3em]">
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
              
             <a href="https://github.com/Atheeek" target="_blank" rel="noopener noreferrer">
  <button className="btn-ghost-neon group text-sm sm:text-base">
    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12" />
    View GitHub
  </button>
</a>

              <a href="https://www.linkedin.com/in/mahammad-atheek-rahman-657533253/" target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost-neon group text-sm sm:text-base">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110" />
                Connect
              </button>
              </a>
            </motion.div>
          </motion.div>

          {/* ✅ Profile Photo WITHOUT circular borders or glow */}
     <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 2.5, duration: 0.8 }}
  className="relative order-first md:order-last flex justify-center"
>
  <div className="relative w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] group">
    
    {/* 🔥 Glowing Background Orb */}
    <motion.div
      className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-40 z-0"
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* 🔵 Optional Floating Glow Ring */}
    <motion.div
      className="absolute inset-0 rounded-full border border-cyan-500 opacity-20 z-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />

    {/* 🧑🏽 Transparent Profile Image */}
    <motion.img
      src={profilePhoto}
      alt="Mahammad Atheek Rahman"
className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-full"
      whileHover={{ rotateZ: 1 }}
    />
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
