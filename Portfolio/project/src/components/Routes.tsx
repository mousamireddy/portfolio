import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Skills } from '@/pages/Skills';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </RouterRoutes>
  );
}