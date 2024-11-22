import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Karri Mousami Reddy</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Creative Full Stack Developer skilled in crafting dynamic,
            user-friendly web applications with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="/projects">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </Link>
          <a
            href="https://bit.ly/mousami-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button size="lg" className="group">
              Resume
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center space-x-6"
        >
          <a
            href="https://github.com/mousamireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mousami-reddy-karri-155332217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/mousami_reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
