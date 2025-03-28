
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const NavItems = [
  { title: 'Home', href: '/' },
  { title: 'Safety', href: '/safety' },
  { title: 'Report', href: '/report' },
  { title: 'Volunteer', href: '/volunteer' },
  { title: 'Stories', href: '/stories' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 dark:bg-background/90 backdrop-blur-lg shadow-md py-3 border-b border-border' 
        : 'bg-black/50 dark:bg-black/50 backdrop-blur-sm py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <NavLink 
          to="/" 
          className="flex items-center space-x-2 text-white font-bold text-xl"
        >
          <span className="text-2xl">🐾</span>
          <span className="hidden sm:inline">Paws Project</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `
                px-4 py-2 rounded-full transition-all duration-300
                ${isActive 
                  ? 'text-primary-foreground bg-primary font-medium shadow-lg' 
                  : isScrolled
                    ? 'text-foreground hover:bg-accent hover:text-accent-foreground font-medium'
                    : 'text-white hover:bg-white/20 font-medium'
                }
              `}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className={`rounded-full ${
              isScrolled 
                ? 'text-foreground hover:bg-accent hover:text-accent-foreground' 
                : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded-full md:hidden ${
              isScrolled 
                ? 'text-foreground hover:bg-accent hover:text-accent-foreground' 
                : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="bg-background/95 dark:bg-background/95 backdrop-blur-md border-t border-border absolute top-full left-0 right-0 animate-slide-down md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            {NavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `
                  px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'text-primary-foreground bg-primary font-medium' 
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
