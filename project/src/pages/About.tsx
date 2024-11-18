import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, GraduationCap } from 'lucide-react';

function About() {
  const timeline = [
    {
      icon: GraduationCap,
      title: 'B.Tech in Information Technology',
      place: 'Aditya College of Engineering and Technology',
      date: '2020 - 2024',
      description: 'Pursuing my bachelor\'s degree with a focus on modern software development technologies.',
    },
    {
      icon: Briefcase,
      title: 'Gaming Intern',
      place: 'Technical Hub',
      date: '2022 - 2023',
      description: 'Developed interactive games and applications using Unity and modern game development practices.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Mousami Reddy</title>
        <meta
          name="description"
          content="Learn about Karri Mousami Reddy's journey and experience in software development"
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32"
      >
        <div className="max-w-4xl w-full text-center">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h1>

          {/* Intro Section */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            I'm a passionate software developer and game developer with experience in building immersive
            applications and innovative solutions. My journey in technology is driven by a desire to create meaningful
            experiences through code.
          </motion.p>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-left space-y-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                      <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.place} | {item.date}</p>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h2 className="text-xl font-semibold text-orange-900 dark:text-orange mb-4">Fun Fact</h2>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not immersed in code, you'll find me channeling my creativity through cooking flavorful dishes, singing melodies that inspire joy, or diving into the vibrant world of digital arts. These passions fuel my imagination and bring balance to my tech-driven life.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
