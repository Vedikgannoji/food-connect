
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, PawPrint } from 'lucide-react';
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
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4 px-4">
      <header className={`w-full max-w-6xl transition-all duration-300 rounded-full ${
        isScrolled ? 'py-2' : 'py-3'
      } ${
        isDarkMode 
          ? 'bg-black/70 text-white' 
          : 'bg-white/80 text-black'
      } backdrop-blur-md shadow-lg border ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
        <div className="container flex items-center justify-between">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 font-bold text-xl"
          >
            <PawPrint className={`h-6 w-6 ${isDarkMode ? 'text-paws-green' : 'text-paws-brown'}`} />
            <span className={`hidden sm:inline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Paws Project
            </span>
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
                    ? 'text-white bg-paws-green font-medium shadow-md' 
                    : isDarkMode
                      ? 'text-white hover:bg-white/10 font-medium'
                      : 'text-black hover:bg-black/5 font-medium'
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
              className={`rounded-full 
                ${isDarkMode 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black hover:bg-black/5'
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
              className={`rounded-full md:hidden 
                ${isDarkMode 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black hover:bg-black/5'
                }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`
          absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl overflow-hidden 
          transition-all duration-300 animate-fade-in md:hidden
          ${isDarkMode ? 'bg-black/80' : 'bg-white/90'} 
          backdrop-blur-md shadow-lg border
          ${isDarkMode ? 'border-white/10' : 'border-black/5'}
        `}>
          <nav className="flex flex-col p-4 space-y-2">
            {NavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `
                  px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-paws-green text-white font-medium' 
                    : isDarkMode
                      ? 'text-white hover:bg-white/10'
                      : 'text-black hover:bg-black/5'
                  }
                `}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
