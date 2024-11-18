import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import AppRoutes from './routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <AnimatePresence mode="wait">
              <AppRoutes />
            </AnimatePresence>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;