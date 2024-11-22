import { ThemeProvider } from '@/components/theme-provider';
import { Routes } from '@/components/Routes';
import { Navigation } from '@/components/Navigation';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4">
          <Routes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;