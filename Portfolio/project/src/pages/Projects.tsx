import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Dynamic Emotion Recognition',
    description:
      'A hybrid deep learning model combining CNN and LSTM for real-time emotion recognition from video streams. Implemented using Python, TensorFlow, and Keras with advanced preprocessing and optimization techniques.',
    image:
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
    tags: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision'],
    liveUrl: 'https://bit.ly/3Cylb8e',
    githubUrl: 'https://github.com/mousamireddy/Dynamic-Emotion-Recognition-Using-Hybrid-Deep-Learning-Models',
  },
  {
    title: 'Egg Breaker 3D Game',
    description:
      'An engaging 3D game developed in Unity featuring interactive gameplay mechanics, physics-based interactions, and immersive visual effects. Created detailed game levels and 3D models using Blender.',
    image:
      'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&q=80',
    tags: ['Unity', 'C#', 'Blender', '3D Modeling', 'Game Development'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mousamireddy/3D_Game',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with Vite, React, and TypeScript. Features elegant animations, dark mode, and seamless navigation while showcasing projects and skills.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mousamireddy/portfolio',
  },
];

export function Projects() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-muted-foreground mb-8">
            A showcase of my recent work in software development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}