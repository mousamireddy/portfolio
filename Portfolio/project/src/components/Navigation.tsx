import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold text-lg">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Dialog>
          <DialogTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </motion.header>
  );
}