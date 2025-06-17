
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Utensils, Moon, Sun, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { user, userType } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const handleAuthAction = () => {
    if (user && userType === 'donor') {
      navigate('/donor-dashboard');
    } else if (user && userType === 'ngo') {
      navigate('/ngo-dashboard');
    } else {
      navigate('/login');
    }
  };

  const getAuthButtonText = () => {
    if (user && userType === 'donor') return 'Donate Now';
    if (user && userType === 'ngo') return 'Find Food';
    return 'Login';
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold hover:scale-105 transition-transform duration-300">
            <Utensils className="h-6 w-6 text-blue-600" />
            <span className="text-black dark:text-white">Food Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-blue-600 transition-colors hover:scale-105 transform duration-200 ${
                isActive('/') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`hover:text-blue-600 transition-colors hover:scale-105 transform duration-200 ${
                isActive('/features') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-600 transition-colors hover:scale-105 transform duration-200 ${
                isActive('/about') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:scale-110 transition-transform duration-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button 
                onClick={handleAuthAction}
                className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300"
              >
                {getAuthButtonText()}
              </Button>

              {user && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate('/profile')}
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <User className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`block px-3 py-2 hover:text-blue-600 transition-colors ${
                  isActive('/') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`block px-3 py-2 hover:text-blue-600 transition-colors ${
                  isActive('/features') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 hover:text-blue-600 transition-colors ${
                  isActive('/about') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2 space-y-2">
                <Button 
                  onClick={() => {
                    handleAuthAction();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {getAuthButtonText()}
                </Button>
                {user && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigate('/profile');
                      setIsMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Profile
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
