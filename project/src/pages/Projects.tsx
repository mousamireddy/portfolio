import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Dynamic Emotion Recognition',
      role: 'Lead Developer',
      tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      description: 'Designed a hybrid deep learning model (CNN + LSTM) for emotion recognition from video streams, achieving high accuracy in real-time emotion detection.',
      githubUrl: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Egg Breaker 3D Game',
      role: 'Game Developer',
      tools: ['Unity', 'Blender', 'C#'],
      description: 'Developed a 3D game with interactive gameplay, physics, and a scoring system. Features include realistic physics simulation and engaging user interface.',
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Portfolio Website',
      role: 'Web Developer',
      tools: ['React', 'TypeScript', 'Tailwind CSS'],
      description: 'Created a responsive single-page website showcasing my skills and projects. Features modern design, animations, and dark mode support.',
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Mousami Reddy</title>
        <meta name="description" content="Explore my portfolio of projects in software development, game development, and web development." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of my work in software development, game development, and web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              More Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always working on new projects. Check back soon for updates!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;