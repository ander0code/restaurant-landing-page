import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, ChefHat } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#menu', label: 'Menú' },
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white text-sm py-2.5 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+51994428965" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>994-428-965</span>
            </a>
            <span className="flex items-center gap-2 text-secondary-400">
              <Clock className="w-4 h-4" />
              <span>Mar - Dom: 12pm - 11pm</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary-400">
            <ChefHat className="w-4 h-4" />
            <span className="font-medium">Cocina Peruana & Fusión</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-secondary-900">
                  Bistro
                </span>
                <span className="font-display text-2xl font-bold text-primary-600">
                  {' '}Sabores
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-secondary-700 font-medium hover:text-primary-600 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('#reservas')}
                className="btn-primary"
              >
                Reservar Mesa
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container-custom py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 text-secondary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => scrollToSection('#reservas')}
                className="btn-primary w-full justify-center"
              >
                Reservar Mesa
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
