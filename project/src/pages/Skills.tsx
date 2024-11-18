import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code2, Database, Cpu, Palette, Brain } from 'lucide-react';
import SkillCard from '../components/SkillCard';

function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript/TypeScript', level: 88 },
      ],
    },
    {
      icon: Palette,
      title: 'Web Development',
      skills: [
        { name: 'React', level: 92 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Figma', level: 85 },
      ],
    },
    {
      icon: Cpu,
      title: 'Game Development',
      skills: [
        { name: 'Unity', level: 88 },
        { name: 'Blender', level: 80 },
        { name: 'VR Development', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 82 },
      ],
    },
    {
      icon: Brain,
      title: 'Soft Skills',
      skills: [
        { name: 'Time Management', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Adaptability', level: 95 },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Mousami Reddy</title>
        <meta name="description" content="Explore my technical skills and expertise in software development, game development, and more." />
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
              Technical Expertise
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies across various domains
              of software development and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Skills;