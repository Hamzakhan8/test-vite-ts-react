import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Framer Motion",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Tailwind", "Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
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