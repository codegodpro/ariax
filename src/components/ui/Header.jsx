import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Salon & Spa', path: '/salon', icon: 'Sparkles' },
    { name: 'Farm Fresh', path: '/farm', icon: 'Egg' },
    { name: 'Contact', path: '/contact', icon: 'PhoneCall' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 mx-4 mt-6 rounded-[6px] bg-black/80 backdrop-blur-lg shadow-2xl text-white transition-all duration-500"
    >
      <div className="flex items-center justify-between h-16 px-8">
          {/* Logo Section */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center shadow-brand">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  <path d="M12 16L13.09 22.26L20 23L13.09 23.74L12 30L10.91 23.74L4 23L10.91 22.26L12 16Z" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse-subtle"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-headline font-semibold text-lg text-primary group-hover:text-gradient-brand transition-colors duration-300">
                New Arias
              </h1>
              <p className="font-accent text-sm text-secondary -mt-1">
                Lifestyle Hub
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-300 group text-white ${
                  isActivePath(item.path)
                    ? 'shadow-brand underline underline-offset-8 decoration-2'
                    : 'hover:text-accent-foreground hover:bg-muted'
                }`}
              >
                <Icon
                  name={item.icon}
                  size={16}
                  className={`transition-colors duration-300 text-white ${
                    isActivePath(item.path) ? '' : 'group-hover:text-accent-foreground'
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              className="font-body interactive-hover rounded-[6px] text-white border-white"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white dark:text-neutral-300 hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-white dark:text-neutral-300" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 glass-card m-4 rounded-3xl">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium text-sm transition-all duration-200 text-white ${
                    isActivePath(item.path)
                      ? 'shadow-brand underline underline-offset-8 decoration-2'
                      : 'hover:text-accent-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} className="text-white" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-glass-200 dark:border-glass-dark-200">
              <div className="flex justify-center mb-4">
                <ThemeToggle />
              </div>
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                fullWidth
                className="font-body interactive-hover rounded-[6px] text-white border-white"
              >
                Book Consultation
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Sparkles"
                iconPosition="left"
                fullWidth
                className="bg-gradient-neon text-white hover:shadow-neon-hover font-body rounded-[6px] border-white"
              >
                Begin Transformation
              </Button>
            </div>
          </div>
        </div>
      <style>{`
        @keyframes vibrate {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
        .animate-vibrate-slow {
          animation: vibrate 1.5s infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;