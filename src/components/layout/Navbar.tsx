
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Utensils, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userType, signOut } = useAuth();
  const isMobile = useIsMobile();

  const NavItems = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/features' },
    { title: 'About', href: '/about' },
  ];

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

  const handleActionButtonClick = () => {
    if (user && userType === 'donor') {
      navigate('/donor-dashboard');
    } else if (user && userType === 'ngo') {
      navigate('/ngo-dashboard');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  const isDonorDashboardActive = () => {
    return location.pathname === '/donor-dashboard';
  };

  const isNGODashboardActive = () => {
    return location.pathname === '/ngo-dashboard';
  };

  const isProfileActive = () => {
    return location.pathname === '/profile';
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
            <Utensils className="h-6 w-6 text-black dark:text-white" />
            <span className={`hidden sm:inline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Food Connect
            </span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 font-medium ${
                  isActiveRoute(item.href)
                    ? isDarkMode 
                      ? 'bg-green-800 text-white shadow-md'
                      : 'bg-green-200 text-black shadow-md'
                    : isDarkMode
                      ? 'text-white hover:bg-white/10'
                      : 'text-black hover:bg-black/5'
                }`}
              >
                {item.title}
              </NavLink>
            ))}
            
            {!user && (
              <Button
                onClick={() => navigate('/login')}
                variant="ghost"
                className={`px-4 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-black hover:bg-black/5'
                }`}
              >
                Login
              </Button>
            )}
            
            {user && (
              <>
                <Button
                  onClick={handleActionButtonClick}
                  className={`px-4 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 ${
                    (isDonorDashboardActive() || isNGODashboardActive())
                      ? isDarkMode 
                        ? 'bg-green-800 text-white shadow-md hover:bg-green-700'
                        : 'bg-green-200 text-black shadow-md hover:bg-green-300'
                      : 'bg-paws-green text-white hover:bg-paws-green/90'
                  }`}
                >
                  {userType === 'donor' ? 'Donate Now' : 'Find Food'}
                </Button>
                <Button
                  onClick={() => navigate('/profile')}
                  variant="outline"
                  className={`px-4 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 ${
                    isProfileActive()
                      ? isDarkMode 
                        ? 'bg-green-800 text-white border-green-500 shadow-md'
                        : 'bg-green-200 text-black border-green-300 shadow-md'
                      : isDarkMode
                        ? 'border-green-500 text-white hover:bg-white/10'
                        : 'border-green-300 text-black hover:bg-paws-green/5'
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </>
            )}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`rounded-full hover:scale-105 transition-all duration-300
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
              className={`rounded-full md:hidden hover:scale-105 transition-all duration-300
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
                className={`px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isActiveRoute(item.href)
                    ? isDarkMode 
                      ? 'bg-green-800 text-white font-medium'
                      : 'bg-green-200 text-black font-medium'
                    : isDarkMode
                      ? 'text-white hover:bg-white/10'
                      : 'text-black hover:bg-black/5'
                }`}
              >
                {item.title}
              </NavLink>
            ))}
            
            {!user && (
              <Button
                onClick={() => navigate('/login')}
                variant="ghost"
                className="justify-start hover:scale-105 transition-all duration-300"
              >
                Login
              </Button>
            )}
            
            {user && (
              <>
                <Button
                  onClick={handleActionButtonClick}
                  className={`justify-start hover:scale-105 transition-all duration-300 ${
                    (isDonorDashboardActive() || isNGODashboardActive())
                      ? isDarkMode 
                        ? 'bg-green-800 text-white hover:bg-green-700'
                        : 'bg-green-200 text-black hover:bg-green-300'
                      : 'bg-paws-green text-white hover:bg-paws-green/90'
                  }`}
                >
                  {userType === 'donor' ? 'Donate Now' : 'Find Food'}
                </Button>
                <Button
                  onClick={() => navigate('/profile')}
                  variant="ghost"
                  className={`justify-start hover:scale-105 transition-all duration-300 ${
                    isProfileActive()
                      ? isDarkMode 
                        ? 'bg-green-800 text-white'
                        : 'bg-green-200 text-black'
                      : ''
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
