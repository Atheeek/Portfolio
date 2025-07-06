import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skills = [
    { name: 'HTML5', icon: '🌐', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: '⚡', level: 92, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', level: 88, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🚀', level: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', icon: '🍃', level: 80, color: 'from-emerald-500 to-green-600' },
    { name: 'GitHub', icon: '🐙', level: 90, color: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', icon: '📘', level: 85, color: 'from-blue-600 to-indigo-600' }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card group cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10 text-center p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-neon-cyan transition-colors">
                  {skill.name}
                </h3>
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;