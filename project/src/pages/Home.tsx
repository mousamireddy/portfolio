import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, FileDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Helmet>
        <title>Mousami Reddy - Portfolio</title>
        <meta name="description" content="Karri Mousami Reddy - Software Developer and Game Developer Portfolio" />
      </Helmet>

      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-xl text-primary-600 dark:text-primary-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I’m
            </motion.h2>
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Karri Mousami Reddy
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building innovative software solutions and immersive digital experiences.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              View My Projects
            </Link>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-colors inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://github.com/mousamiredddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/mousami-reddy-karri-155332217/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:mousamiredddy@gmail.com"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mx-auto max-w-md"
          >
            <img
              src="https://raw.githubusercontent.com/mousamiredddy/portfolio/main/mousami.png"
              alt="Mousami Logo"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="animate-bounce p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
