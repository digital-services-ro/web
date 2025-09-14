import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

interface FooterProps {
  language: 'ro' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ro: {
      quickLinks: 'Link-uri rapide',
      contact: 'Contact',
      followUs: 'Urmărește-ne',
      address: 'Str. Exemplu nr. 123, București, România',
      email: 'contact@digitalsense.ro',
      phone: '+40 721 234 567',
      copyright: '© 2025 Digitalsense. Toate drepturile rezervate.',
      navigation: [
        { name: 'Acasă', href: '/' },
        { name: 'Servicii', href: '/servicii' },
        { name: 'Despre noi', href: '/despre-noi' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    en: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      address: '123 Example Street, Bucharest, Romania',
      email: 'contact@digitalsense.com',
      phone: '+40 721 234 567',
      copyright: '© 2025 Digitalsense. All rights reserved.',
      navigation: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Digitalsense - Intelligent Web Solutions" 
                className="h-12 object-contain"
              />
            </Link>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              {language === 'ro' 
                ? 'Agenție de marketing digital specializată în Social Media, SEO și soluții de marketing AI.'
                : 'Digital marketing agency specialized in Social Media, SEO and AI marketing solutions.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              {currentContent.quickLinks}
            </h3>
            <ul className="space-y-2">
              {currentContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              {currentContent.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground-secondary">
                  {currentContent.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${currentContent.email}`}
                  className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                >
                  {currentContent.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${currentContent.phone}`}
                  className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                >
                  {currentContent.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              {currentContent.followUs}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-foreground-secondary text-center">
            {currentContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;