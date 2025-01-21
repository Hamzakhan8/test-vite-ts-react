import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] -z-0" />
      <div className="absolute h-full w-full bg-gradient-to-t from-gray-900 via-transparent to-gray-900" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-32 pb-20 relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-blue-500"
          >
            <p className="text-lg">Welcome to my portfolio</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
          >
            Transforming Ideas into
            <span className="text-blue-500"> Digital Reality</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Full Stack Developer specializing in building exceptional digital experiences. 
            Focused on creating innovative and user-centric solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/20">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-all transform hover:scale-105">
              Download CV
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 