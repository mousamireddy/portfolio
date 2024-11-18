import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  role: string;
  tools: string[];
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  tools,
  description,
  githubUrl,
  demoUrl,
  imageUrl,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden">
        <div className="relative overflow-hidden group h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {githubUrl && (
              <Button
                variant="neomorphic"
                size="icon"
                asChild
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub Repository"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button
                variant="neomorphic"
                size="icon"
                asChild
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Live Demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <CardHeader>
          <h3 className="text-xl font-semibold text-primary mb-1">
            {title}
          </h3>
          <p className="text-sm text-primary/80">
            {role}
          </p>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm bg-secondary text-primary rounded-full shadow-neuro-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;