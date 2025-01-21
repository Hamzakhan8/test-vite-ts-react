import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate web developer with a focus on creating beautiful and functional web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Profile"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover h-[400px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Who am I?</h3>
              <p className="text-gray-400">
                I'm a Full Stack Developer with expertise in modern web technologies.
                I specialize in building responsive websites and web applications
                that provide seamless user experiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">My Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React.js',
                  'Node.js',
                  'TypeScript',
                  'MongoDB',
                  'Next.js',
                  'Tailwind CSS'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 p-3 rounded-lg text-gray-300 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Education</h3>
              <p className="text-gray-400">
                Bachelor's in Computer Science<br />
                University Name, 2020-2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 