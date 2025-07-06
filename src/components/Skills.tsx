import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import html5 from '../assets/skills/html5.svg';
import css3 from '../assets/skills/css3.svg';
import js from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import vite from '../assets/skills/vite.svg';
import node from '../assets/skills/nodejs.svg';
import express from '../assets/skills/express.svg';
import mongodb from '../assets/skills/mongodb.svg';
import mysql from '../assets/skills/mysql.svg';
import firebase from '../assets/skills/firebase.svg';
import postman from '../assets/skills/postman.svg';
import github from '../assets/skills/github.svg';
import tailwind from '../assets/skills/tailwindcss.svg';
import vercel from '../assets/skills/vercel.svg';
import vscode from '../assets/skills/vscode.svg';



const skills = [
  { name: 'HTML5', img: html5 },
  { name: 'CSS3', img: css3 },
  { name: 'JavaScript', img: js },
  { name: 'React', img: react },
  { name: 'Vite', img: vite },
  { name: 'Node.js', img: node },
  { name: 'Express.js', img: express },
  { name: 'MongoDB', img: mongodb },
  { name: 'MySQL', img: mysql },
  { name: 'Firebase', img: firebase },
  { name: 'Postman', img: postman },
  { name: 'GitHub', img: github },
  { name: 'Tailwind CSS', img: tailwind },
  { name: 'Vercel', img: vercel },
  { name: 'VS Code', img: vscode },
];



const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            Technologies and tools I use to build and deploy great web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="glass-card p-6 flex flex-col  items-center justify-center text-center"
            >
              <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4 object-contain" />
              <p className="text-base font-medium text-foreground">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;