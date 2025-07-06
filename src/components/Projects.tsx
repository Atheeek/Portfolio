import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowUp } from 'lucide-react';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Modern Dashboard App",
      description: "A comprehensive dashboard application built with React and Node.js, featuring real-time data visualization, user authentication, and responsive design.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for scalability and performance.",
      image: project2,
      technologies: ["React", "Express", "Stripe", "PostgreSQL", "Redux"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: project3,
      technologies: ["React", "Socket.io", "MongoDB", "Tailwind", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="p-3 bg-neon-cyan text-black rounded-full hover:bg-white transition-colors">
                      <Github className="w-6 h-6" />
                    </button>
                    <button className="p-3 bg-neon-pink text-white rounded-full hover:bg-neon-purple transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-green text-black text-sm font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </motion.div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="glass-card p-6 mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="btn-ghost-neon group">
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12" />
                    View Code
                  </button>
                  <button className="btn-neon group">
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:-translate-y-1" />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;