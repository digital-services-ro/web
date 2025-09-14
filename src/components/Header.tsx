import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface HeaderProps {
  language: 'ro' | 'en';
  onLanguageChange: (lang: 'ro' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = {
    ro: [
      { name: 'Acasă', href: '/' },
      { name: 'Servicii', href: '/servicii' },
      { name: 'Despre noi', href: '/despre-noi' },
      { name: 'Contact', href: '/contact' },
    ],
    en: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const currentNav = navigation[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Digitalsense - Intelligent Web Solutions" 
              className="h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('ro')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                  language === 'ro'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground-secondary hover:text-foreground'
                }`}
              >
                RO
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground-secondary hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {currentNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground-secondary hover:text-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;