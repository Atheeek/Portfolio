import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme for developer aesthetic

  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      // Default to dark theme
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Update document class
    document.documentElement.classList.toggle('light', !newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 p-3 glass-card hover:neon-glow transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0.8
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-neon-cyan group-hover:text-neon-purple transition-colors" />
        ) : (
          <Sun className="w-6 h-6 text-neon-yellow group-hover:text-neon-pink transition-colors" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Switch to {isDark ? 'light' : 'dark'} mode
      </div>
    </motion.button>
  );
};

export default ThemeToggle;